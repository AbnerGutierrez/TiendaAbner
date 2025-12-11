<?php

namespace App\Http\Controllers\Buy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    // Página de checkout
    public function index()
    {
        $cart = session('cart', []);
        // calcular totales, impuestos, envíos
        return Inertia::render('Buy/Checkout', [
            'cart' => $cart,
            // 'totals' => ...
        ]);
    }

    // Procesar pago (stub)
    public function process(Request $request)
    {
        $request->validate([
            'payment_method' => 'required|string',
            // otros campos: address, shipping_method etc.
        ]);

        // Aquí llamas a tu gateway (Stripe, PayPal, MercadoPago)
        // Crear orden, vaciar carrito, enviar email, etc.

        // ejemplo simple:
        // session()->forget('cart');

        return redirect()->route('buy.orders.index')->with('success', 'Compra realizada');
    }
}
