"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Send, Phone, Mail, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";

export default function PideTuDiseno() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleStartDesign = () => {
        window.location.href = process.env.NEXT_PUBLIC_3D_URL!;
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
                style={{
                    transform: `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.1}px)`,
                    opacity: Math.max(0.2, 1 - scrollY / 1500)
                }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-transparent to-black" />
                <Image
                    src="/assets/fotoseccion2home.jpg"
                    alt="Cocinas Natta Design"
                    fill
                    className="object-cover animate-ken-burns"
                    priority
                />
            </div>
            <div className="container mx-auto px-6 relative z-30 text-center"
                style={{
                    transform: `translateY(${scrollY * -0.2}px)`,
                    opacity: Math.max(0, 1 - scrollY / 600)
                }}
            >
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block text-[#C99A6B] uppercase tracking-[0.5em] text-xs font-bold mb-6 animate-page">
                        Pide tu diseño
                    </span>

                    <h1 className="text-white text-5xl md:text-8xl font-light leading-[1.1] mb-8 font-monserrat animate-page" style={{ animationDelay: '0.2s' }}>
                        Diseña tu<br />
                        <span className="font-light italic">propia cocina</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-page" style={{ animationDelay: '0.4s' }}>
                        Cuéntanos tus ideas, medidas y necesidades y diseñaremos la cocina de tus sueños.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-page" style={{ animationDelay: '0.6s' }}>

                        <button
                            onClick={handleStartDesign}
                            className="group relative px-10 py-4 bg-[#C99A6B] text-white text-xs tracking-[0.3em] uppercase font-bold transition-all duration-500 hover:bg-[#b38555] overflow-hidden flex items-center gap-3 shadow-xl shadow-[#C99A6B]/20 rounded-full cursor-pointer"
                            >
                            <span className="relative z-10 flex items-center gap-2">
                                Comenzar nuevo diseño
                                <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                            </span>

                            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}