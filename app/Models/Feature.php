<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{

    protected $connection = "mysql";
    protected $table = "table_features";
    protected $primaryKey = "id";

    protected $fillable = [
        'id_product',
        'title',
        'description',
        'image',
        'created_at',
        'updated_at',
    ];
}
