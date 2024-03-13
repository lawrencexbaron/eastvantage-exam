<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Services\UserService;

class UserController extends Controller
{
    private $userService;
    
    public function __construct(UserService $userService){
        $this->userService = $userService;
    }
    
    public function createUser(Request $request){
        $user = $this->userService->createUser($request);

        if($user['status'] === false){
            return $this->errorResponse($user['error'], 400);
        }

        return $this->successResponse($user);

    }

    public function fetchUsers(){
        $users = $this->userService->fetchUsers();

        return $this->successResponse($users);
    }
}
