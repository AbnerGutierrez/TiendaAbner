<?php

namespace App\Http\Controllers\Productos;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Services\PayPalService;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{

    public function showlist()
    {

        $productos = Product::with('images')->get();
        return Inertia::render('ListaProductos', [
            'productos' => $productos,
        ]);
    }
    public function showProduct($uuid)
    {
        $product = Product::where('uuid', $uuid)->firstOrFail();


        $images = DB::table('product_images')
            ->where('id_product', $product->id)
            ->pluck('image')
            ->map(fn($img) => Storage::url($img));

        return Inertia::render('Guest/DetailProduct', [
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
    public function showCepilloDucha()
    {
        $producto = Product::with(['colors', 'promotions', 'features', 'boxContent', 'images'])->find(1);
        // dd($producto->boxContent);
        return Inertia::render('Products/CepilloDucha', ['producto' => $producto]);
    }

    //Compra

    public function checkOut(Request $request)
    {
        // dd($request);    
        abort_if(!$request->product_id, 404);
        $product = Product::where('uuid', $request->product_id)->firstOrFail();
        $images = DB::table('product_images')
            ->where('id_product', $product->id)
            ->pluck('image')
            ->map(fn($img) => Storage::url($img));

        return Inertia::render('Buy/CheckOut', [
            'product' => [
                'id' => $product->id,
                'title' => $product->title,
                'description' => $product->description,
                'price' => $product->price,
                'stock' => $product->stock,
                'images' => $images,
                'color' => $request->color,
                'promotion' => $request->promotion,
            ],
        ]);
    }

    public function CreateOrder(Request $request)
    {
        $order = false;
        $idUser = auth()->id();
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

        try {

            $product = Product::findOrFail($request->product_id);

            if ($product->stock <= 0) {
                return response()->json(['message' => 'Producto sin stock'], 422);
            }

            $amount = $product->price;
            if ($request->product['promotion'] == 'discount') {
                $discount = ($product->price * $request->product['value']) / 100;
                $amount = $product->price - $discount;
            }

            $order = Order::create([
                'product_id' => $product->id,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'idUser' => $idUser,
                'address' => $request->address,
                'address2' => $request->address2,
                'city' => $request->city,
                'state' => $request->state,
                'zip' => $request->zip,
                'amount' => $amount,
            ]);
            //guardar detalles del producto
            OrderDetail::create([
                'order_id' => $order->id,
                'color_id' => $request->color['id'],
                'promotion_id' => $request->product['id'],
            ]);
        } catch (\Exception $e) {
            Log::error('ERROR AL GUARDAR LA COMPRA===>' . $e->getMessage());
        }
        // dd($order);
        return response()->json($order);
    }

    public function PayPalCreateOrder(Request $request, PayPalService $paypal)
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

    public function PayPalOrderCapture(string $paypalOrderId, PayPalService $paypal)
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
