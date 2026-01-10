<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductAdminController;


Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/products/products', [ProductAdminController::class, "index"])->name('products.products');
    Route::get('/products/show/{id}', [ProductAdminController::class, "show"])->name('products.show');
    // Products like admin
    Route::middleware(['auth'])->controller(ProductAdminController::class)->group(function () {
        Route::get('/products/add', 'add')->name('products.add');
        Route::get('/products/addFaster', 'addFaster')->name('products.addFaster');
        Route::get('/products/myProducts', 'myProducts')->name('products.myProducts');
        Route::get('/products/edit/{id}', 'edit')->name('products.edit');

        Route::delete('/products/delete/{id}', 'delete')->name('products.delete');

        Route::post('/products/store', 'store')->name('products.store');
        Route::post('/products/storeFaster', 'storeFaster')->name('products.storeFaster');
        Route::post('/products/update/{product}', 'update')->name('products.update'); //Update

    });
});
