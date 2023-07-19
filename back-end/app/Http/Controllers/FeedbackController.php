<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Api\ApiValidation;
use App\Models\Feedbacks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class FeedbackController extends Controller
{

    use ApiValidation;
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function store(Request $request){
        $validator = $this->CheckFeedbackValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }

        $feedback=Feedbacks::create(
            [
                'user_id' => Auth::User()->id,
                'contents' => $request->contents,
            ]
        );
        if($feedback){
            return response()->json(['message' => 'Add successfully']);
        }
        return response()->json(['message' => 'Failed to Add']);
    }
    public function show(){
        $feedback=Feedbacks::all();
        return response($feedback);
    }

}
