"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronDown } from "lucide-react";

export default function HeroHome() {
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
          transform: `scale(${1 + scrollY * 0.0005})`,
          opacity: Math.max(0.4, 1 - scrollY / 1200)
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <Image
          src="/assets/hero_image.png"
          alt="Cocinas Natta Design"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 text-center"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 700)
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Large Logo */}
          <div className="mb-12 animate-page">
            <img
              src="/assets/cocinasnattalogo.png"
              alt="Natta Cocinas Logo"
              className="h-[80px] md:h-[120px] object-contain brightness-0 invert opacity-90"
            />
          </div>

          <h1 className="text-white text-5xl md:text-8xl font-light leading-[1.1] mb-8 font-monserrat animate-page" style={{ animationDelay: '0.2s' }}>
            Cocinas que <br />
            <span className="font-bold italic">cuentan tu historia</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-page" style={{ animationDelay: '0.4s' }}>
            Diseño, exclusividad y funcionalidad unidos para crear el espacio más importante de tu hogar.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-page" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/productos"
              className="group relative px-12 py-4 overflow-hidden rounded-full bg-white text-black font-bold uppercase tracking-widest text-[13px] transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Ver catálogo</span>
            </Link>

            <Link
              href="/contacto"
              className="text-white border-b border-white/20 pb-1 hover:border-white transition-all duration-300 text-[13px] tracking-widest uppercase font-medium"
            >
              Visita nuestro showroom
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bouncing Arrow */}
      <a
        href="#showroom"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <ChevronDown className="text-white opacity-50" size={32} strokeWidth={1} />
      </a>
    </section>
  );
}
