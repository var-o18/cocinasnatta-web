<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Propuesta;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;

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
            'elementos' => 'nullable|array',
            'elementos.*.nombre' => 'required_with:elementos|string',
            'elementos.*.cantidad' => 'required_with:elementos|integer',
            'imagen_diseno' => 'nullable|string',
        ]);
        

        $rutaImagen = null;

        if (!empty($validated['imagen_diseno'])) {

            $imageData = preg_replace(
                '#^data:image/\w+;base64,#i',
                '',
                $validated['imagen_diseno']
            );

            $imageData = base64_decode($imageData);

            $nombreImagen = 'disenos/' . uniqid() . '.png';

            Storage::disk('public')->put(
                $nombreImagen,
                $imageData
            );

            $rutaImagen = storage_path(
                'app/public/' . $nombreImagen
            );
        }

        try {
            // 1. Generar PDF
            $pdf = Pdf::loadView('pdf.propuesta', [
                'nombre' => $validated['nombre'],
                'email' => $validated['email'],
                'telefono' => $validated['telefono'],
                'descripcion' => $validated['descripcion'],
                'elementos' => $validated['elementos'] ?? [],
                'imagenDiseno' => $rutaImagen
        ]);
            $pdfBinary = $pdf->output();

            // 2.Guardar propuesta
            $propuesta = Propuesta::create([
                'nombre' => $validated['nombre'],
                'email' => $validated['email'],
                'telefono' => $validated['telefono'],
                'descripcion' => $validated['descripcion'],
                'archivo_pdf' => $pdfBinary,
                'estado' => 'pendiente',
            ]);

            return response()->json($propuesta, 201);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Error generando o guardando PDF',
                'error' => $e->getMessage()
            ], 500);
        }
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
