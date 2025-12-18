<?php

namespace App\Http\Controllers\Buy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;


class ProductController extends Controller
{
    // Mostrar lista (opcional)
    public function index()
    {
        $products = Product::select('id', 'name', 'price', 'slug', 'image')->paginate(12);
        return Inertia::render('Buy/ProductIndex', [
            'products' => $products
        ]);
    }
}
