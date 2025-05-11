import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  isFeatured?: boolean;
}

export function WorkCard({
  title,
  description,
  image,
  date,
  isFeatured,
}: WorkCardProps) {
  return (
    <div
      className={`rounded-xl shadow-md p-4 bg-white ${
        isFeatured ? "col-span-2" : ""
      }`}
    >
      <div className="relative h-48 w-full mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      {date && <p className="text-sm text-gray-500">{date}</p>}
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}
