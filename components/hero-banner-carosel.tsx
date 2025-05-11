// app/components/HeroBanner.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/gallium-nitride.png",
  "/images/multi-quantum-wells.png",
  // "/images/banner3.jpg",
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <Image
        src={images[current]}
        alt={`Banner ${current + 1}`}
        layout="fill"
        objectFit="cover"
        priority
      />
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
