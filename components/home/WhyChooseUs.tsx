"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { FaShieldAlt, FaStar, FaHeart, FaLeaf } from "react-icons/fa";

const pillars = [
  {
    icon: <FaStar size={22} />,
    title: "Premium Deneyim",
    desc: "Her müşterimize VIP muamelesi sunuyor, konforlu ve lüks bir ortamda hizmet veriyoruz.",
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: "Hijyen & Güvenlik",
    desc: "En yüksek hijyen standartlarında, steril malzeme ve ekipmanlarla çalışıyoruz.",
  },
  {
    icon: <FaHeart size={22} />,
    title: "Kişiselleştirilmiş Bakım",
    desc: "Her cilt tipine ve ihtiyaca özel protokollerle size en uygun çözümü sunuyoruz.",
  },
  {
    icon: <FaLeaf size={22} />,
    title: "Doğal & Güvenli",
    desc: "Cilde zarar vermeyen, sertifikalı ürünler ve kanıtlanmış teknikler kullanıyoruz.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
          alt="Naz Kara Beauty neden bizi seçmeli"
          fill
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <SectionReveal direction="left">
              <div className="ornament mb-6">
                <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
                  Neden Biz?
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide leading-snug mb-6">
                Güzelliğin Tam
                <br />
                <span className="gradient-gold-text italic">Tanımı</span>
              </h2>
              <p className="text-white/55 font-light text-lg leading-relaxed mb-10">
                Naz Kara Beauty olarak, her müşterimize lüks ve kişiselleştirilmiş
                bir deneyim sunmayı taahhüt ediyoruz. Deneyimli uzmanlarımız ve son
                teknoloji ekipmanlarımızla sizi en iyi şekilde karşılamaya hazırız.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {pillars.map(({ icon, title, desc }, i) => (
                  <SectionReveal key={title} delay={i * 0.12}>
                    <div className="group">
                      <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 transition-all duration-300">
                        {icon}
                      </div>
                      <h3 className="font-serif text-lg font-light text-white mb-2 tracking-wide">
                        {title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        {desc}
                      </p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: image collage */}
          <SectionReveal direction="right">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] gold-border">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85"
                  alt="Lüks güzellik salonu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="relative rounded-2xl overflow-hidden aspect-square gold-border">
                  <Image
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=85"
                    alt="Profesyonel cilt bakımı"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square gold-border">
                  <Image
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=85"
                    alt="Lüks güzellik hizmetleri"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Gold badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 gold-glow">
                <div className="font-serif text-3xl font-light gradient-gold-text">8+</div>
                <div className="text-white/50 text-[11px] tracking-widest uppercase">
                  Yıl Deneyim
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
