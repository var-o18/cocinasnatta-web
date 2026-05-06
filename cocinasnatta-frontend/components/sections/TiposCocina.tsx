"use client";

import Image from "next/image";

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
    <section id="tipos-cocina" className="py-16 bg-gradient-to-b from-[#222222] via-[#777777] to-[#222222]text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4">

        {estilos_cocinas.map((cocina, index) => (
          <div key={index} className="text-center relative">

            {/* Título */}
            <h3 className="mb-4 text-2xl font-light text-gray-300">
              {cocina.titulo}
            </h3>

            {/* Imagen */}
            <div className="bg-[#D9D9D9] rounded-lg shadow-lg p-3 relative z-0">
              <Image
                src={cocina.src}
                alt={cocina.titulo}
                width={500}
                height={300}
                className="rounded-md object-cover w-full h-[250px]"
              />
            </div>

            {/* Caja características */}
            <div className="-mt-10 mx-auto w-[85%] bg-gradient-to-b from-[#837970] to-[#999999] text-black text-sm p-4 rounded shadow-lg relative z-10">
              <p className="font-semibold mb-1">Características:</p>
              <ul className="text-left list-disc list-inside">
                {cocina.caracteristicas.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-left">{cocina.estilo}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}