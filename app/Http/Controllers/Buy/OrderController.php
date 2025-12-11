<?php

namespace App\Http\Controllers\Buy;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        // Si usas authentication:
        $orders = auth()->user()->orders()->paginate(10);
        return Inertia::render('Buy/OrdersIndex', ['orders' => $orders]);
    }

    public function show($id)
    {
        $order = Order::with('items')->findOrFail($id);
        return Inertia::render('Buy/OrderShow', ['order' => $order]);
    }
}
