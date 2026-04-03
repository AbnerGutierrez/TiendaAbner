<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $connection = "mysql";
    protected $table = "table_colors";
    protected $primaryKey = "id";

    protected $fillable = [
        'id_product',
        'color',
        'description',
        'created_at',
        'updated_at',
    ];
}
