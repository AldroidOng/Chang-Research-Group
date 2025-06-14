// components/ResearchCards.tsx
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  imageUrl: string;
  href: string;
  overlayColor: string;
}

const Card = ({ title, imageUrl, href, overlayColor }: CardProps) => (
  <Link
    href={href}
    className="group block overflow-hidden rounded-lg shadow-lg"
  >
    <div className="relative w-full h-64">
      <Image src={imageUrl} alt={title} fill className="object-cover" />
      <div
        className={`absolute inset-0 ${overlayColor} transition-opacity group-hover:opacity-60`}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h3 className="text-white text-xl font-semibold text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  </Link>
);

export default Card;
