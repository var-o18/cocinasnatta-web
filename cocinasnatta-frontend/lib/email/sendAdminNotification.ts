import { buildBrandedEmail } from "./buildBrandedEmail";
import { getMailFrom, getTransporter } from "./getTransporter";
import type { ContactPayload } from "@/lib/contact/saveContact";

const CONTACT_EMAIL =
  process.env.CONTACT_TO ??
  process.env.GMAIL_USER ??
  "infonattacocinas@gmail.com";

/** Avisa a infonattacocinas@gmail.com de un nuevo mensaje en la web. */
export async function sendAdminNotification(data: ContactPayload) {
  const transporter = getTransporter();
  const from = getMailFrom();
  const fromHeader = `"Natta Cocinas" <${from}>`;

  const { html, attachments } = buildBrandedEmail({
    title: "Nuevo mensaje de contacto",
    messageText: `Has recibido un nuevo mensaje desde la web de Natta Cocinas:

Nombre: ${data.nombre}
Email: ${data.correo}

Mensaje:
${data.mensaje}`,
    correoRespuesta: data.correo,
    footerText: "Natta Cocinas · Notificación del formulario de contacto",
  });

  await transporter.sendMail({
    from: fromHeader,
    to: CONTACT_EMAIL,
    replyTo: data.correo,
    subject: `[Contacto Web] Mensaje de ${data.nombre}`,
    html,
    attachments,
  });
}
