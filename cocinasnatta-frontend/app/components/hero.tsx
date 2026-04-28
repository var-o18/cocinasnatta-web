export default function Hero() {
  return (
    <section className="relative h-[120vh]">
      
      <div
        className="absolute top-0 left-0 w-full h-[140vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero_image.png')" }}
      />

      <div className="sticky top-0 h-screen flex items-center justify-start px-6 sm:px-10 md:px-16 lg:px-45">
        <div className="text-left text-white max-w-xl">
          <h1 className="text-[48px] font-montserrat flex-wrap">
            Cocinas para tu hogar hechas a tu medida
          </h1>

          <button className="mt-4 px-5 py-2 rounded-md bg-[#85898A] text-[#F9F9F9] font-montserrat">
            Ver modelos
          </button>
        </div>
      </div>

    </section>
  );
}