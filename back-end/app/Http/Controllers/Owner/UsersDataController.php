<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class UsersDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $users=User::count();
        $user_today=User::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $user_month=User::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $user_year=User::whereYear('created_at',$year)->count();
        $data=['total_users'=>$users,'user_today'=>$user_today,'user_month'=>$user_month,'user_year'=>$user_year];
        return response($data);
    }
    public function users(){
        $users=User::get();
        return response($users);
    }
    public function user_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $user_today=User::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($user_today);
    }
    public function user_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $user_month=User::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($user_month);
    }
    public function user_year(){
        $year=Carbon::now()->format('Y');
        $user_year=User::whereYear('created_at',$year)->get();
        return response($user_year);
    }
    public function lastyear_users(){
        $data=array();
        $months=array();
        $alldata=array();
        for($i=0;$i<12;$i++){
            $month=Carbon::now()->subMonths($i)->format('M');
            $year=Carbon::now()->subMonths($i)->year;
            array_push($months,$month.' '.$year);
            $user_month=User::whereMonth('created_at',Carbon::parse($month)->month)->count();
            array_push($data,$user_month);

        }
        array_push($alldata,array_reverse($months));
        array_push($alldata,array_reverse($data));
        return response($alldata);
    }
}
