<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function successResponse($data, $message = null, $code = JsonResponse::HTTP_OK)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
            'code' => $code
        ], $code);
    }

    protected function errorResponse($message = null, $code = JsonResponse::HTTP_BAD_REQUEST)
    {
        return response()->json([
            'message' => $message,
            'code' => $code
        ], $code);
    }

}
