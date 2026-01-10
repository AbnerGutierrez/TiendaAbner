<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $table = 'product_images';
    protected $connection = "mysql";
    protected $primaryKey = "id";

    protected $fillable = [
        'id_product',
        'image',
    ];
}
