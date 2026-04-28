import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Imagen de fondo con efecto de zoom lento */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="/assets/hero_image.png"
          alt="Cocinas Natta Design"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
      </div>

      {/* Contenido estático sobre la imagen */}
      <div className="container mx-auto px-4 md:px-12 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight font-monserrat drop-shadow-md">
            Cocinas para tu hogar <br />
            hechas a tu medida
          </h1>
          
          <Link
            href="/productos"
            className="inline-block bg-[#85898A] text-white px-10 py-3 rounded-[4px] text-[15px] font-medium hover:bg-zinc-600 transition-all shadow-lg"
          >
            Ver modelos
          </Link>
        </div>
      </div>
    </section>
  );
}