<?php

namespace App\Http\Controllers\Buy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    // Ver carrito (Inertia page)
    public function index(Request $request)
    {
        // ejemplo: leer carrito desde session o tabla Cart
        $cart = session('cart', []);
        return Inertia::render('Buy/Cart', ['cart' => $cart]);
    }

    // Agregar al carrito (AJAX/form submit)
    public function add(Request $request)
    {
        $data = $request->validate([
            'product_id' => 'required|integer',
            'qty' => 'nullable|integer|min:1'
        ]);

        $cart = session('cart', []);
        // lógica simple: push o actualizar
        $cart[$data['product_id']] = [
            'qty' => $data['qty'] ?? 1
        ];
        session(['cart' => $cart]);

        return redirect()->back()->with('success', 'Producto agregado al carrito');
    }

    public function remove(Request $request, $productId)
    {
        $cart = session('cart', []);
        unset($cart[$productId]);
        session(['cart' => $cart]);
        return redirect()->route('buy.cart.index')->with('success', 'Producto removido');
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'product_id' => 'required|integer',
            'qty' => 'required|integer|min:1'
        ]);

        $cart = session('cart', []);
        if(isset($cart[$data['product_id']])){
            $cart[$data['product_id']]['qty'] = $data['qty'];
            session(['cart' => $cart]);
        }
        return redirect()->route('buy.cart.index');
    }
}
