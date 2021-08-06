<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Carbon\Carbon;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;

class PortfolioController extends Controller
{
    public function show() {
        $contact = Portfolio::all();
        return response()->json($contact);
    }

    public function insert(Request $request , Filesystem $filesystem ) {
        $validator = Validator::make($request->all() , [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
            'github' => 'required',
            'link' => 'required',
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

        $portfolio = new Portfolio;

        $portfolio->name = $request->name;
        $portfolio->description = $request->description;
        $portfolio->image = $imageUrl;
        $portfolio->github = $request->github;
        $portfolio->link = $request->link;
        $portfolio->save();

        return response([
            'status' => 'success'
        ] , 200);
    }

    public function edit(Request $request , Portfolio $portfolio) {

        $validator = Validator::make($request->all() , [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
            'github' => 'required',
            'link' => 'required',
        ]);

        if($validator->fails()) {
            return response([
                'data' => $validator->errors(),
                'status' => 'error',
            ] , 422);
        }

        $portfolio->name = $request->name;
        $portfolio->description = $request->description;
        $portfolio->image = $request->image;
        $portfolio->github = $request->github;
        $portfolio->link = $request->link;
        $portfolio->save();

        return response([
            'status' => 'success'
        ] , 200);
    }


    public function destroy(Portfolio $portfolio) {
        $portfolio->delete();

        return response([
            'status' => 'success'
        ] , 200);
    }
}
