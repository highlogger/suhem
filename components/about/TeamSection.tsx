"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Naz Kara",
    role: "Kurucu & Baş Uzman",
    specialty: "Cilt Bakımı · Kalıcı Makyaj",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85",
  },
  {
    name: "Selin Yılmaz",
    role: "Kirpik & Kaş Uzmanı",
    specialty: "Kirpik Uzatma · Kaş Tasarımı",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=85",
  },
  {
    name: "Merve Çelik",
    role: "Lazer & Cilt Uzmanı",
    specialty: "Lazer Epilasyon · Hydra Facial",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=85",
  },
  {
    name: "Büşra Aktaş",
    role: "Tırnak & Bakım Uzmanı",
    specialty: "Protez Tırnak · Pedikür",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=85",
  },
];

export default function TeamSection() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-16">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Ekibimiz
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Uzman Kadromuz
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, specialty, image }, i) => (
            <SectionReveal key={name} delay={i * 0.1}>
              <div className="group relative glass-card premium-card rounded-3xl overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  {/* Instagram hover icon */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Instagram`}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold/70 opacity-0 group-hover:opacity-100 hover:text-gold transition-all duration-300"
                  >
                    <FaInstagram size={14} />
                  </a>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-light text-white tracking-wide">
                    {name}
                  </h3>
                  <p className="text-gold text-xs tracking-widest uppercase mt-1 mb-2">
                    {role}
                  </p>
                  <p className="text-white/40 text-[11px] font-light">{specialty}</p>
                </div>

                {/* Gold bottom accent */}
                <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
