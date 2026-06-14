import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Naz Kara Beauty çalışmalarını keşfedin. Cilt bakımı, kirpik, kaş, tırnak ve daha fazlası — öncesi ve sonrası fotoğraflar.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <CTABanner />
    </>
  );
}
