import Hero from "@/components/sections/Hero";
import Showroom from "@/components/sections/Showroom";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero: Ahora vuelve a ser una sección normal pero con scroll fluido */}
      <Hero />
      
      {/* Showroom: Se conecta directamente con el Hero */}
      <Showroom />
      
      {/* Footer: Se mantiene al final */}
      <Footer isFloating={true} />
    </main>
  );
}
