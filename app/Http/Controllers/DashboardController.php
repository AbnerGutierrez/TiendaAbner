<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $orders = Order::select(
            'id',
            'amount',
            'status',
            'created_at'
        )
            ->latest()
            ->paginate(10);
        return $user->id_type === 2
            ? Inertia::render('DashboardAdmin', ["orders" => $orders])
            : Inertia::render('Dashboard');
    }
}
