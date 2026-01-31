<?php

use App\Http\Controllers\Guest\GuestController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::controller(GuestController::class)->prefix('guest')->name('guest.')->group(function () {

        Route::get('mainProduct', 'mainProduct')->name('mainProduct');
        Route::get('mainProduct/checkout', 'mainProductCheckout')->name('mainProduct.checkout');

        Route::post('mainProduct/createOrder', 'mainProductCreateOrder')->name('mainProduct.createOrder');

        Route::post('paypal/createOorder', 'mainProductPayPalCreateOrder')->name('mainProduct.createOrder.payPal');
        Route::post('paypal/order/{paypalOrderId}/capture', 'mainProductPayPalOrderCapture')->name('mainProduct.captureOrder.payPal');
    });
});
