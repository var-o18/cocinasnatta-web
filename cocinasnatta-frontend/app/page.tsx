import Hero from "@/components/sections/Hero";
import Showroom from "@/components/sections/Showroom";
import Footer from "@/components/layout/Footer";
import WhyNatta from "@/components/sections/WhyNatta";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero: Ahora vuelve a ser una sección normal pero con scroll fluido */}
      <Hero />
      
      {/* Showroom: Se conecta directamente con el Hero */}
      <Showroom />
      
      <WhyNatta />
      
      <div className="p-5 text-center bg-[#2b2b28]">
        <p className="text-neutral-400 text-[9px] tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} Natta Cocinas | Excelencia en cada detalle
        </p>
       </div> 
    </main>
  );
}
