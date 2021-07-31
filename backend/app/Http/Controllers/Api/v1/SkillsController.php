<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Skills;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SkillsController extends Controller
{
    public function show() {
        $contact = Skills::all();
        return response()->json($contact);
    }

    public function insert(Request $request ) {
        $validator = Validator::make($request->all() , [
            'name' => 'required',
            'progress' => 'required'
        ]);

        if($validator->fails()) {
            return response([
                'data' => $validator->errors(),
                'status' => 'error',
            ] , 422);
        }

        $portfolio = new Skills;

        $portfolio->name = $request->name;
        $portfolio->progress = $request->progress;

        $portfolio->save();

        return response([
            'status' => 'success'
        ] , 200);
    }

    public function edit(Request $request , Skills $skills) {

        $validator = Validator::make($request->all() , [
            'name' => 'required',
            'progress' => 'required',
        ]);

        if($validator->fails()) {
            return response([
                'data' => $validator->errors(),
                'status' => 'error',
            ] , 422);
        }

        $skills->name = $request->name;
        $skills->progress = $request->progress;
        $skills->save();

        return response([
            'status' => 'success'
        ] , 200);
    }


    public function destroy(Skills $skills) {
        $skills->delete();

        return response([
            'status' => 'success'
        ] , 200);
    }
}
