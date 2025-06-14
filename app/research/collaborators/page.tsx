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

  interface CollaboratorsItem {
    title: string;
    imageUrl: string;
  }
  const collaborators: CollaboratorsItem[] = [
    {
      title: "University Malaya, Malaysia",
      imageUrl: "/images/research/collaborators/University Malaya.png",
    },
    {
      title: "National University of Malaysia, Malaysia",
      imageUrl:
        "/images/research/collaborators/National University of Malaysia.png",
    },
    {
      title: "Universiti Putra Malaysia, Malaysia",
      imageUrl: "/images/research/collaborators/Universiti Putra Malaysia.png",
    },
    {
      title: "Universiti Sains Malaysia, Malaysia",
      imageUrl: "/images/research/collaborators/Universiti Sains Malaysia.png",
    },
    {
      title: "Universiti Tunku Abdul Rahman (UTAR), Malaysia",
      imageUrl:
        "/images/research/collaborators/Universiti Tunku Abdul Rahman (UTAR).png",
    },
    {
      title: "Institute of Microengineering & Nanoelectronics, UKM, Malaysia",
      imageUrl:
        "/images/research/collaborators/Institute of Microengineering Nanoelectronics.png",
    },
    {
      title: "Universiti Putra Malaysia, Malaysia",
      imageUrl:
        "/images/research/collaborators/CREST Universiti Putra Malaysia.png",
    },
    {
      title: "OSRAM Opto Semiconductor",
      imageUrl: "/images/research/collaborators/OSRAM Opto Semiconductor.png",
    },
    {
      title: "Fu Jen Catholic University, Taiwan",
      imageUrl: "/images/research/collaborators/Fu Jen Catholic University.png",
    },
    {
      title: "Ming Chi University of Technology, Taiwan",
      imageUrl:
        "/images/research/collaborators/Ming Chi University of Technology.png",
    },
    {
      title: "National Cheng Kung University, Taiwan",
      imageUrl:
        "/images/research/collaborators/National Cheng Kung University.png",
    },
    {
      title: "National Chiao Tung University, Taiwan",
      imageUrl:
        "/images/research/collaborators/National Chiao Tung University.png",
    },
    {
      title: "National Chung Hsing University, Taiwan",
      imageUrl:
        "/images/research/collaborators/National Chung Hsing University.png",
    },
    {
      title: "Academia Sinica, Taiwan",
      imageUrl: "/images/research/collaborators/Academia Sinica.png",
    },
    {
      title: "National Synchrotron Radiation Research Center, Taiwan",
      imageUrl:
        "/images/research/collaborators/National Synchrotron Radiation Research Center.png",
    },
    {
      title: "University of San Carlos, Philippines",
      imageUrl: "/images/research/collaborators/University of San Carlos.png",
    },
    {
      title: "University of Science and Technology Beijing, PRC",
      imageUrl:
        "/images/research/collaborators/University of Science and Technology Beijing.png",
    },
    {
      title: "University of Science and Technology of China, PRC",
      imageUrl:
        "/images/research/collaborators/University of Science and Technology of China.png",
    },
    {
      title: "Southern University of Science and Technology, PRC",
      imageUrl:
        "/images/research/collaborators/Southern University of Science and Technology.png",
    },
    {
      title: "University of California, Santa Barbara, USA",
      imageUrl: "/images/research/collaborators/University of California.png",
    },
    {
      title: "SSLEEC, University of California, Santa Barbara, USA",
      imageUrl: "/images/research/collaborators/SSLEEC.png",
    },
    {
      title: "University of Warwick, United Kingdom",
      imageUrl: "/images/research/collaborators/University of Warwick.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Global Collaborators
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {collaborators.map((item) => (
          <div
            key={item.imageUrl}
            className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-80">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="bg-white p-4">
              <h3 className="text-gray-900 font-semibold text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
