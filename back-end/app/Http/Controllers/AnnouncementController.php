<?php

namespace App\Http\Controllers;

use App\Models\announcement;
use Illuminate\Http\Request;
use App\Http\Requests\announcementRequest;
use App\Traites\UploadImageTrait;

class AnnouncementController extends Controller
{
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $announcements = announcement::latest()->get()->take(4);
        return response($announcements);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(announcementRequest $request)
    {
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Announcements',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        announcement::create($all);
        return response(['message'=>true]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function show(announcement $announcement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $announcement = announcement::where('id', $id)->first();
        return response($announcement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function update(announcementRequest  $request, $id)
    {
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Announcements',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        announcement::where('id', $id)->update($all);
        return response(['message'=>true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        announcement::where('id', $id)->delete();
        return response(['message'=>'deleted']);
    }
}
