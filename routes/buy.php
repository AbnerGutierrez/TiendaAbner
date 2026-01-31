<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Buy\ProductController;
use App\Http\Controllers\Buy\CartController;
use App\Http\Controllers\Buy\CheckoutController;
use App\Http\Controllers\Buy\OrderController;
use App\Http\Controllers\Productos\PayPalController;

Route::prefix('buy')->name('buy.')->group(function () {
    // Productos
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');

    // Carrito
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
    Route::post('/cart/update', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/cart/remove/{productId}', [CartController::class, 'remove'])->name('cart.remove');

    // Checkout
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::post('/checkout/process', [CheckoutController::class, 'process'])->name('checkout.process');

    // Orders (requerir auth)
    Route::middleware('auth')->group(function () {
        Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
        Route::get('/orders/{id}', [OrderController::class, 'show'])->name('orders.show');
    });


});
