<?php

namespace App\Http\Controllers\Buy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

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

    // Mostrar detalle de producto

    public function add()
    {
        return Inertia::render('Admin/AddProducto');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'stock' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }
        $validated['user_id'] = auth()->user()->id;
        $validated['fecha'] = now();
        Product::create($validated);
        return redirect()->back()->with('success', 'Producto agregado correctamente');
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
        $product = Product::findOrFail($id);
        $product->delete();
        return redirect()
            ->route('admin.products.myProducts')
            ->with('success', 'Producto eliminado correctamente');
    }
    public function show($id)
    {
        $product = Product::findOrFail($id);
        $product->image_url = Storage::url($product->image);
        return Inertia::render('Buy/LandingProduct', [
            'product' => $product
        ]);
    }


    public function myProducts()
    {
        $productos = Product::all();
        return Inertia::render('Admin/MyProducts', [
            'productos' => $productos,
        ]);
    }
}
