"use client";

import SectionReveal from "@/components/SectionReveal";
import { FaEye, FaBullseye, FaHeart } from "react-icons/fa";

const cards = [
  {
    icon: <FaBullseye size={24} />,
    title: "Misyonumuz",
    desc: "Her müşterimizin doğal güzelliğini ön plana çıkararak özgüvenini artırmak ve lüks bir bakım deneyimi sunmak. En yüksek hijyen ve kalite standartlarıyla profesyonel hizmet vermek.",
  },
  {
    icon: <FaEye size={24} />,
    title: "Vizyonumuz",
    desc: "Türkiye'nin en prestijli güzellik merkezlerinden biri olarak, sektörde standartları belirleyen, yenilikçi yaklaşımıyla öne çıkan bir marka olmak. Güzellik alanında sürekli gelişim.",
  },
  {
    icon: <FaHeart size={24} />,
    title: "Değerlerimiz",
    desc: "Güven, saygı, kalite ve kişisel ilgi. Her müşterimiz benzersizdir ve bireysel ihtiyaçlarına özel çözümler sunmak temel prensibimizdir.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-16">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Temel İlkelerimiz
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Misyon & Vizyon
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, desc }, i) => (
            <SectionReveal key={title} delay={i * 0.15}>
              <div className="glass-card premium-card rounded-3xl p-10 h-full text-center group">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  {icon}
                </div>
                <h3 className="font-serif text-2xl font-light text-white tracking-wide mb-4">
                  {title}
                </h3>
                <div className="w-8 h-px bg-gold/40 mx-auto mb-6" />
                <p className="text-white/50 font-light leading-relaxed text-sm">{desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
