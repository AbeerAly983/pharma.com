<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCases extends Model
{
    use HasFactory;

    protected $fillable = ['ProductName', 'composition', 'pregnancy', 'lactation', 'more_trade_names'];

    public function productIndication(){
        return $this->hasMany(ProductIndication::class);
    }
}
