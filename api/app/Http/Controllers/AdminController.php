<?php

namespace App\Http\Controllers;

use App\Models\Token;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Carbon\Carbon;

class AdminController extends Controller
{
    public function login(Request $request) {
        if ($request->user_name == config("app.user_name") && $request->password == config("app.password")) {
            $random_str = Str::random(50);
            Token::where("destroy", "<=", date('Y-m-d H:i:s'))->delete();
            $date = Carbon::now();
            $date->addHour(3);
            
            $token = new Token();
            $token->fill([
                "token" => $random_str,
                "destroy" => $date
            ]);
            $token->save();
            return response(["token" => $random_str]);
        }
        return response("ログインに失敗しました", 422);
    }
}
