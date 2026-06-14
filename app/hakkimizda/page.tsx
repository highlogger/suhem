import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Naz Kara Beauty'nin hikayesi, misyonu ve vizyonu. Profesyonel ekibimiz ve premium güzellik anlayışımız hakkında bilgi edinin.",
};

import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionVision from "@/components/about/MissionVision";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/home/CTABanner";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionVision />
      <TeamSection />
      <CTABanner />
    </>
  );
}
