import Image from "next/image";
import HeroBanner from "@/components/hero-banner-detailed";
import homeContent from "@/content/home.json";
import { WorkShowcase } from "@/components/WorkShowcase";
import worksData from "@/content/works.json";
import featuredWorksData from "@/content/featured-works.json";
import { FeaturedWorksCarousel } from "@/components/FeaturedWorksCarousel";

export default function Home() {
  const { heroBanner } = homeContent;

  return (
    <div>
      <HeroBanner
        imageUrl={heroBanner.imageUrl}
        title={heroBanner.title}
        subtitle={heroBanner.subtitle}
        buttonText={heroBanner.buttonText}
        buttonLink={heroBanner.buttonLink}
      />
      <div className="container mx-auto px-4 py-10">
        <FeaturedWorksCarousel works={featuredWorksData} />
      </div>
      {/* <div className="container mx-auto px-4 py-10">
        <WorkShowcase works={worksData} />
      </div> */}

      {/* Add more sections here */}
    </div>
  );
}
