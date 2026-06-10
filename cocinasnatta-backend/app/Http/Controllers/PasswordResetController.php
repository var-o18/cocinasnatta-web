<?php

namespace App\Http\Controllers;

use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class PasswordResetController extends Controller
{
    private const TOKEN_EXPIRY_MINUTES = 60;

    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $email = strtolower(trim($request->email));
        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.',
            ]);
        }

        $plainToken = Str::random(64);

        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $email],
            [
                'token' => Hash::make($plainToken),
                'created_at' => now(),
            ]
        );

        $frontendUrl = rtrim(env('FRONTEND_URL', 'http://localhost:3000'), '/');
        $resetUrl = $frontendUrl . '/restablecer-contrasena?' . http_build_query([
            'token' => $plainToken,
            'email' => $email,
        ]);

        Mail::to($user->email)->send(new ResetPasswordMail($resetUrl, $user->name ?? 'Administrador'));

        return response()->json([
            'message' => 'Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.',
        ]);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $email = strtolower(trim($request->email));
        $record = DB::table('password_reset_tokens')->where('email', $email)->first();

        if (!$record || !Hash::check($request->token, $record->token)) {
            return response()->json([
                'message' => 'El enlace de recuperación no es válido o ha expirado.',
            ], 422);
        }

        if (!$record->created_at || now()->diffInMinutes($record->created_at) > self::TOKEN_EXPIRY_MINUTES) {
            DB::table('password_reset_tokens')->where('email', $email)->delete();

            return response()->json([
                'message' => 'El enlace de recuperación ha expirado. Solicita uno nuevo.',
            ], 422);
        }

        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'No se encontró el usuario asociado a este correo.',
            ], 422);
        }

        $user->password = $request->password;
        $user->save();

        DB::table('password_reset_tokens')->where('email', $email)->delete();
        $user->tokens()->delete();

        return response()->json([
            'message' => 'Contraseña actualizada correctamente. Ya puedes iniciar sesión.',
        ]);
    }
}
