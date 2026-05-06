"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isHome = pathname === "/";
  const showLogo = !isHome || scrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 h-[80px] shadow-2xl" 
          : "bg-transparent h-[110px]"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <nav className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center group transition-all duration-500 ${
              showLogo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
            }`}
          >
            <img
              src="/assets/cocinasnattalogo.png"
              alt="Natta Cocinas"
              className={`transition-all duration-500 object-contain brightness-0 invert ${
                scrolled 
                  ? "h-[40px]" 
                  : "h-[60px]"
              } group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] uppercase tracking-widest font-medium transition-all text-white hover:text-[#C99A6B] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C99A6B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/pide-tu-diseno"
              className="bg-[#C99A6B] text-white px-8 py-3 rounded-full text-[13px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all shadow-xl"
            >
              Pide tu diseño
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-500">
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-light tracking-[0.2em] uppercase text-white hover:text-[#C99A6B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/pide-tu-diseno"
            className="bg-[#C99A6B] text-white px-10 py-4 rounded-full text-[14px] uppercase tracking-widest font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Pide tu diseño
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
