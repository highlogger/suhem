import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Cilt bakımı, hydra facial, lazer epilasyon, kirpik uzatma, kaş tasarımı, kalıcı makyaj ve daha fazlası. Tüm premium güzellik hizmetlerimizi keşfedin.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CTABanner />
    </>
  );
}
