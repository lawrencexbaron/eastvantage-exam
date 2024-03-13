<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserService
{
    public function createUser(Request $request){
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'middleName' => 'sometimes|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'role' => 'required|string|in:author,editor,subscriber,administrator',
        ]);
        
        if($validator->fails()){
            return [
                'error' => $validator->errors(),
                'status' => false
            ];
        }

        $user = User::create([
            'first_name' => $request->firstName,
            'middle_name' => $request->middleName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'role' => $request->role,
        ]);

        return $user;
    }

    public function fetchUsers(){
        $users = User::all();
        return $users;
    }
}