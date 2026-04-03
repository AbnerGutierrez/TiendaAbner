<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Productos\ProductController;

Route::controller(ProductController::class)->prefix('buy')->name('buy.')->group(function () {

    Route::get('checkOut', 'checkOut')->name('checkOut');

    Route::post('CreateOrder', 'CreateOrder')->name('CreateOrder');

    Route::post('PayPalCreateOrder', 'PayPalCreateOrder')->name('PayPalCreateOrder');
    Route::post('PayPalOrderCapture/{paypalOrderId}', 'PayPalOrderCapture')->name('PayPalOrderCapture');
});
