<?php

namespace App\Http\Controllers\Productos;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MainProductController extends Controller
{
    public function index()
    {
        $product = Product::where('id', 8)->firstOrFail();

        $images = DB::table('product_images')
            ->where('id_product', $product->id)
            ->pluck('image')
            ->map(fn($img) => Storage::url($img));

        return Inertia::render('Guest/MainProduct', [
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

    public function checkout(Request $request)
    {
        abort_if(!$request->product_id, 404);

        $product = Product::findOrFail($request->product_id);

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
}
