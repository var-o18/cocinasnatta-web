import React from "react";
import { MapPin } from "lucide-react";
import MapEmbed from "./MapEmbed";
import GoogleReviews from "./GoogleReviews";

interface FooterProps {
  isFloating?: boolean;
}

const Footer = ({ isFloating = true }: FooterProps) => {
  return (
    <footer className={`relative z-20 pb-20 mt-10`}>
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">

        <div className={`${isFloating ? "bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-xl" : "bg-zinc-950"} border border-white/10 p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-3xl relative overflow-hidden`}>
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-white/5 pb-16 relative z-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-4 text-white">
                  Visítanos
                </h2>

                <p className="text-xl font-light text-zinc-300">
                  Cocinas Natta
                </p>

                <p className="text-zinc-400 text-sm mt-2 hover:text-white transition">
                  C/ Casas Nuevas, 03369 El Badén, Alicante
                </p>

                <p className="text-zinc-500 text-sm mt-3">
                  Tfno: <span className="text-zinc-300">966 75 21 39</span>
                </p>
              </div>

              {/* ICONOS */}
              <div className="flex gap-4">

                <a href="https://www.google.com/maps/place/Natta+Cocinas/@38.1042766,-0.8586575,18z/data=!4m15!1m8!3m7!1s0xd63a307d1260af3:0x20d1dbe891ded474!2sC.+Casas+Nuevas,+03369+El+Bad%C3%A9n,+Alicante!3b1!8m2!3d38.1047261!4d-0.8580475!16s%2Fg%2F11bw4l0ywz!3m5!1s0xd63a382c075dbbb:0x474a2bb7090ef491!8m2!3d38.1042343!4d-0.8588461!16s%2Fg%2F11hhpm5smx?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
                  className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full text-white bg-white/5 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                  <MapPin size={18} />
                </a>

                <a href="#" className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full text-white bg-white/5 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                <a href="https://www.instagram.com/cocinasnatta/" className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full text-white bg-white/5 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>

              </div>
            </div>

            <div className="md:text-right flex flex-col justify-center">
              <h3 className="text-xl font-light text-white mb-4 uppercase tracking-[0.2em]">
                Horario
              </h3>
              <div className="space-y-3 text-lg font-light">
                <p className="text-zinc-400">
                  Lunes a Viernes
                </p>
                <div className="flex flex-col md:items-end gap-1 text-white text-xl font-medium">
                  <span>09:00 – 14:00</span>
                  <span>16:00 – 17:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa/Reseñas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <MapEmbed />
            <GoogleReviews />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;