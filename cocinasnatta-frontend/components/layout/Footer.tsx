import React from "react";
import Testimonials from "./Testimonials";
import { Search } from "lucide-react";

interface FooterProps {
  isFloating?: boolean;
}

const Footer = ({ isFloating = true }: FooterProps) => {
  return (
    <footer className={`relative z-20 pb-20 ${isFloating ? "-mt-64" : "mt-20"}`}>
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        {/* Tarjeta con cristal o fondo sólido */}
        <div className={`${isFloating ? "bg-zinc-900/85 backdrop-blur-xl" : "bg-zinc-950"} border border-white/10 p-8 md:p-12 shadow-2xl rounded-2xl`}>
          {/* Cabecera: Info y Horario */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-white/5 pb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4 font-monserrat text-white">
                  Visítanos en nuestra tienda
                </h2>
                <p className="text-xl font-light text-zinc-300">Cocinas Natta</p>
                <p className="text-zinc-400 text-sm border-b border-zinc-600 inline-block">C. Casas Nuevas, 03369 El Badén, Alicante</p>
                <p className="text-zinc-400 text-sm mt-4">Tfno: 966752139</p>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Search size={18} />
                </a>
                <a href="#" className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:text-right flex flex-col md:justify-center">
              <h3 className="text-xl font-light text-white mb-4 uppercase tracking-widest">Horario Comercial</h3>
              <div className="space-y-2 text-zinc-400 text-lg font-light">
                <p>Lunes a Viernes: <br/><span className="text-white">10:00 – 14:00 / 16:00 – 20:00</span></p>
                <p>Sábados: <br/><span className="text-white">10:00 – 13:30</span></p>
              </div>
            </div>
          </div>

          {/* Testimonios */}
          <Testimonials />
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/20 text-[9px] tracking-[0.5em] uppercase">
            © {new Date().getFullYear()} Natta Cocinas | Excelencia en cada detalle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
