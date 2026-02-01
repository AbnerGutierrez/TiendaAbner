<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('host_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();

            // Cliente
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->integer('idUser');

            // Dirección
            $table->string('address');
            $table->string('address2');
            $table->string('city');
            $table->string('state');
            $table->string('zip');

            // Pago
            $table->decimal('amount', 10, 2);
            $table->string('payment_method')->default('paypal');
            $table->string('payment_id')->nullable();
            $table->string('paypal_order_id')->nullable()->unique();
            $table->enum('status', ['pending', 'paid', 'cancelled'])->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('host_orders');
    }
};
