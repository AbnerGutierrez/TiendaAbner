<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\host_order;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $totalOrders = Order::count();
        $totalSales = Order::sum('amount');
        return $user->id_type === 2
            ? Inertia::render('DashboardAdmin', ['totalOrders' => $totalOrders, 'totalSales' => $totalSales])
            : Inertia::render('Dashboard');
    }
}
