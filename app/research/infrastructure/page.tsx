// app/research-gallery/page.tsx
import Image from "next/image";
import Link from "next/link";
import BrukerAtomicForceMicroscopy from "./components/BrukerAtomicForceMicroscopy";

interface ResearchItem {
  title: string;
  imageUrl: string;
  href: string;
}

const researchItems: ResearchItem[] = [
  {
    title: "10mW 405nm Monochromatic Laser",
    imageUrl:
      "/images/research/infrastructure/10mW 405nm Monochromatic Laser.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "20mW 532nm Monochromatic Laser",
    imageUrl:
      "/images/research/infrastructure/20mW 532nm Monochromatic Laser.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Electrolytic Potentiometry Setup",
    imageUrl:
      "/images/research/infrastructure/Electrolytic Potentiometry Setup.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Four Point Probe",
    imageUrl: "/images/research/infrastructure/Four Point Probe.jpeg",
    href: "/research/infrastructure",
  },
  {
    title: "Glichn Spin Coater",
    imageUrl: "/images/research/infrastructure/Glichn Spin Coater.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Glove Box with Environmental Controller",
    imageUrl:
      "/images/research/infrastructure/Glove Box with Environmental Controller.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Keithley Sourcemeter",
    imageUrl: "/images/research/infrastructure/Keithley Sourcemeter.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Nabertherm Furnace",
    imageUrl: "/images/research/infrastructure/Nabertherm Furnace.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Ossila UV Ozone Cleaner",
    imageUrl: "/images/research/infrastructure/Ossila UV Ozone Cleaner.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "PEC Gamry Potentiostat",
    imageUrl: "/images/research/infrastructure/PEC Gamry Potentiostat.png",
    href: "/research/infrastructure",
  },
  {
    title: "Pulsed laser Deposition",
    imageUrl: "/images/research/infrastructure/Pulsed laser Deposition.jpeg",
    href: "/research/infrastructure",
  },
  {
    title: "PV Testing",
    imageUrl: "/images/research/infrastructure/PV Testing.png",
    href: "/research/infrastructure",
  },
  {
    title: "Radiant Ferroelectric Tester",
    imageUrl:
      "/images/research/infrastructure/Radiant Ferroelectric Tester.png",
    href: "/research/infrastructure",
  },
  {
    title: "Stanford HV",
    imageUrl: "/images/research/infrastructure/Stanford HV.jpg",
    href: "/research/infrastructure",
  },
  {
    title: "Toledo pH Meter",
    imageUrl: "/images/research/infrastructure/Toledo pH Meter.jpg",
    href: "/research/infrastructure",
  },
];
// // Choose featured item
// const featuredItem = researchItems.find((item) =>
//   item.title.includes("Bruker Atomic Force Microscopy")
// );
// const otherItems = researchItems.filter((item) => item !== featuredItem);

export default function ResearchInfrastructurePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      <BrukerAtomicForceMicroscopy />
      {/* Other apparatus */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Other Equipment
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {researchItems.map((item) => (
            <div
              key={item.href + item.title}
              // href={item.href}
              className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* <div> */}
              <div className="relative w-full h-80">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  // className="object-cover transition-transform group-hover:scale-105"
                  className="object-contain p-4"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="text-gray-900 font-semibold text-center">
                  {item.title}
                </h3>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
