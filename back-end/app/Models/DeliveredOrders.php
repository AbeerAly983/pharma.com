<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveredOrders extends Model
{
    use HasFactory;
    protected $fillable =
    [
        'order_left_id',
        'accountant_id',
        'canceled_quantity',
        'delivered_quantity'
    ];

    public function orderLeft(){
        return $this->belongsTo(OrderLeft::class);
    }
}
