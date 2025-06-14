import { WorkCard } from "./WorkCard";

interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  isFeatured: boolean;
}

interface WorkShowcaseProps {
  works: Work[];
}

export function WorkShowcase({ works }: WorkShowcaseProps) {
  const recent = works
    .filter((w) => !w.isFeatured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="space-y-8 mt-10">
      {/* <div>
        <h2 className="text-2xl font-bold mb-4">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((work) => (
            <WorkCard key={work.id} {...work} isFeatured />
          ))}
        </div>
      </div> */}

      <div>
        <h2 className="text-2xl font-bold mb-4">Most Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
