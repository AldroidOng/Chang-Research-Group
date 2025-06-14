// components/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroBanner({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: HeroBannerProps) {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background image */}
      <Image
        src={imageUrl}
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Green overlay */}
      {/*  */}
      <div className="absolute inset-0 bg-neutral-700  opacity-70" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="mt-6 bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-300 transition"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
