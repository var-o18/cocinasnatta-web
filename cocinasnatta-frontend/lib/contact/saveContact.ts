export type ContactPayload = {
  nombre: string;
  correo: string;
  mensaje: string;
};

// 127.0.0.1 evita que Node use IPv6 (::1) y falle en Windows
const BACKEND_API_URL =
  process.env.BACKEND_API_URL ?? "http://127.0.0.1:8000/api";

/** Guarda el mensaje en la base de datos (Laravel). */
export async function saveContact(data: ContactPayload) {
  const response = await fetch(`${BACKEND_API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      `No se pudo guardar el contacto (${response.status}): ${detail}`
    );
  }

  return response.json();
}
