<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order_tracking extends Model
{
    protected $connection = "mysql";
    protected $table = "order_tracking";
    protected $primaryKey = "id";

    protected $fillable = [
        'order_id',
        'number_r',
        'company',
    ];
}
