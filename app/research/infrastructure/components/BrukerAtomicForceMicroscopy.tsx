// components/FeaturedResearchItem.tsx
import Image from "next/image";
import Link from "next/link";

export default function BrukerAtomicForceMicroscopy() {
  return (
    <>
      {/* Featured apparatus */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Bruker Atomic Force Microscopy (Multimode 8)
        </h2>
        {/* Optional Intro */}
        <p className="text-lg text-gray-700">
          For various AFM mode: KPFM, EFM, PFM, C-AFM, PFQNM etc, equipped with
          temperature and potentiostatic controller
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="relative w-full h-120">
            <Image
              src="/images/research/infrastructure/Bruker Atomic Force Microscopy (Multimode 8) 1.jpg"
              alt="Bruker Atomic Force Microscopy (Multimode 8)"
              fill
              // className="object-cover rounded-lg"
              className="object-contain p-4"
            />
          </div>
          <div className="relative w-full h-120">
            <Image
              src="/images/research/infrastructure/Bruker Atomic Force Microscopy (Multimode 8) 2.png"
              alt="Bruker Atomic Force Microscopy (Multimode 8)"
              fill
              // className="object-cover rounded-lg"
              className="object-contain p-4"
            />
          </div>
        </div>
        <p className="text-lg text-gray-700">
          To learn more about our Nano-Analytical Platform (NAP) -{" "}
          <Link
            href="https://www.monash.edu.my/engineering/research/research-infrastructure/Nano-Analytical-Platform"
            className="text-blue-600 hover:underline font-medium"
          >
            click here to view more
          </Link>
          .
        </p>
      </section>
    </>
  );
}
