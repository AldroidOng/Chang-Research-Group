import HeroBanner from "@components/hero-banner-detailed";
import homeContent from "@data/home.json";
// import featuredWorksData from "@data/featured-works.json";
import { FeaturedWorksCarousel } from "@components/FeaturedWorksCarousel";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function Home() {
  const { heroBanner, selectePublication, featuredWorks } = homeContent;

  return (
    <div>
      <HeroBanner
        imageUrl={heroBanner.imageUrl}
        title={heroBanner.title}
        subtitle={heroBanner.subtitle}
        // buttonText={heroBanner.buttonText}
        // buttonLink={heroBanner.buttonLink}
      />
      <div className="space-y-8 mt-10">
        <div className="container mx-auto px-4 py- space-y-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-3">
              <FeaturedWorksCarousel works={featuredWorks} />
            </div>
            <div className="flex-1">
              <div className="bg-gray-400 rounded-md py-3 max-auto mx-auto">
                <div className="bg-gray-100 w-auto py-2 h-max relative z-0">
                  {/* <section className="bg-gray-100 rounded-md p-6 max-w-xl mx-auto flex-1"> */}
                  <h2 className="text-2xl font-bold mb-4 px-2">
                    Selected Publications
                  </h2>
                  <ul className="px-4 list-disc list-inside space-y-4 text-base md:text-lg leading-relaxed">
                    {selectePublication.map((pub, index) => (
                      <li key={index}>
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#213f8d] hover:underline hover:text-[#4866c9] transition-colors duration-200"
                        >
                          {pub.title}
                        </a>
                        .{" "}
                        {/* <span className="text-gray-600">
                      {pub.journal}, {pub.year}.
                    </span> */}
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-6 flex">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-zinc-300 text-black hover:bg-zinc-200"
                      asChild
                    >
                      <Link href="/publication">View All</Link>
                    </Button>
                  </div>

                  {/* </section> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
