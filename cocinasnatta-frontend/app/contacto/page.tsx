import React from "react";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactoPage() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-[#1A1A1A]">
      {/* Eliminamos Footer y MapEmbed. Solo el formulario en pantalla completa */}
      <ContactForm />
    </div>
  );
}
