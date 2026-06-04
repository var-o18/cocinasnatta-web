<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index()
    {
        $pedidos = Pedido::with('cliente')->get();
        return response()->json($pedidos);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'nombre_cocina' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
            'estado' => 'required|in:pendiente,en_proceso,completado,cancelado',
            'fecha_pedido' => 'required|date',
        ]);

        $pedido = Pedido::create($validated);
        $pedido->load('cliente');

        return response()->json($pedido, 201);
    }

    public function show($id)
    {
        $pedido = Pedido::with('cliente')->find($id);
        if (!$pedido) {
            return response()->json(['message' => 'Pedido no encontrado'], 404);
        }
        return response()->json($pedido);
    }

    public function update(Request $request, $id)
    {
        $pedido = Pedido::find($id);
        if (!$pedido) {
            return response()->json(['message' => 'Pedido no encontrado'], 404);
        }

        $validated = $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'nombre_cocina' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
            'estado' => 'required|in:pendiente,en_proceso,completado,cancelado',
            'fecha_pedido' => 'required|date',
        ]);

        $pedido->update($validated);
        $pedido->load('cliente');

        return response()->json($pedido);
    }

    public function destroy($id)
    {
        $pedido = Pedido::find($id);
        if (!$pedido) {
            return response()->json(['message' => 'Pedido no encontrado'], 404);
        }
        $pedido->delete();
        return response()->json(['message' => 'Pedido eliminado exitosamente']);
    }
}
