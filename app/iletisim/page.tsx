import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Naz Kara Beauty ile iletişime geçin. WhatsApp üzerinden kolayca randevu alın, sorularınızı iletin.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactFAQ />
    </>
  );
}
