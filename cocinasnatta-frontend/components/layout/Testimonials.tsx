import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    author: "Isabel Rodríguez Ramón",
    quote: "Grandes artesanos. Pide un deseo, y Natta te lo concede.",
    subtitle: "Cliente Satisfecho",
    rating: 5
  },
  {
    author: "Ricardo M. Pérez",
    quote: "La calidad de los materiales y el montaje han superado nuestras expectativas. Un trabajo impecable.",
    subtitle: "Proyecto Cocina Moderna",
    rating: 5
  },
  {
    author: "Elena Soriano",
    quote: "El diseño en 3D nos ayudó muchísimo a visualizar el espacio. El resultado final es idéntico a lo que soñamos.",
    subtitle: "Diseño Personalizado",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((item, index) => (
        <div 
          key={index} 
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col h-full hover:bg-white/10 transition-all duration-500 group rounded-xl"
        >
          <div className="flex mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
            ))}
          </div>
          
          <div className="flex-grow">
            <p className="text-lg leading-relaxed text-zinc-100 font-light italic">
              "{item.quote}"
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">
              {item.author}
            </h4>
            <span className="text-zinc-500 text-[10px] tracking-widest">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
