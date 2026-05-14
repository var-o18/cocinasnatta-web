import React from "react";
import PideTuDiseno from "@/components/sections/PideTuDiseño";

export default function PideTuDisenoPage() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-[#1A1A1A]">
      <PideTuDiseno />
      <div className="p-5 text-center bg-[#2b2b28]">
        <p className="text-neutral-400 text-[9px] tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} Natta Cocinas | Excelencia en cada detalle
        </p>
      </div>
    </div>
  );
}
