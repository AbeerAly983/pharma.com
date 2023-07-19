<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class doseOfProduct extends Model
{
    use HasFactory;
    protected $fillable =
    [
        'indication_id',
        'min_age',
        'max_age',
        'min_weight',
        'max_weight',
        'dose',
    ];

    public function indication(){
        return $this->belongsTo(ProductIndication::class);
    }


}
