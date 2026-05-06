"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

export default function HeroProduct() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with parallax and scale */}
      <div className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0.2, 1 - scrollY / 1500)
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <Image 
          src="/assets/hero_products.png" 
          alt="Cocinas Natta Design" 
          fill 
          className="object-cover animate-ken-burns" 
          priority 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 text-center"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}
      >
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[#C99A6B] uppercase tracking-[0.5em] text-xs font-bold mb-6 animate-page">
            Catálogo Natta
          </span>
          
          <h1 className="text-white text-5xl md:text-8xl font-light leading-[1.1] mb-8 font-monserrat animate-page" style={{ animationDelay: '0.2s' }}>
            Inspiración <br />
            <span className="font-bold italic">para tu cocina</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-page" style={{ animationDelay: '0.4s' }}>
            Explora diseños modernos, funcionales y minimalistas pensados para transformar el corazón de tu hogar.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-page" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#tipos-cocina" 
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-white text-black font-semibold transition-all duration-300 hover:pr-14"
            >
              <span className="relative z-10">Ver diseños</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:translate-x-[-20px] group-hover:opacity-100 transition-all duration-300">
                →
              </span>
            </a>
            
            <a 
              href="/pide-tu-diseno" 
              className="text-white border-b border-white/30 pb-1 hover:border-white transition-all duration-300 text-sm tracking-widest uppercase font-medium"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bouncing Arrow */}
      <a 
        href="#tipos-cocina" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <ChevronDown className="text-white opacity-50" size={32} strokeWidth={1} />
      </a>
    </section>
  );
}

