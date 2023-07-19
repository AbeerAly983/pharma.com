<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Labs extends Model
{
    use HasFactory;
    protected $fillable = ['name','type_of_medical_analyses','photo','appointment','city','residential_area','phone','street','time'];
}
