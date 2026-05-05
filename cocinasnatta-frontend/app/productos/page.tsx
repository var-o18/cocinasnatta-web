import HeroProduct from "@/components/sections/HeroProduct";
import TiposCocina from "@/components/sections/TiposCocina";
import ConfiguraTuCocina from "@/components/sections/ConfiguraTuCocina";
import React from "react";

export default function ProductosPage() {
  return (
    <main className="bg-black">

      <HeroProduct />
      <TiposCocina />
      <ConfiguraTuCocina />

      <div className="p-5 text-center bg-[#2b2b28]">
        <p className="text-neutral-400 text-[9px] tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} Natta Cocinas | Excelencia en cada detalle
        </p>
      </div>
    </main>
  );
}
