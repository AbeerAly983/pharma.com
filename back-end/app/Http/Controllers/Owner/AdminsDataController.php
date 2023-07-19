<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class AdminsDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $admins=Admin::count();
        $admin_today=Admin::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $admin_month=Admin::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $admin_year=Admin::whereYear('created_at',$year)->count();
        $data=['total_admins'=>$admins,'admin_today'=>$admin_today,'admin_month'=>$admin_month,'admin_year'=>$admin_year];
        return response($data);

    }
    public function admins(){
        $admins=Admin::get();
        return response($admins);
    }
    public function admin_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $admin_today=Admin::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($admin_today);
    }
    public function admin_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $admin_month=Admin::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($admin_month);
    }
    public function admin_year(){
        $year=Carbon::now()->format('Y');
        $admin_year=Admin::whereYear('created_at',$year)->get();
        return response($admin_year);
    }
}
