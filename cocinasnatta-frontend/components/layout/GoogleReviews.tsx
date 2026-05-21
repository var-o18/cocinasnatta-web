"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Natta+Cocinas/@38.1042343,-0.8588461,17z/data=!4m8!3m7!1s0xd63a382c075dbbb:0x474a2bb7090ef491!8m2!3d38.1042343!4d-0.8588461!9m1!1b1";

const reviews = [
  {
    id: 1,
    author: "Isabel Rodríguez Ramón",
    rating: 5,
    text: "Grandes artesanos. Pide un deseo, y Natta te lo concede.",
    date: "Hace 9 meses",
  },
  {
    id: 2,
    author: "Jeannette Ubilla",
    rating: 5,
    text: "Muy buen servicio y atendidos por sus dueños. Trabajan muy bien, estoy muy contenta con mi cocina.",
    date: "Hace 3 años",
  },
  {
    id: 3,
    author: "Maestro Samot",
    rating: 5,
    text: "Encantado de haber descubierto este sitio, por su trato y productos. Muy buenos precios y rápidos.",
    date: "Hace 5 años",
  },
];

function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= rating
              ? "fill-[#c99a6b] text-[#c99a6b]"
              : "fill-zinc-600 text-zinc-600"
          }
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prev = () => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <div className="flex h-full min-h-[320px] md:min-h-[500px] flex-col rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
            Lo que dicen nuestros clientes
          </h3>
          <p className="mt-2 text-xs text-zinc-500">Reseñas verificadas en Google</p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-zinc-800">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">4.6</span>
              <StarRow rating={5} size={12} />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">
              14 reseñas
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-center">
        <article
          key={review.id}
          className="animate-in fade-in duration-500 rounded-xl border border-white/10 bg-black/25 p-6 backdrop-blur-sm"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                {review.author}
              </h4>
              <p className="mt-1 text-[10px] text-zinc-500">{review.date}</p>
            </div>
            <StarRow rating={review.rating} />
          </div>
          <p className="text-sm leading-relaxed text-zinc-300 italic">
            &ldquo;{review.text}&rdquo;
          </p>
        </article>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ver reseña ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-[#c99a6b]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Reseña anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white hover:text-black"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente reseña"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white hover:text-black"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#c99a6b] py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#d4a373]"
      >
        Dejar reseña en Google
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
