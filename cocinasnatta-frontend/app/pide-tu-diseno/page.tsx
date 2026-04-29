import React from "react";
import Footer from "@/components/layout/Footer";

export default function PideTuDisenoPage() {
  return (
    <div className="pt-32 min-h-screen bg-white">
      <section className="container mx-auto px-4 md:px-12 py-20">
        <h1 className="text-5xl font-bold uppercase tracking-widest text-zinc-900">Pide tu diseño</h1>
      </section>
      <Footer isFloating={false} />
    </div>
  );
}
