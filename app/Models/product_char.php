<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product_char extends Model
{
    protected $connection = "mysql";
    protected $table = "product_char";
    protected $primaryKey = "id";

    protected $fillable = [
        'id',
        'id_product',
        'description',
        'image',
        'created_at',
        'updated_at'
    ];
}
