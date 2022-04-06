<?php

namespace App\Http\Middleware;

use App\Models\Token;
use Closure;
use Illuminate\Http\Request;

class AdminAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        logs()->info($request->header("Authorization"));
        $token = Token::where("destroy", ">", date('Y-m-d H:i:s'))
                ->where("token", $request->header("Authorization"))
                ->first();
        if ($token) {
            return $next($request);
        }
        return response("ログインしてください", 422);
    }
}
