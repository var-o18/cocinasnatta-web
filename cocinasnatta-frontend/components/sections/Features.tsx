export default function Features() {
  const features = [
    {
      number: "01",
      title: "Diseño Exclusivo",
      category: "Diseño",
      description: "Cada proyecto es único. Trabajamos mano a mano contigo para plasmar tus ideas en un diseño 3D realista."
    },
    {
      number: "02",
      title: "Materiales Premium",
      category: "Calidad",
      description: "Utilizamos solo los mejores materiales del mercado para garantizar durabilidad y estética impecable."
    },
    {
      number: "03",
      title: "Montaje Profesional",
      category: "Instalación",
      description: "Nuestro equipo de instaladores expertos se encarga de que todo quede perfecto, cuidando hasta el último detalle."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.number} className="space-y-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-bold">
                {feature.number} / {feature.category}
              </span>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
