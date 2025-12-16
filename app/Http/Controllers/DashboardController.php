<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return $user->id_type === 2
            ? Inertia::render('DashboardAdmin')
            : Inertia::render('Dashboard');
    }
}
