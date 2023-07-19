<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductIndication extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'indication'];

    public function product(){
        return $this->belongsTo(ProductCases::class);
    }
    public function doseOfProduct(){
        return $this->hasMany(doseOfProduct::class);
    }
}
