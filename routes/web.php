<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Productos\ProductController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/crear-enlace', function () {
    try {
        Artisan::call('storage:link');
        return "Enlace creado con éxito.";
    } catch (\Exception $e) {
        return "Error al crear el enlace: " . $e->getMessage();
    }
});

Route::get('/test-mail', function () {
    Mail::raw('Correo de prueba', function ($message) {
        $message->to('lunadevbusiness@gmail.com')
            ->subject('Test Laravel');
    });

    return 'Correo enviado';
});

Route::get('/', function () {
    $productos = Product::with('images')->get();
    return Inertia::render('Welcome', ['productos' => $productos]);
});

Route::get('/politica_privacidad', function () {
    return Inertia::render('politicas/Privacidad', []);
});
Route::get('/ventas_reembolsos', function () {
    return Inertia::render('politicas/VentasRembolsos', []);
});
Route::get('/aviso_legal', function () {
    return Inertia::render('politicas/AvisoLegal', []);
});

Route::get('/rastrear_pedido', function () {
    return Inertia::render('RastrearPedido');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');



Route::controller(ProductController::class)->name('products.')->group(function () {

    Route::get('/cepillo_ducha', 'showCepilloDucha')->name('showCepilloDucha');
    Route::get('/beeswax_food_wrap', 'show_beeswax_food_wrap')->name('show_beeswax_food_wrap');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/rutas_usuario_guest.php';
require __DIR__ . '/rutas_usuario_host.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/buy.php';
require __DIR__ . '/admin.php';
