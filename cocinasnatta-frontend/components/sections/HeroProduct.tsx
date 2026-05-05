"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroProduct() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: Math.max(0, 1 - scrollY / 1200),
          transform: `scale(${1 + scrollY * 0.0003})`
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/40 to-transparent h-full" />
        <Image src="/assets/hero_products.png" alt="Cocinas Natta Design" fill className="object-cover animate-slow-zoom" priority />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-20"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            ¿Buscas ideas para tu cocina?
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Diseños modernos, funcionales y pensados para tu día a día.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
            Ver diseños
          </button>
        </div>
      </div>
    </section>
  );
}
