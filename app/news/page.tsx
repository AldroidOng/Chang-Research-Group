// app/news/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import newsData from "@data/news.json";

const { gatherings, studentAwards } = newsData;

export default function NewsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // ⏱ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gatherings.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 ">
      {/* <div className="max-w-7xl mx-auto px-4 py-12 space-y-16"> */}
      {/* Student Gathering Carousel */}
      <section>
        <h1 className="text-3xl font-bold mb-8">Student Gathering</h1>

        {/* <div className="flex justify-center items-center overflow-hidden rounded-md">
          <Image
            src={works[current].imageUrl}
            alt={works[current].title}
            width={800}
            height={350}
            className="object-contain w-full h-auto max-h-[350px]"
          />
        </div> */}

        {/* <h2 className="text-2xl font-semibold mb-4">Student Gathering</h2> */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {gatherings.map((gathering, idx) => (
              <div key={idx} className="min-w-full">
                {/* <div className="relative w-full h-80 rounded overflow-hidden"> */}
                <div className="relative w-full h-auto rounded overflow-hidden">
                  <Image
                    src={gathering.imageUrl}
                    alt={gathering.title}
                    // fill
                    width={2000}
                    height={2000}
                    className="object-contain w-full max-h-[500px]"
                  />
                </div>
                <p className="mt-2 text-center font-medium">
                  {gathering.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {gatherings.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === i ? "bg-blue-600" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Student Award Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 pb-4">Student Awards</h2>

        <div className="space-y-6">
          {studentAwards.map((award, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 border rounded-lg shadow bg-white"
            >
              <img
                src={award.imageUrl}
                alt={award.name}
                className="w-32 h-32 object-cover rounded-full border"
              />

              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold">{award.name}</h3>
                <p className="italic text-gray-600">{award.title}</p>
                <p className="mt-2 text-gray-800">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 pb-4">Opportunities</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
          <p className="text-gray-800 text-lg">
            <strong>PhD and Masters opportunities:</strong> Interested
            candidates, please email your full CV to{" "}
            <a
              href="mailto:weiseachang@nycu.edu.tw"
              className="text-blue-700 underline hover:text-blue-900"
            >
              weiseachang@nycu.edu.tw
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
