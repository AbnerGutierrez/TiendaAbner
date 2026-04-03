<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $connection = "mysql";
    protected $table = "table_order_details";
    protected $primaryKey = "id";

    protected $fillable = [
        'order_id',
        'color_id',
        'promotion_id',
        'created_at',
        'updated_at',
    ];

    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class , 'promotion_id');
    }
}
