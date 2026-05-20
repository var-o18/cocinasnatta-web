import nodemailer from "nodemailer";

export function getSmtpCredentials() {
  const user =
    process.env.SMTP_USER ??
    process.env.GMAIL_USER ??
    process.env.CONTACT_TO ??
    "infonattacocinas@gmail.com";

  const rawPass = process.env.SMTP_PASS ?? process.env.GMAIL_PASS ?? "";
  const pass = rawPass.replace(/\s+/g, "");

  return { user, pass };
}

export function getTransporter() {
  const { user, pass } = getSmtpCredentials();

  if (!pass) {
    throw new Error(
      "SMTP no configurado: define GMAIL_PASS o SMTP_PASS en .env"
    );
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export function getMailFrom() {
  const { user } = getSmtpCredentials();
  return process.env.SMTP_FROM ?? process.env.GMAIL_USER ?? user;
}
