import Image from "next/image";
import HeroBanner from "@/components/hero-banner-detailed";
import homeContent from "@/content/home.json";
import { WorkShowcase } from "@/components/WorkShowcase";
import worksData from "@/content/works.json";
import featuredWorksData from "@/content/featured-works.json";
import { FeaturedWorksCarousel } from "@/components/FeaturedWorksCarousel";
import HeroBannerTitle from "@/components/hero-banner-left-align";
import Breadcrumbs from "@/components/breadcrums";
import Card from "@/components/Card";

export default function Home() {
  const { heroBanner } = homeContent;

  return (
    <div>
      <main>
        <section className="py-10 px-4 max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <Card
              title="Infrastructure"
              imageUrl="/images/research/infrastructure.jpeg"
              href="/research/infrastructure"
              overlayColor="bg-green-700/40"
            />
            <Card
              title="Collaborators"
              imageUrl="/images/research/collaborators.jpg"
              href="/research/collaborators"
              overlayColor="bg-blue-700/40"
            />
          </div>
        </section>
      </main>

      {/* Add more sections here */}
    </div>
  );
}
