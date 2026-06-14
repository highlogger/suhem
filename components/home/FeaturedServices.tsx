"use client";

import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import {
  GiLotus,
  GiDiamondRing,
  GiComb,
  GiNails,
} from "react-icons/gi";
import { FaSpa, FaMagic, FaLeaf, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaSpa size={28} />,
    title: "Cilt Bakımı",
    desc: "Derinin ihtiyacına özel kişiselleştirilmiş cilt bakım protokolleri.",
  },
  {
    icon: <GiLotus size={28} />,
    title: "Hydra Facial",
    desc: "Derin temizlik, nem ve ışıltı için en yeni hydra facial teknolojisi.",
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Lazer Epilasyon",
    desc: "Kalıcı sonuçlar için en gelişmiş lazer teknolojisi ile epilasyon.",
  },
  {
    icon: <FaEye size={28} />,
    title: "Kirpik Uzatma",
    desc: "Doğal ve etkileyici görünüm için profesyonel kirpik tasarımı.",
  },
  {
    icon: <GiDiamondRing size={28} />,
    title: "Kalıcı Makyaj",
    desc: "Uzun süre kalıcı ve mükemmel görünüm için profesyonel teknikler.",
  },
  {
    icon: <GiNails size={28} />,
    title: "Tırnak Bakımı",
    desc: "El ve ayak tırnaklarınız için premium bakım ve tasarım hizmetleri.",
  },
];

export default function FeaturedServices() {
  return (
    <section id="featured-services" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <SectionReveal className="text-center mb-20">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Öne Çıkan
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Hizmetlerimiz
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }, i) => (
            <SectionReveal key={title} delay={i * 0.1}>
              <div className="glass-card premium-card rounded-2xl p-8 h-full flex flex-col group cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  {icon}
                </div>
                <h3 className="font-serif text-xl font-light text-white tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light flex-1">
                  {desc}
                </p>
                <Link
                  href="/hizmetler"
                  className="mt-6 text-gold text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-2 group/link"
                >
                  <span>Detaylı İncele</span>
                  <span className="h-px w-0 bg-gold group-hover/link:w-8 transition-all duration-300" />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* View all */}
        <SectionReveal className="text-center mt-14">
          <Link
            href="/hizmetler"
            id="all-services-link"
            className="btn-ghost px-10 py-4 text-sm tracking-widest uppercase rounded-full inline-block"
          >
            Tüm Hizmetler
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
