<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AboutController extends Controller
{
    public function show() {
        $about = About::all();
        return response()->json($about);
    }

    public function update(Request $request ) {
        $validator = Validator::make($request->all() , [
            'title' => 'required',
            'name' => 'required',
            'email' => 'required',
            'birthday' => 'required',
            'city' => 'required',
            'phone' => 'required',
            'age' => 'required',
            'degree' => 'required',
            'description' => 'required',
            'city' => 'required',
        ]);

        if($validator->fails()) {
            return response([
                'data' => $validator->errors(),
                'status' => 'error',
            ] , 422);
        }
        $about = About::find(1);

        $about->title = $request->title;
        $about->name = $request->name;
        $about->birthday = $request->birthday;
        $about->email = $request->email;
        $about->city = $request->city;
        $about->phone = $request->phone;
        $about->age = $request->age;
        $about->degree = $request->degree;
        $about->description = $request->description;
        $about->save();
        return response([
            'status' => 'success'
        ] , 200);
    }
}
