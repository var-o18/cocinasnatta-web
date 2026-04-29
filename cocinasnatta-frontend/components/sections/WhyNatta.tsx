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
    <section className="relative min-h-[500px] flex flex-col items-center pt-32  overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 " />
        <Image
          src="/assets/fotoporquecocinasnatta.png"
          alt="Cocinas Natta Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-12 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-medium font-monserrat text-black/90 uppercase tracking-widest">
            ¿Por qué cocinas Natta?
          </h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-black/80">
            Transformamos espacios complejos en cocinas intuitivas mediante un método probado que prioriza tu comodidad, manteniendo comunicación constante y superando expectativas en cada etapa del proyecto.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4 group">
                <div className="text-black/80 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <p className="text-sm md:text-base font-light text-black/80 max-w-[200px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
       < Footer isFloating={true} />
    </section>
  );
}
