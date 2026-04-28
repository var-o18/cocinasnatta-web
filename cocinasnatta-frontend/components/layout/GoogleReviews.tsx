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
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-2 custom-scrollbar">
      {reviews.map((review, index) => (
        <div 
          key={index} 
          className="bg-[#C4C4C4]/60 border border-black/40 p-6 text-black"
        >
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-[17px] font-medium font-monserrat">{review.author}</h4>
            <div className="flex text-yellow-500">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col mb-4">
            <span className="text-[12px] text-zinc-800 underline">Reseña de Google</span>
            <span className="text-[11px] text-zinc-700 font-bold">{review.rating}/5 Hace 3 meses</span>
          </div>

          <p className="text-[20px] leading-tight font-medium">
            {review.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
