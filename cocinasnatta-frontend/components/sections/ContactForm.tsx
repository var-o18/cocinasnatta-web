"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito.");
  };

  return (
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center pt-40 pb-20 lg:pt-24 lg:pb-10 px-4 bg-[#1A1A1A]">
      {/* Fondo con Imagen */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/assets/fotoporquecocinasnatta.png"
          alt="Cocinas Natta Interior"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-4xl font-monserrat">
        <div className="flex flex-col md:flex-row items-stretch rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-xl">
          
          {/* Lado Izquierdo: Info Compacta */}
          <div className="md:w-[35%] bg-black/60 p-8 flex flex-col justify-between text-white border-b md:border-b-0 md:border-r border-white/5">
            <div className="space-y-4 pt-12 md:pt-0">
              <h2 className="text-3xl md:text-3xl font-bold uppercase tracking-tighter leading-none">
                DISEÑEMOS <br />
                <span className="text-zinc-400">TU FUTURO</span>
              </h2>
              <p className="text-zinc-400 font-light text-xs">
                La excelencia en cada detalle. Cuéntanos tu visión.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400">
                  <MapPin size={14} />
                </div>
                <p className="text-[10px] font-light">Orihuela, Alicante</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400">
                  <Phone size={14} />
                </div>
                <p className="text-[10px] font-light">+34 966 74 12 34</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400">
                  <Mail size={14} />
                </div>
                <p className="text-[10px] font-light">info@cocinasnatta.com</p>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Formulario "Cuadradico" */}
          <div className="md:w-[65%] bg-white/5 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-60">Nombre</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 text-xs"
                    placeholder="Tu nombre..."
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-60">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 text-xs"
                    placeholder="Tu email..."
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-60">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 text-xs"
                  placeholder="+34 000 000 000"
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[8px] uppercase tracking-[0.4em] font-bold text-white opacity-60">Mensaje</label>
                <textarea 
                  rows={2}
                  required
                  className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 text-xs resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full px-12 py-4 bg-white text-black text-[9px] uppercase tracking-[0.5em] font-bold rounded-full hover:bg-zinc-200 transition-all duration-500 shadow-xl"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
