import { buildBrandedEmail } from "./buildBrandedEmail";
import { getMailFrom, getTransporter } from "./getTransporter";
import type { ContactPayload } from "@/lib/contact/saveContact";

const CONTACT_EMAIL =
  process.env.CONTACT_TO ??
  process.env.GMAIL_USER ??
  "infonattacocinas@gmail.com";

/** Envía al cliente la confirmación de que Natta Cocinas ha recibido su mensaje. */
export async function sendConfirmationEmail(data: ContactPayload) {
  const transporter = getTransporter();
  const from = getMailFrom();
  const fromHeader = `"Natta Cocinas" <${from}>`;

  const { html, attachments } = buildBrandedEmail({
    title: "Hemos recibido tu mensaje",
    messageText: `Hola ${data.nombre},

Gracias por contactar con Natta Cocinas.

Tu mensaje ha llegado correctamente a ${CONTACT_EMAIL}. Nuestro equipo lo revisará y nos pondremos en contacto contigo lo antes posible.

Resumen de tu solicitud:
${data.mensaje}

Un saludo,
El equipo de Natta Cocinas`,
    correoRespuesta: CONTACT_EMAIL,
    footerText:
      "Natta Cocinas · Confirmación automática del formulario de contacto",
  });

  await transporter.sendMail({
    from: fromHeader,
    to: data.correo,
    replyTo: CONTACT_EMAIL,
    subject: "Confirmación: hemos recibido tu mensaje | Natta Cocinas",
    html,
    attachments,
  });
}
