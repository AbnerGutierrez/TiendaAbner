<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Services\PayPalService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Http\Request;

class GuestController extends Controller
{

    public function mainProduct()
    {
        $product = Product::where('id', 8)->firstOrFail();

        $images = DB::table('product_images')
            ->where('id_product', $product->id)
            ->pluck('image')
            ->map(fn($img) => Storage::url($img));

        return Inertia::render('Guest/MainProduct', [
            'product' => [
                'id' => $product->id,
                'uuid' => $product->uuid,
                'title' => $product->title,
                'description' => $product->description,
                'price' => $product->price,
                'stock' => $product->stock,
                'images' => $images,
            ],
        ]);
    }

    public function mainProductCheckout(Request $request)
    {
        abort_if(!$request->product_id, 404);
        $product = Product::where('uuid', $request->product_id)->firstOrFail();
        $images = DB::table('product_images')
            ->where('id_product', $product->id)
            ->pluck('image')
            ->map(fn($img) => Storage::url($img));

        return Inertia::render('Guest/GuestCheckout', [
            'product' => [
                'id' => $product->id,
                'title' => $product->title,
                'description' => $product->description,
                'price' => $product->price,
                'stock' => $product->stock,
                'images' => $images,
            ],
        ]);
    }

    public function mainProductCreateOrder(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
            'address2' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip' => 'required',
        ]);

        $product = Product::findOrFail($request->product_id);

        if ($product->stock <= 0) {
            return response()->json(['message' => 'Producto sin stock'], 422);
        }

        $order = Order::create([
            'product_id' => $product->id,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'address2' => $request->address2,
            'city' => $request->city,
            'state' => $request->state,
            'zip' => $request->zip,
            'amount' => $product->price,
        ]);

        return response()->json($order);
    }

    public function mainProductPayPalCreateOrder(Request $request, PayPalService $paypal)
    {
        $request->validate([
            'orderId' => 'required|exists:orders,id',
        ]);

        $order = Order::with('product')->findOrFail($request->orderId);
        // 🔐 La orden debe estar pendiente
        if ($order->status !== 'pending') {
            return response()->json([
                'message' => 'La orden no es válida para pago'
            ], 422);
        }

        // 🔁 Idempotencia: si ya existe orden PayPal, reutilizarla
        if ($order->paypal_order_id) {
            return response()->json([
                'id' => $order->paypal_order_id
            ]);
        }

        try {
            // 🔒 El monto SIEMPRE sale del backend
            $paypalOrder = $paypal->createOrder($order->amount);
            // Guardar relación PayPal ↔ Orden
            $order->update([
                'paypal_order_id' => $paypalOrder['id']
            ]);

            return response()->json([
                'id' => $paypalOrder['id']
            ]);
        } catch (\Throwable $e) {
            // Log para diagnóstico
            Log::error('Error creando orden PayPal', [
                'order_id' => $order->id,
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'message' => 'No se pudo crear la orden de PayPal'
            ], 500);
        }
    }

    public function mainProductPayPalOrderCapture(string $paypalOrderId, PayPalService $paypal)
    {
        try {

            $result = DB::transaction(function () use ($paypalOrderId, $paypal) {
                $order = Order::with('product')
                    ->where('paypal_order_id', $paypalOrderId)
                    ->lockForUpdate()
                    ->firstOrFail();

                if ($order->status === 'paid') {
                    return ['status' => 'already_paid', 'order' => $order];
                }


                $paypalResponse = $paypal->captureOrder($paypalOrderId);
                $status = data_get($paypalResponse, 'status');

                if ($status !== 'COMPLETED') {
                    throw new \Exception('Pago no completado en PayPal');
                }

                $capture = data_get($paypalResponse, 'purchase_units.0.payments.captures.0');

                // Validar monto
                if ((float)$capture['amount']['value'] !== (float)$order->amount) {
                    throw new \Exception('El monto no coincide');
                }

                $order->update([
                    'status' => 'paid',
                    'payment_id' => $capture['id'],
                ]);

                $order->product->decrement('stock');

                return ['status' => 'success', 'order' => $order];
            });

            return response()->json($result);
        } catch (\Throwable $e) {
            Log::error("Error en Captura:", ['mensaje' => $e->getMessage()]);
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
