<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function index()
    {
        $eventos = Cliente::all();
        return response()->json($eventos);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'correo' => 'required|email|max:255',
            'telefono' => 'required|string|max:255',
            'direccion' => 'nullable|string|max:255',
        ]);

        $cliente = Cliente::create($validated);

        return response()->json($cliente, 201);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $cliente = Cliente::find($id);
        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'correo' => 'required|email|max:255',
            'telefono' => 'required|string|max:255',
            'direccion' => 'nullable|string|max:255',
        ]);

        $cliente->update($validated);

        return response()->json($cliente);
    }

    public function destroy($id)
    {
        $cliente = Cliente::find($id);
        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado']);
        }
        $cliente->delete();
        return response()->json(['message' => 'Cliente eliminado exitosamente']);
    }
}
