<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BoxContent extends Model
{
    protected $connection = "mysql";
    protected $table = "table_box_content";
    protected $primaryKey = "id";

    protected $fillable = [
        'id_product',
        'title',
        'image',
        'created_at',
        'updated_at',
    ];
}
