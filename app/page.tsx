import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import Testimonials from "@/components/home/Testimonials";
import InstagramSection from "@/components/home/InstagramSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Naz Kara Beauty — Cilt bakımı, lazer epilasyon, kalıcı makyaj ve daha fazlası. Premium güzellik hizmetleri ile kendinizi özel hissedin.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <BeforeAfterSection />
      <Testimonials />
      <InstagramSection />
      <CTABanner />
    </>
  );
}
