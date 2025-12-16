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
        'user_id',
        'active',
        'price',
        'fecha',
        'publish_at',
        'image',
        'created_at',
        'updated_at',
    ];
}
