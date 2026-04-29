import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Isabel Rodríguez Ramón",
    rating: 5,
    text: "Grandes artesanos. Pide un deseo, y Natta te lo concede.",
    date: "Hace 3 meses",
  },
  {
    id: 2,
    author: "Isabel Rodríguez Ramón",
    rating: 5,
    text: "Grandes artesanos. Pide un deseo, y Natta te lo concede.",
    date: "Hace 3 meses",
  },
  {
    id: 3,
    author: "Isabel Rodríguez Ramón",
    rating: 5,
    text: "Grandes artesanos. Pide un deseo, y Natta te lo concede.",
    date: "Hace 3 meses",
  }
];

const GoogleReviews = () => {
  return (
    <div className="flex flex-col gap-6">
    
      {reviews.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-500">
    
          <h4 className="text-white mb-2 font-bold text-xs tracking-widest uppercase">
            {item.author}
          </h4>
    
          {/* ESTRELLAS */}
          <div className="flex mb-3">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
            ))}
         </div>
    
          {/* TEXTO */}
          <p className="text-sm text-zinc-100 italic leading-relaxed">
            "{item.text}"
          </p>
                
    
        </div>
      ))}  
     </div>
  );
};

export default GoogleReviews;
