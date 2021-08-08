<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\About;
use Carbon\Carbon;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AboutController extends Controller
{
    public function show() {
        $about = About::all();
        return response()->json($about);
    }

    public function update(Request $request , Filesystem $filesystem) {
        $validator = Validator::make($request->all() , [
            'title' => 'required',
            'name' => 'required',
            'email' => 'required',
            'city' => 'required',
            'phone' => 'required',
            'age' => 'required',
            'degree' => 'required',
            'description' => 'required',
            'city' => 'required',
            'image' => 'required',
        ]);

        if($validator->fails()) {
            return response([
                'data' => $validator->errors(),
                'status' => 'error',
            ] , 422);
        }


        $file = $request->file('image');
        //return response($file);
        $year = Carbon::now()->year;
        $month = Carbon::now()->month;
        $day = Carbon::now()->day;

        $imagePath = "/upload/images/{$year}/{$month}/{$day}";
        $fileName = $file->getClientOriginalName();

        if($filesystem->exists(public_path("{$imagePath}/{$fileName}"))) {
            $filename = Carbon::now()->timestamp . "-{$fileName}";
        }

        $file->move(public_path($imagePath) , $fileName);

        $imageUrl = URL("{$imagePath}/{$fileName}");


        $about = About::find(1);

        $about->title = $request->title;
        $about->name = $request->name;
        $about->email = $request->email;
        $about->city = $request->city;
        $about->phone = $request->phone;
        $about->age = $request->age;
        $about->degree = $request->degree;
        $about->birthday = $request->birthday;
        $about->description = $request->description;
        $about->image = $imageUrl;
        $about->save();
        return response([
            'status' => 'success'
        ] , 200);
    }
}
