<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\session;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class LiveSessionsDataController extends Controller
{
    public function index(){

        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $sessions=session::count();
        $session_today=session::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $session_month=session::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $session_year=session::whereYear('created_at',$year)->count();
        $data=['total_sessions'=>$sessions,'session_today'=>$session_today,'session_month'=>$session_month,'session_year'=>$session_year];
        return response($data);

    }
    public function sessions(){
        $sessions=session::get();
        return response($sessions);
    }
    public function session_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $session_today=session::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($session_today);
    }
    public function session_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $session_month=session::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($session_month);
    }
    public function session_year(){
        $year=Carbon::now()->format('Y');
        $session_year=session::whereYear('created_at',$year)->get();
        return response($session_year);
    }
}
