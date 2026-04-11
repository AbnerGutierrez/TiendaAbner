<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $connection = "mysql";
    protected $table = "table_promotions";
    protected $primaryKey = "id";

    protected $fillable = [
        'id_product',
        'promotion',
        'description',
        'value',
        'quantity',
        'price',
        'created_at',
        'updated_at',
    ];
}
