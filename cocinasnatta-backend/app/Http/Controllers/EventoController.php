<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Evento;
use App\Models\User;

class EventoController extends Controller
{
    public function index()
    {
        $eventos = Evento::with('user', 'proveedores')->get();
        return response()->json($eventos);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'start' => 'required|date',
            'end'   => 'nullable|date',
            'color' => 'nullable|string',
            'proveedor_ids' => 'nullable|array',
            'proveedor_ids.*' => 'exists:proveedores,id'
        ]);

        $userId = auth()->id();
        if (!$userId) {
            $fallbackUser = User::first();
            $userId = $fallbackUser ? $fallbackUser->id : null;
        }
        $data['user_id'] = $userId;

        $evento = Evento::create($data);

        if (isset($data['proveedor_ids'])) {
            $evento->proveedores()->sync($data['proveedor_ids']);
        }

        return response()->json($evento, 201);
    }

    public function update(Request $request, $id)
    {
        $evento = Evento::findOrFail($id);

        $data = $request->validate([
            'title' => 'sometimes|string|max:255',
            'start' => 'sometimes|date',
            'end'   => 'sometimes|date',
            'color' => 'sometimes|string',
            'proveedor_ids' => 'nullable|array',
            'proveedor_ids.*' => 'exists:proveedores,id'
        ]);

        $evento->update($data);

        if (array_key_exists('proveedor_ids', $data)) {
            $evento->proveedores()->sync($data['proveedor_ids']);
        }

        return response()->json($evento->load('proveedores'));
    }

    public function destroy($id)
    {
        $evento = Evento::findOrFail($id);
        $evento->delete();

        return response()->json(null, 204);
    }
}
