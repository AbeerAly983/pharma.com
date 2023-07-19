<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderLeft extends Model
{
    use HasFactory;
    Protected $fillable = [
        'order_cordinator_id',
        'order_id',
        'left'
    ];

    public function order(){
        return $this->belongsTo(Order::class);
    }

    public function orderCordinator(){
        return $this->belongsTo(orderCordinator::class);
    }
}
