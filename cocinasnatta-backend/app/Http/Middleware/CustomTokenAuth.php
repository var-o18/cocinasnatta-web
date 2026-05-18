<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CustomTokenAuth
{
    public function handle(Request $request, Closure $next): Response
    {
        $publicPaths = [
            'api/login',
            'login',
            'api/contacts',
            'contacts',
        ];

        foreach ($publicPaths as $path) {
            if ($request->is($path) || $request->is($path . '/*')) {
                return $next($request);
            }
        }

        if (!Auth::guard('sanctum')->check()) {
            return response()->json([
                'message' => 'Error: No autorizado. Debe iniciar sesión.'
            ], 401);
        }

        $user = Auth::guard('sanctum')->user();
        Auth::setUser($user);

        return $next($request);
    }
}
