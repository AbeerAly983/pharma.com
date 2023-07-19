<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class discount extends Model
{
    use HasFactory;
    protected $fillable = ['product_id' , 'presentage_Discount' , 'discount_price'];

    public function product(){
        return $this->belongsTo(Product::class , 'product_id');
    }
}
