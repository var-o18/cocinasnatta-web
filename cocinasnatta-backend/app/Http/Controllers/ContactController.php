<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return response()->json(Contact::all());
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'correo' => 'required|email|max:255',
            'mensaje' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        return response()->json($contact, 201);
    }

    public function show(Contact $contact)
    {
    }

    public function edit(Contact $contact)
    {
    }

    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'estado' => 'required|in:pendiente,procesado,finalizado',
        ]);

        $contact->update($validated);

        return response()->json($contact);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json(null, 204);
    }
}
