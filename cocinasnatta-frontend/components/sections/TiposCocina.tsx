"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function TiposCocina() {
  return (
    <section className="py-16 bg-[#2b2b28] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Tipos de Cocinas
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      </div>
    </section>
  );
}