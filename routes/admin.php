<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductAdminController;


Route::prefix('admin')->name('admin.')->group(function () {
    // Products like admin
    Route::middleware(['auth'])->controller(ProductAdminController::class)->group(function () {
        Route::get('/products/add', 'add')->name('products.add');
        Route::get('/products/myProducts', 'myProducts')->name('products.myProducts');
        Route::get('/products/show/{id}', 'show')->name('products.show');
        Route::get('/products/edit/{id}', 'edit')->name('products.edit');

        Route::delete('/products/delete/{id}', 'delete')->name('products.delete');

        Route::post('/products/store', 'store')->name('products.store');
        Route::post('/products/update/{product}', 'update')->name('products.update');//Update
     
    });
});
