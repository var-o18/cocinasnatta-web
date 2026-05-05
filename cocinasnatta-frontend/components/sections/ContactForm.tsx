"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", correo: "", mensaje: "" });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      if (status !== "success") {
        // We keep success status to show the message
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-4 bg-[#0A0A0A] overflow-hidden">
      {/* Fondo Cinematográfico con Efecto Ken Burns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <Image
          src="/assets/fotoporquecocinasnatta.png"
          alt="Cocinas Natta Interior"
          fill
          className="object-cover opacity-60 animate-ken-burns"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Lado Izquierdo: Texto Editorial y Contacto Directo */}
        <div className="lg:w-1/2 space-y-10 text-white">
          <div className="space-y-4">
            <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-bold">Atención Exclusiva</span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Hablemos de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">tu proyecto</span>
            </h1>
            <p className="text-zinc-400 font-light text-lg max-w-md leading-relaxed">
              Cada gran diseño comienza con una conversación. Cuéntanos tu visión y nosotros la haremos realidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-zinc-500 uppercase text-[9px] tracking-widest font-bold">Llámanos</p>
              <a href="tel:966752139" className="text-xl font-light hover:text-zinc-400 transition-colors">966 75 21 39</a>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-500 uppercase text-[9px] tracking-widest font-bold">Escríbenos</p>
              <a href="mailto:info@nattacocinas.com" className="text-xl font-light hover:text-zinc-400 transition-colors">info@nattacocinas.com</a>
            </div>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://www.instagram.com/nattacocinas/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/34966752139" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Formulario Glassmorphism */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] min-h-[400px] flex flex-col justify-center">
            {status === "success" ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tighter text-white">¡Mensaje Enviado!</h3>
                <p className="text-zinc-400 font-light text-lg">
                  Gracias por confiar en nosotros. <br />
                  Nos pondremos en contacto contigo lo antes posible.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-white/50 hover:text-white text-xs uppercase tracking-widest transition-colors pt-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white ml-1 font-bold">Nombre</label>
                    <input 
                      type="text" 
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre || ""}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white ml-1 font-bold">Email</label>
                    <input 
                      type="email" 
                      name="correo"
                      placeholder="email@ejemplo.com"
                      value={formData.correo || ""}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white ml-1 font-bold">Mensaje</label>
                  <textarea 
                    name="mensaje"
                    placeholder="Cuéntanos un poco sobre lo que buscas..."
                    value={formData.mensaje || ""}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-400 resize-none"
                    required
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs ml-1 animate-pulse">
                    Error al enviar el mensaje. Inténtalo de nuevo.
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-zinc-200 transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
