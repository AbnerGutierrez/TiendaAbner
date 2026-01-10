<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $connection = "mysql";
    protected $table = "products";
    protected $primaryKey = "id";

    protected $fillable = [
        'id',
        'title',
        'description',
        'stock',
        'product_type',
        'user_id',
        'active',
        'price',
        'fecha',
        'publish_at',
        'image',
        'created_at',
        'updated_at',
    ];

    public function features()
    {
        return $this->hasMany(product_char::class, 'id_product');
    }

    public function advantages()
    {
        return $this->hasMany(advantages::class, 'id_product');
    }
}
