<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class host_order extends Model
{
    protected $fillable = [
        'product_id',
        'name',
        'email',
        'phone',
        'idUser',
        'address',
        'address2',
        'city',
        'state',
        'zip',
        'amount',
        'payment_method',
        'payment_id',
        'status',
        'paypal_order_id',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
