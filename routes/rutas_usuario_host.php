<?php

use App\Http\Controllers\Host\HostController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {


    Route::controller(HostController::class)->prefix('host')->name('host.')->group(function () {


        Route::get('mainProduct', 'mainProduct')->name('mainProduct');
        Route::get('mainProduct/checkout', 'mainProductCheckout')->name('mainProduct.checkout');

        Route::post('mainProduct/createOrder', 'mainProductCreateOrder')->name('mainProduct.createOrder');

        Route::post('paypal/createOorder', 'mainProductPayPalCreateOrder')->name('mainProduct.createOrder.payPal');
        Route::post('paypal/order/{paypalOrderId}/capture', 'mainProductPayPalOrderCapture')->name('mainProduct.captureOrder.payPal');

    });
});
