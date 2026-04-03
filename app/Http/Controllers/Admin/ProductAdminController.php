<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product_char;
use App\Models\ProductImage;
use App\Models\advantages;
use App\Models\BoxContent;
use App\Models\Color;
use App\Models\Feature;
use App\Models\Order;
use App\Models\Product;
use App\Models\Promotion;
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
        // dd($request);
        try {
            DB::transaction(function () use ($request) {
                $validated = $request->validate([
                    'title' => 'required|string|max:255',
                    'description' => 'required|string',
                    'price' => 'required|numeric',
                    'stock' => 'required|integer',

                    'colors' => 'array',
                    'colors.*.name' => 'required|string|max:100',
                    'colors.*.value' => 'required|string',

                    'promotions' => 'array',
                    'promotions.*.type' => 'required|string',
                    'promotions.*.value' => 'nullable|numeric',
                    'promotions.*.description' => 'nullable|string',

                    'features' => 'array',
                    'features.*.title' => 'required|string',
                    'features.*.description' => 'required|string',
                    'features.*.image' => 'required|image',

                    'contents' => 'array',
                    'contents.*.text' => 'required|string',
                    'contents.*.image' => 'nullable|image',

                    'images' => 'array',
                    'images.*' => 'image'
                ]);
                //Guardar producto principal
                $product = Product::create([
                    'title' => $validated['title'],
                    'description' => $validated['description'],
                    'stock' => $validated['stock'],
                    'price' => $validated['price'],
                    'user_id' => auth()->id(),
                    'product_type' => 1,
                    'fecha' => now(),
                ]);
                //Guardar colores
                foreach ($request->colors ?? [] as $color) {
                    Color::create([
                        'id_product' => $product->id,
                        'description' => $color['name'],
                        'color' => $color['value']
                    ]);
                }
                //Guardar promociones
                foreach ($request->promotions ?? [] as $promo) {
                    Promotion::create([
                        'id_product' => $product->id,
                        'promotion' => $promo['type'],
                        'value' => $promo['value'] ?? null,
                        'description' => $promo['description'] ?? null
                    ]);
                }
                //Guardar caracteristicas con imagenes.
                foreach ($request->features ?? [] as $feature) {

                    $path = $feature['image']->store('products/features', 'public');

                    Feature::create([
                        'id_product' => $product->id,
                        'title' => $feature['title'],
                        'description' => $feature['description'],
                        'image' => $path
                    ]);
                }
                //Guardar contenido de la caja
                foreach ($request->contents as $content) {

                    $path = null;

                    if (isset($content['image'])) {
                        $path = $content['image']->store('products/contents', 'public');
                    }

                    BoxContent::create([
                        'id_product' => $product->id,
                        'title' => $content['text'],
                        'image' => $path
                    ]);
                }
                //Guardar imagenes principales
                foreach ($request->images as $image) {

                    $path = $image->store('products/images', 'public');

                    ProductImage::create([
                        'id_product' => $product->id,
                        'image' => $path
                    ]);
                }
            });
        } catch (\Exception $e) {
            Log::error('Error al guardar el producto' . $e->getMessage());
            return back()->with('error', 'Error al crear el producto');
        }

        return back()->with('success', 'Producto creado');
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
        // dd($products);
        return Inertia::render('Admin/Products/Index', [
            'products' => $products,
        ]);
    }

    public function orders()
    {
        $orders = Order::with(['details.color', 'details.promotion'])->latest()->paginate(10);
        $totalOrders = Order::count();
        $totalSales = Order::where('status', '=', 'paid')->sum('amount');
        return Inertia::render('Admin/Products/Orders', ['orders' => $orders, 'totalOrders' => $totalOrders, 'totalSales' => $totalSales]);
    }
    public function data(Order $order)
    {
        $order->load(['details.color', 'details.promotion', 'product']);
        return response()->json($order);
    }

    public function atender($id, Request $request)
    {
        try {
            Order::where('id', '=', $id)->update(['status_shop' => $request->status]);
            return response()->json([
                'message' => 'orden actualizada correctamente',
                'order_id' => $id
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error al actualizar el estao de la compra' . $e->getMessage());
            return response()->json([
                'message' => 'Ocurrio un error al actualizar la orden',
                'order_id' => $id
            ], 400);
        }
    }
    public function cancelar($id, Request $request)
    {
        try {
            Order::where('id', '=', $id)->update(
                [
                    'status_shop' => $request->status,
                    'status' => $request->status
                ]
            );
            return response()->json([
                'message' => 'orden cancelada correctamente',
                'order_id' => $id
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error al actualizar el estao de la compra' . $e->getMessage());
            return response()->json([
                'message' => 'Ocurrio un error al cancelar la orden',
                'order_id' => $id
            ], 400);
        }
    }
}
