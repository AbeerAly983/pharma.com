<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;
    protected $fillable =
    [
        'qrCode',
        'name',
        'price',
        'currency',
        'photo',
        'photo_1',
        'photo_2',
        'photo_3',
        'photo_4',
        'quantity',
        'description',
        'type_id',
        'ingredients',
        'howToUSe',
        'purpose',
        'for_whom',
        'app_area',
        'characteristics',
        'company_name',
        'brandCountry',
        'reorder_point',
        'production_date',
        'expiry_date'
    ];

    public function discount(){
        return $this->hasOne(discount::class);
    }

    public function type(){
        return $this->belongsTo(Type::class);
    }

    public function order(){
        return $this->hasMany(Order::class);
    }

}
