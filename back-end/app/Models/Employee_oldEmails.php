<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Employee_oldEmails extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = ['admin_id', 'orderCoordinator_id', 'accountant_id', 'email', 'email_verified_at'];
}
