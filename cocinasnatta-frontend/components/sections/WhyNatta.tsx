import React from "react";
import Image from "next/image";
import { Award, ThumbsUp, Users } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function WhyNatta() {
  const items = [
    {
      icon: <Award size={40} className="stroke-1" />,
      text: "Más de 25 años de trayectoria en nuestro sector"
    },
    {
      icon: <ThumbsUp size={40} className="stroke-1" />,
      text: "Experiencia que nos permite ofrecer soluciones y propuestas"
    },
    {
      icon: <Users size={40} className="stroke-1" />,
      text: "Te acompañamos durante el proceso"
    }
  ];

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden -mt-[1px] z-20"
      style={{ transform: "translateY(0)" }}
    >
      {/* Fondo con Fusión de Degradado Larga */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Degradado superior denso */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-black/60 to-transparent h-64" />
        <Image
          src="/assets/fotoporquecocinasnatta.png"
          alt="Cocinas Natta Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Título en Blanco para máximo contraste */}
          <h2 className="text-4xl md:text-6xl font-bold font-monserrat text-white uppercase tracking-[0.2em] leading-tight">
            ¿Por qué <br className="md:hidden" /> <span className="text-zinc-400">Cocinas Natta?</span>
          </h2>
          
          <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-300 max-w-3xl mx-auto">
            Transformamos espacios complejos en cocinas intuitivas mediante un método probado que prioriza tu comodidad y supera tus expectativas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-6 group">
                <div className="text-white group-hover:text-zinc-400 transition-all duration-500 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="text-xs md:text-sm font-medium tracking-widest text-zinc-400 uppercase leading-widest">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer integrado al final con espacio */}
      <div className="w-full mt-32 relative z-30">
        <Footer isFloating={true} />
      </div>
    </section>
  );
}
