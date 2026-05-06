import React from "react";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactoPage() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-[#1A1A1A]">
      {/* Eliminamos Footer y MapEmbed. Solo el formulario en pantalla completa */}
      <ContactForm />
      <div className="p-5 text-center bg-[#2b2b28]">
        <p className="text-neutral-400 text-[9px] tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} Natta Cocinas | Excelencia en cada detalle
        </p>
      </div>
    </div>
  );
}
