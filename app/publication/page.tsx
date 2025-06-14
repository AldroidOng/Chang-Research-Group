"use client";

import { useState } from "react";
import { publications } from "@data/publications";

interface Publication {
  authors: string;
  title: string;
  journal?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  year: number;
}

const publicationsByYear = publications.reduce((acc, pub) => {
  if (!acc[pub.year]) acc[pub.year] = [];
  acc[pub.year].push(pub);
  return acc;
}, {} as Record<number, Publication[]>);

const sortedYears = Object.keys(publicationsByYear)
  .map(Number)
  .sort((a, b) => b - a); // descending

export default function PublicationsPage() {
  const [openYears, setOpenYears] = useState<Record<number, boolean>>(
    Object.fromEntries(sortedYears.map((y) => [y, true]))
  );

  const toggleYear = (year: number) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 ">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      {sortedYears.map((year) => (
        <section
          key={year}
          className="border rounded-xl shadow-sm bg-white overflow-hidden"
        >
          <button
            onClick={() => toggleYear(year)}
            className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 text-left"
          >
            <h2 className="text-xl font-semibold text-gray-800">{year}</h2>
            <span className="text-lg text-gray-500">
              {openYears[year] ? "−" : "+"}
            </span>
          </button>

          {openYears[year] && (
            <ul className="px-6 py-4 space-y-4">
              {publicationsByYear[year].map((pub, i) => (
                <li key={i}>
                  <p className="text-gray-700">
                    <strong>{pub.authors}</strong>, <em>{pub.title}</em>,{" "}
                    {pub.journal && <>{pub.journal}</>}
                    {pub.volume && <>, vol. {pub.volume}</>}
                    {pub.pages && <>, pp. {pub.pages}</>}
                    {pub.year && (
                      <>
                        {" ("}
                        {pub.year}
                        {")"}.
                      </>
                    )}
                    {pub.doi && (
                      <>
                        {" DOI: "}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          https://doi.org/{pub.doi}
                        </a>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
