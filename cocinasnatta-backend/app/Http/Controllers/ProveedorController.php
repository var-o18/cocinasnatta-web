<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Proveedor;

class ProveedorController extends Controller
{
    public function index()
    {
        return response()->json(Proveedor::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre_empresa' => 'required|string|max:255',
            'nombre_contacto' => 'required|string|max:255',
            'correo' => 'required|email|max:255',
            'telefono' => 'required|string|max:255',
            'direccion' => 'required|string|max:255',
        ]);

        $proveedor = Proveedor::create($validated);

        return response()->json($proveedor, 201);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $proveedor = Proveedor::find($id);
        if (!$proveedor) {
            return response()->json(['message' => 'Proveedor no encontrado'], 404);
        }

        $validated = $request->validate([
            'nombre_empresa' => 'required|string|max:255',
            'nombre_contacto' => 'required|string|max:255',
            'correo' => 'required|email|max:255',
            'telefono' => 'required|string|max:255',
            'direccion' => 'required|string|max:255',
        ]);

        $proveedor->update($validated);

        return response()->json($proveedor);
    }

    public function destroy($id)
    {
        $proveedor = Proveedor::find($id);
        if (!$proveedor) {
            return response()->json(['message' => 'Proveedor no encontrado']);
        }
        $proveedor->delete();
        return response()->json(['message' => 'Proveedor eliminado exitosamente']);
    }
}