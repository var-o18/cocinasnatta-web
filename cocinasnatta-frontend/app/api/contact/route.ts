import { NextResponse } from "next/server";
import { saveContact } from "@/lib/contact/saveContact";
import { sendConfirmationEmail } from "@/lib/email/sendConfirmationEmail";
import { sendAdminNotification } from "@/lib/email/sendAdminNotification";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nombre = String(body.nombre ?? "").trim();
    const correo = String(body.correo ?? "").trim();
    const mensaje = String(body.mensaje ?? "").trim();

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, correo y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 }
      );
    }

    const payload = { nombre, correo, mensaje };

    // 1) Guardar en base de datos (obligatorio)
    const contact = await saveContact(payload);

    // 2) Enviar correos (opcional: si fallan, el mensaje ya está guardado)
    let confirmationSent = false;
    let adminNotified = false;
    let emailWarning: string | undefined;

    try {
      await sendConfirmationEmail(payload);
      confirmationSent = true;
    } catch (emailError) {
      console.error("Error al enviar confirmación al cliente:", emailError);
      emailWarning =
        emailError instanceof Error
          ? emailError.message
          : "No se pudo enviar el correo de confirmación.";
    }

    try {
      await sendAdminNotification(payload);
      adminNotified = true;
    } catch (adminError) {
      console.error("Error al notificar a administración:", adminError);
      if (!emailWarning) {
        emailWarning =
          adminError instanceof Error
            ? adminError.message
            : "No se pudo enviar la notificación interna.";
      }
    }

    return NextResponse.json(
      {
        success: true,
        saved: true,
        contact,
        confirmationSent,
        adminNotified,
        emailWarning,
        message: confirmationSent
          ? "Mensaje guardado. Recibirás un correo de confirmación en breve."
          : "Mensaje guardado correctamente. El correo de confirmación se enviará cuando SMTP esté configurado.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en /api/contact:", error);

    const message =
      error instanceof Error ? error.message : "Error desconocido";

    if (
      message.includes("guardar el contacto") ||
      message.includes("fetch failed") ||
      message.includes("ECONNREFUSED")
    ) {
      return NextResponse.json(
        {
          error:
            "No se pudo conectar con el backend. Abre otra terminal, entra en cocinasnatta-backend y ejecuta: php artisan serve",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { error: "Error al procesar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
