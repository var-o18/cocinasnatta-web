<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Propuesta;
use Illuminate\Support\Facades\Storage;

class PropuestaController extends Controller
{
    public function index()
    {
        $propuestas = Propuesta::select(['id', 'nombre', 'email', 'telefono', 'descripcion', 'estado', 'created_at', 'updated_at'])
            ->orderByDesc('created_at')
            ->get();
        return response()->json($propuestas);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'telefono' => 'required|string|max:20',
            'descripcion' => 'required|string|max:2000',
            'archivo_pdf' => 'required|string',

        ]);

        $propuesta = Propuesta::create($validated);
        $propuesta->makeHidden('archivo_pdf');
        return response()->json($propuesta, 201);
    }

    public function show($id)
    {
        $propuesta = Propuesta::find($id);
        if (!$propuesta) {
            return response()->json(['message' => 'Propuesta no encontrada'], 404);
        }
        $propuesta->makeHidden('archivo_pdf');
        return response()->json($propuesta);
    }

    public function update(Request $request, $id)
    {
        $propuesta = Propuesta::find($id);
        if (!$propuesta) {
            return response()->json(['message' => 'Propuesta no encontrada'], 404);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'telefono' => 'required|string|max:20',
            'descripcion' => 'required|string|max:2000',
            'archivo_pdf' => 'nullable|string',
            'estado' => 'in:pendiente,en_curso,finalizado,cancelado',
        ]);

        $propuesta->update($validated);
        $propuesta->makeHidden('archivo_pdf');
        return response()->json($propuesta);
    }
    
    public function destroy($id)
    {
        $propuesta = Propuesta::find($id);
        if (!$propuesta) {
            return response()->json(['message' => 'Propuesta no encontrada'], 404);
        }
        $propuesta->delete();
        return response()->json(['message' => 'Propuesta eliminada exitosamente']);
    }

    public function downloadPdf($id)
    {
        $propuesta = Propuesta::find($id);
        if (!$propuesta || !$propuesta->archivo_pdf) {
            return response()->json(['message' => 'Archivo PDF no encontrado'], 404);
        }

        return response($propuesta->archivo_pdf)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', 'inline; filename="propuesta_' . $id . '.pdf"');
    }

}
