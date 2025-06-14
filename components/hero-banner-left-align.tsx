// components/HeroBanner.tsx
import Image from "next/image";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

export default function HeroBannerTitle({
  imageUrl,
  title,
  subtitle,
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-700 opacity-70" />

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center sm:justify-start h-full px-4 sm:px-40 text-center sm:text-left text-white">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl font-light max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
