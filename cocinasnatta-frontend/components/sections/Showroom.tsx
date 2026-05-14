"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Showroom() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax suave y seguro
  const parallaxValue = typeof window !== 'undefined' ? (scrollY * 0.1) : 0;

  return (
    <section
      id="showroom"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black z-10 -mt-[1px]"
      style={{ transform: "translateY(0)" }}
    >

      {/* Fondo con Parallax de alta precisión */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Degradado superior ultra-denso para cierre perfecto */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-black/80 to-transparent h-48" />
        <div
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${parallaxValue}px)`,
            transition: "transform 0.1s linear"
          }}
        >
          <Image
            src="/assets/fotoseccion2home.jpg"
            alt="Showroom Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Lado Izquierdo: Texto */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none font-monserrat drop-shadow-2xl">
              DISEÑO QUE <br />
              <span className="text-[#C99A6B]">EMOCIONA</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-xl leading-relaxed mx-auto lg:mx-0">
              Creamos espacios únicos donde la funcionalidad se encuentra con la belleza. Tu cocina soñada, diseñada por expertos.
            </p>
            <div className="pt-4">
              <Link
                href="/pide-tu-diseno"
                className="inline-block px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all rounded-full cursor-pointer"
              >
                Pide tu diseño
              </Link>
            </div>
          </div>

          {/* Lado Derecho: Cards */}
          <div className="flex-1 relative w-full flex items-center justify-center">
            <div className="relative z-20 w-[300px] h-[420px] md:w-[380px] md:h-[520px] animate-float">
              <div className="w-full h-full bg-white/10 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/assets/fotoseccion2home2.png"
                    alt="Detalle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 z-30 w-[200px] md:w-[260px] bg-zinc-950 border border-white/10 p-8 rounded-2xl shadow-2xl">
              <span className="text-[#C99A6B] text-[10px] uppercase tracking-[0.4em] block mb-2 font-bold">Concepto</span>
              <h4 className="text-white text-base md:text-lg font-medium leading-tight">Innovación en cada milímetro</h4>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
