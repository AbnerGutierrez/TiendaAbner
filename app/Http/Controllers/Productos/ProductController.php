<?php

namespace App\Http\Controllers\Productos;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{

    public function showlist()
    {
        $products = Product::select(
            'products.id',
            'products.uuid',
            'products.title',
            'products.price',
            'products.stock',
            DB::raw('MIN(product_images.image) as image')
        )
            ->leftJoin(
                'product_images',
                'products.id',
                '=',
                'product_images.id_product'
            )
            ->groupBy(
                'products.id',
                'products.uuid',
                'products.title',
                'products.price',
                'products.stock'
            )
            ->orderBy('products.created_at', 'desc')
            ->get()
            ->map(function ($product) {
                return [
                    'id' => $product->id,
                    'uuid' => $product->uuid,
                    'title' => $product->title,
                    'price' => $product->price,
                    'stock' => $product->stock,
                    'image' => $product->image
                        ? asset('storage/' . $product->image)
                        : null,
                ];
            });

        return Inertia::render('Guest/ListProducts', [
            'products' => $products,
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
}
