import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | Naz Kara Beauty",
    default: "Naz Kara Beauty — Premium Güzellik & Bakım Merkezi",
  },
  description:
    "Naz Kara Beauty, cilt bakımı, lazer epilasyon, kalıcı makyaj, kirpik tasarımı ve daha fazlasını sunan premium bir güzellik ve bakım merkezi.",
  keywords: [
    "güzellik salonu",
    "cilt bakımı",
    "lazer epilasyon",
    "kirpik uzatma",
    "kalıcı makyaj",
    "hydra facial",
    "Naz Kara Beauty",
  ],
  openGraph: {
    title: "Naz Kara Beauty — Premium Güzellik & Bakım Merkezi",
    description:
      "Profesyonel güzellik hizmetleri ile lüks bir bakım deneyimi yaşayın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-black text-white">
        <LoadingScreen />
        <Navbar />
        <PageTransitionWrapper>
          <main>{children}</main>
        </PageTransitionWrapper>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
