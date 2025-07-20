// components/FeaturedWorksCarousel.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedWork {
  title: string;
  imageUrl: string;
}

interface Props {
  works: FeaturedWork[];
}

export const FeaturedWorksCarousel = ({ works }: Props) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  return (
    // 
    <div className="mx-auto">
      <h2 className="text-3xl font-bold mb-4">Featured Works</h2>

      <div className="relative bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-center items-center overflow-hidden rounded-md">
          <Image
            src={works[current].imageUrl}
            alt={works[current].title}
            width={800}
            height={350}
            className="object-contain w-full h-auto max-h-[350px]"
          />
        </div>

        {/* Title BELOW the image */}
        <div className="mt-4 text-center">
          <p className="text-lg font-medium">{works[current].title}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
    // </div>
  );
};

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {featured.map((work) => (
//       <WorkCard key={work.id} {...work} isFeatured />
//     ))}
//   </div>
