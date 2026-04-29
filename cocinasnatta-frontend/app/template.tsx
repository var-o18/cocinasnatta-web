"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="h-full w-full">
      {/* Barra de carga sutil al navegar */}
      <div className="nav-loader" />
      
      {/* Contenedor de la página con transición cinemática y altura completa */}
      <div className="animate-page h-full w-full">
        {children}
      </div>
    </div>
  );
}
