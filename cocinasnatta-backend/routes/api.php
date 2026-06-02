<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProveedorController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\ClienteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('custom_auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::apiResource('contacts', ContactController::class);
});

Route::get('proveedores', [ProveedorController::class, 'index']);
Route::delete('proveedores/{id}', [ProveedorController::class, 'destroy']);
Route::put('proveedores/{id}', [ProveedorController::class, 'update']);
Route::post('proveedores', [ProveedorController::class, 'store']);
Route::get('proveedores/{id}', [ProveedorController::class, 'show']);

Route::apiResource('eventos', EventoController::class);
Route::apiResource('clientes', ClienteController::class);