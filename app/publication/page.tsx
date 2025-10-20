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

const currentYear = new Date().getFullYear();

// Group publications by year
const publicationsByYear = publications.reduce((acc, pub) => {
  if (!acc[pub.year]) acc[pub.year] = [];
  acc[pub.year].push(pub);
  return acc;
}, {} as Record<number, Publication[]>);

// Split into recent and earlier groups
const recentYears = Object.keys(publicationsByYear)
  .map(Number)
  .filter((year) => year >= currentYear - 4) // last 5 years including current
  .sort((a, b) => b - a);

const earlierPublications = Object.entries(publicationsByYear)
  .filter(([year]) => Number(year) < currentYear - 4)
  .flatMap(([_, pubs]) => pubs)
  .sort((a, b) => b.year - a.year); // optional: sort by year desc inside "Earlier"

export default function PublicationsPage() {
  // Manage collapsible sections (including “Earlier”)
  const [openYears, setOpenYears] = useState<Record<string, boolean>>(
    Object.fromEntries([
      ...recentYears.map((y) => [String(y), true]),
      ["Earlier", true],
    ])
  );

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      {/* Recent years */}
      {recentYears.map((year) => (
        <section
          key={year}
          className="border rounded-xl shadow-sm bg-white overflow-hidden"
        >
          <button
            onClick={() => toggleYear(String(year))}
            className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 text-left"
          >
            <h2 className="text-xl font-semibold text-gray-800">{year}</h2>
            <span className="text-lg text-gray-500">
              {openYears[String(year)] ? "−" : "+"}
            </span>
          </button>

          {openYears[String(year)] && (
            <ul className="px-6 py-4 space-y-4">
              {publicationsByYear[year].map((pub, i) => (
                <li key={i}>
                  <p className="text-gray-700">
                    <strong>{pub.authors}</strong>, <em>{pub.title}</em>,{" "}
                    {pub.journal && <>{pub.journal}</>}
                    {pub.volume && <>, vol. {pub.volume}</>}
                    {pub.pages && <>, pp. {pub.pages}</>}
                    {" ("}
                    {pub.year}
                    {")"}
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

      {/* Earlier section */}
      {earlierPublications.length > 0 && (
        <section className="border rounded-xl shadow-sm bg-white overflow-hidden">
          <button
            onClick={() => toggleYear("Earlier")}
            className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 text-left"
          >
            <h2 className="text-xl font-semibold text-gray-800">Earlier</h2>
            <span className="text-lg text-gray-500">
              {openYears["Earlier"] ? "−" : "+"}
            </span>
          </button>

          {openYears["Earlier"] && (
            <ul className="px-6 py-4 space-y-4">
              {earlierPublications.map((pub, i) => (
                <li key={i}>
                  <p className="text-gray-700">
                    <strong>{pub.authors}</strong>, <em>{pub.title}</em>,{" "}
                    {pub.journal && <>{pub.journal}</>}
                    {pub.volume && <>, vol. {pub.volume}</>}
                    {pub.pages && <>, pp. {pub.pages}</>}
                    {" ("}
                    {pub.year}
                    {")"}
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
      )}
    </div>
  );
}
