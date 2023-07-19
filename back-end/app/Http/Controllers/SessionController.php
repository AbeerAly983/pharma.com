<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\comment;
use App\Models\session;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\SessionValidation;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{

    use SessionValidation;
    public function store(Request $request)
    {
        $validator = $this->CheckSessionValidation($request->all());


        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $url_before_edit=$request->url;
        if (preg_match('/youtu\.be\/([^\&\?\/]+)/', $url_before_edit, $videoId)) {
            $values = $videoId[1];
            $url='https://www.youtube.com/embed/'.''.$values ;
        }
        else if (preg_match('/youtube\.com\/embed\/([^\&\?\/]+)/', $url_before_edit, $videoId)) {
            $url=$url_before_edit;}
        else{
            parse_str( parse_url( $url_before_edit, PHP_URL_QUERY ), $youtube_id_v );
            $url='https://www.youtube.com/embed/'.''.$youtube_id_v['v'] ;}
        $add_url = ['url'=>$url];
        $session=session::create(array_merge($request->all(), $add_url));
        if($session){
            return response()->json(['message' => 'Add successfully']);
        }
        return response()->json(['message' => 'Failed to Add']);
    }
    public function index(){
        $session=session::get()->where('disable',0);
        $session->makeHidden(['disable']);
        return response($session);
    }
    public function alldata(){
        $session=session::get();
        return response($session);
    }
    public function show($id){
        $session=session::where('disable',0)->where('id',$id)->first();
        $session->makeHidden(['disable']);
        return response($session);
    }
    public function edit($id){
        $session=session::where('id',$id)->first();
        return response($session);
    }
    public function update(Request $request,$id)
    {
        $validator = $this->CheckUpdateSessionValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $url_before_edit=$request->url;
        if (preg_match('/youtu\.be\/([^\&\?\/]+)/', $url_before_edit, $videoId)) {
            $values = $videoId[1];
            $url='https://www.youtube.com/embed/'.''.$values ;
        }
        else if (preg_match('/youtube\.com\/embed\/([^\&\?\/]+)/', $url_before_edit, $videoId)) {
            $url=$url_before_edit;}
        else{
            parse_str( parse_url( $url_before_edit, PHP_URL_QUERY ), $youtube_id_v );
            $url='https://www.youtube.com/embed/'.''.$youtube_id_v['v'] ;}
        $add_url = ['url'=>$url];

        $session=session::find($id);
        $session->update(array_merge($request->all(), $add_url));
        if($session){
            return response()->json(['message' => 'Updated Successfully']);
        }
        return response()->json(['message' => 'Failed to Update']);
    }
    public function disable($id)
    {
        $session = session::where('id', $id)->first();
        $session->disable = true;
        $session->save();
        return response(['sucess'=>true]);
    }
    public function able($id)
    {
        $session = session::where('id', $id)->first();
        $session->disable = false;
        $session->save();
        return response(['sucess'=>true]);
    }

    public function show_disable(){
        $sessions = session::get()->where('disable', 1);
        $sessions->makeHidden(['disable']);
        return response()->json($sessions);
    }
    public function AddComment(Request $request,$id){
        $UserId = Auth::user()->id;
        $validator = $this->CheckCommentValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        comment::create([
            'user_id' => $UserId,
            'session_id' => $id,
            'contant'=>$request->contant
        ]);
        return response()->json(['message' => 'Comment add successfully']);
    }
    public function ShowComment($id){
        $comments=comment::where('session_id', 'like', '%' . $id . '%')->get();
        $allComment=array();
        foreach ($comments as $comment){
            $user=User::where('id', 'like', '%' . $comment->user_id . '%')->first();
            $name= $user->first_name.' '.$user->last_name;
            $data=['name'=>$name,'photo'=>$user->photo,'comment'=>$comment->contant];
            array_push($allComment,$data);
        }
        return response($allComment);
    }
}
