<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ContactController extends Controller
{
    public function show() {
        $contact = Contact::all();
        return response()->json($contact);
    }

    public function insert(Request $request ) {
        $validator = Validator::make($request->all() , [
            'name' => 'required',
            'email' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ]);

        if($validator->fails()) {
            return response([
                'data' => $validator->errors(),
                'status' => 'error',
            ] , 422);
        }
        $contact = new Contact;

        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->message = $request->message;
        $contact->save();

        return response([
            'status' => 'success'
        ] , 200);
    }


    public function destroy(Contact $contact) {
        $contact->delete();

        return response([
            'status' => 'success'
        ] , 200);
    }
};
