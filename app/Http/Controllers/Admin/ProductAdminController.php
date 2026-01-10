<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product_char;
use App\Models\ProductImage;
use App\Models\advantages;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductAdminController extends Controller
{
    public function add()
    {
        return Inertia::render('Admin/AddProducto');
    }
    public function addFaster()
    {
        return Inertia::render('Admin/AddProductoFaster');
    }

    public function store(Request $request)
    {
        dd("saddas");
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'stock' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'features' => 'array',
            'features.*.text' => 'required|string|max:255',
            'features.*.image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'advantages' => 'array',
            'advantages.*.text' => 'required|string|max:255',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        $validated['user_id'] = auth()->id();
        $validated['fecha'] = now();

        $product = Product::create($validated);

        foreach ($request->features ?? [] as $feature) {
            $image = isset($feature['image'])
                ? $feature['image']->store('product_features', 'public')
                : null;

            product_char::create([
                'id_product' => $product->id,
                'description' => $feature['text'],
                'image' => $image,
            ]);
        }

        foreach ($request->advantages ?? [] as $advantage) {
            $image = isset($advantage['image'])
                ? $advantage['image']->store('product_advantage', 'public')
                : null;

            advantages::create([
                'id_product' => $product->id,
                'description' => $advantage['text'],
                'image' => $image
            ]);
        }

        return back()->with('success', 'Producto agregado correctamente');
    }
    public function storeFaster(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'stock' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',

            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        DB::transaction(function () use ($request, $validated) {

            $product = Product::create([
                'title' => $validated['title'],
                'description' => $validated['description'],
                'stock' => $validated['stock'],
                'price' => $validated['price'],
                'user_id' => auth()->id(),
                'product_type' => 1,
                'fecha' => now(),
            ]);

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $path = $image->store('products', 'public');

                    ProductImage::create([
                        'id_product' => $product->id,
                        'image' => $path,
                    ]);
                }
            }
        });

        return redirect()
            ->back()
            ->with('success', 'Producto agregado correctamente');
    }


    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $product->image_url = Storage::url($product->image);
        return Inertia::render('Admin/EditProduct', [
            'product' => $product
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'stock'       => 'sometimes|required|integer|min:0',
            'price'       => 'sometimes|required|numeric|min:0',
            'image'       => 'nullable|image|mimes:png,jpg,jpeg,webp|max:2048',
        ]);

        // Si viene imagen nueva
        if ($request->hasFile('image')) {

            if ($product->img && Storage::disk('public')->exists($product->img)) {
                Storage::disk('public')->delete($product->img);
            }

            $validated['img'] = $request->file('image')->store('products', 'public');
        }

        unset($validated['image']);

        $product->update($validated);

        return redirect()
            ->route('admin.products.myProducts')
            ->with('success', 'Producto actualizado correctamente');
    }

    public function delete($id)
    {
        DB::transaction(function () use ($id) {

            $product = Product::findOrFail($id);

            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }

            $features = product_char::where('id_product', $id)->get();
            foreach ($features as $feature) {
                if ($feature->image) {
                    Storage::disk('public')->delete($feature->image);
                }
            }
            product_char::where('id_product', $id)->delete();

            $advantages = advantages::where('id_product', $id)->get();

            foreach ($advantages as $advantage) {
                if ($advantage->image) {
                    Storage::disk('public')->delete($advantage->image);
                }
            }
            advantages::where('id_product', $id)->delete();

            $product->delete();
        });

        return redirect()
            ->route('admin.products.myProducts')
            ->with('success', 'Producto eliminado correctamente');
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        $images = DB::table('product_images')
            ->where('id_product', $product->id)
            ->pluck('image')
            ->map(fn($img) => Storage::url($img));

        return Inertia::render('Buy/LandingProduct', [
            'product' => [
                'id' => $product->id,
                'title' => $product->title,
                'description' => $product->description,
                'price' => $product->price,
                'stock' => $product->stock,
                'images' => $images, // 👈 array de imágenes
            ],
        ]);
    }

    public function myProducts()
    {
        $productos = Product::all();
        return Inertia::render('Admin/MyProducts', [
            'productos' => $productos,
        ]);
    }

    public function index()
    {
        $products = Product::select(
            'products.id',
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
                'products.title',
                'products.price',
                'products.stock'
            )
            ->orderBy('products.created_at', 'desc')
            ->get()
            ->map(function ($product) {
                return [
                    'id' => $product->id,
                    'title' => $product->title,
                    'price' => $product->price,
                    'stock' => $product->stock,
                    'image' => $product->image
                        ? asset('storage/' . $product->image)
                        : null,
                ];
            });

        return Inertia::render('Admin/Products/Index', [
            'products' => $products,
        ]);
    }
}
