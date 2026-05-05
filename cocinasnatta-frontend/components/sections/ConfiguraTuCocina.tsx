"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ConfiguraTuCocina() {
    const router = useRouter();

    return (
        <section className="relative h-screen flex items-center">
            <Image src="/assets/configuraCocina.jpg" alt="Diseña tu cocina" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block bg-white/10 text-white text-sm px-4 py-1 rounded-full mb-6">
                            Diseño personalizado
                        </span>

                        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Diseña la cocina perfecta para ti
                        </h1>

                        <p className="text-gray-200 text-lg">
                            Sin límites, sin plantillas. Crea un espacio único que encaje contigo.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white/10 p-5 rounded-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                            <h3 className="text-white font-semibold text-lg mb-1">
                                Totalmente a medida
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Personaliza cada detalle según tu estilo y espacio.
                            </p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                            <h3 className="text-white font-semibold text-lg mb-1">
                                Visualiza antes de decidir
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Mira cómo quedará tu cocina antes de hacerla realidad.
                            </p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                            <h3 className="text-white font-semibold text-lg mb-1">
                                Materiales premium
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Calidad y durabilidad en cada componente.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => router.push("")}
                        className="group relative bg-white text-black px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Crear mi cocina
                            <ArrowRight size={20} className="mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}