"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const estilos_cocinas = [
  {
    src: "/assets/moderno_nordico.jpg",
    titulo: "Moderno – Nórdico/Minimalista",
    caracteristicas: [
      "Colores neutros (blanco y madera clara)",
      "Líneas rectas y limpias",
      "Integración de electrodomésticos",
      "Sensación de amplitud y luminosidad"
    ],
    estilo: "Este estilo mezcla lo moderno con la calidez nórdica"
  },
  {
    src: "/assets/clasico_cottage.jpg",
    titulo: "Clásico – Cottage / Farmhouse",
    caracteristicas: [
      "Muebles color verde salvia pastel",
      "Puertas con marco y vitrinas superiores",
      "Backsplash tipo ladrillo o piedra",
      "Aire rústico y acogedor"
    ],
    estilo: "Se trata de un estilo más tradicional"
  },
  {
    src: "/assets/hero_image.png",
    titulo: "Ultra moderna / Minimalismo puro",
    caracteristicas: [
      "Superficies lisas y sin tiradores visibles",
      "Tonos grises fríos",
      "Electrodomésticos empotrados",
      "Composición en líneas largas y continuidad visual"
    ],
    estilo: "Es una cocina de estética muy contemporánea y sofisticada"
  },
  {
    src: "/assets/moderno_industrial.jpg",
    titulo: "Moderno – Industrial cálido",
    caracteristicas: [
      "Madera en tonos medios y oscuros",
      "Combinación con negro (tiradores, electrodomésticos)",
      "Sensación robusta y elegante",
      "Líneas modernas, sin ornamentación clásica"
    ],
    estilo: "La mezcla de madera y negro le da un aire industrial pero acogedor"
  }
];

export default function TiposCocina() {
  return (
    <section id="tipos-cocina" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#C99A6B] uppercase tracking-[0.3em] text-sm font-medium mb-4 block">Inspiración</span>
          <h2 className="text-4xl md:text-5xl font-light text-white font-monserrat">
            Encuentra tu <span className="font-bold italic">estilo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {estilos_cocinas.map((cocina, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 shadow-2xl transition-all duration-700 group-hover:border-zinc-600">
                <Image
                  src={cocina.src}
                  alt={cocina.titulo}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                

              </div>

              {/* Content Card (Floating Style) */}
              <div className="mt-[-60px] relative z-20 px-4 md:px-8">
                <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-zinc-800 p-8 rounded-xl shadow-2xl transition-all duration-500 group-hover:translate-y-[-10px] group-hover:border-zinc-700">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-monserrat tracking-wide">
                    {cocina.titulo}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-[#C99A6B] text-xs uppercase tracking-widest font-bold mb-3">Características</p>
                      <ul className="space-y-2">
                        {cocina.caracteristicas.map((item, i) => (
                          <li key={i} className="flex items-start text-zinc-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A6B] mt-1.5 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-zinc-800 mt-2">
                      <p className="text-zinc-500 text-sm italic leading-relaxed">
                        {cocina.estilo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}