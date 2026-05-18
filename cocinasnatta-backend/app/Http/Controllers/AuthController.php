<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::guard('sanctum')->check()) {
            return response()->json([
                'status' => 'already_authenticated',
                'message' => 'El usuario ya ha iniciado sesión en el sistema.'
            ], 200);
        }

        $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('name', $request->name)
            ->orWhere('email', $request->name)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Las credenciales proporcionadas son incorrectas.'
            ], 401);
        }

        $token = $user->createToken('admin-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
            'message' => 'Sesión iniciada con éxito.'
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            $user->currentAccessToken()->delete();
        }

        return response()->json([
            'message' => 'Sesión cerrada correctamente y token invalidado.'
        ]);
    }

    public function me(Request $request)
    {
        return response()->json(Auth::user());
    }
}
