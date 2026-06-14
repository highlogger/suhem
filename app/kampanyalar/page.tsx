import type { Metadata } from "next";
import CampaignsHero from "@/components/campaigns/CampaignsHero";
import CampaignsGrid from "@/components/campaigns/CampaignsGrid";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Kampanyalar",
  description:
    "Naz Kara Beauty özel kampanyaları ve fırsatları. Pedikür, protez tırnak, saç bakımı ve masaj kampanyalarını kaçırmayın!",
};

export default function CampaignsPage() {
  return (
    <>
      <CampaignsHero />
      <CampaignsGrid />
      <CTABanner />
    </>
  );
}
