<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Doctors;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class DoctorsDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $doctors=Doctors::count();
        $doctor_today=Doctors::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $doctor_month=Doctors::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $doctor_year=Doctors::whereYear('created_at',$year)->count();
        $data=['total_doctors'=>$doctors,'doctor_today'=>$doctor_today,'doctor_month'=>$doctor_month,'doctor_year'=>$doctor_year];
        return response($data);

    }
    public function Doctors(){
        $doctors=Doctors::get();
        return response($doctors);
    }
    public function doctor_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $doctor_today=Doctors::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($doctor_today);
    }
    public function doctor_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $doctor_month=Doctors::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($doctor_month);
    }
    public function doctor_year(){
        $year=Carbon::now()->format('Y');
        $doctor_year=Doctors::whereYear('created_at',$year)->get();
        return response($doctor_year);
    }
}
