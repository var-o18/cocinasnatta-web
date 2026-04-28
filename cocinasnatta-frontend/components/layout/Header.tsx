"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
        scrolled 
          ? "bg-white border-b-2 border-black h-[70px] shadow-md" 
          : "bg-transparent h-[100px]"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <nav className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/cocinasnattalogo.png"
              alt="Natta Cocinas"
              className={`transition-all duration-300 object-contain ${
                scrolled 
                  ? "h-[45px]" 
                  : "h-[65px] brightness-0 invert" /* Esto lo pone en blanco sobre el fondo oscuro */
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  scrolled ? "text-zinc-800 hover:text-zinc-500" : "text-white hover:text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/pide-tu-diseno"
              className="bg-[#85898A] text-white px-8 py-2.5 rounded-[4px] text-[14px] font-medium hover:bg-zinc-600 transition-all shadow-lg"
            >
              Pide tu diseño
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${scrolled ? "text-zinc-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/pide-tu-diseno"
            className="bg-[#85898A] text-white px-6 py-3 rounded-md text-center font-medium"
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
