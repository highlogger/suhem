"use client";

import SectionReveal from "@/components/SectionReveal";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";

const hours = [
  { day: "Pazartesi – Cuma", time: "09:00 – 20:00" },
  { day: "Cumartesi", time: "09:00 – 20:00" },
  { day: "Pazar", time: "10:00 – 18:00" },
];

export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-16">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Bilgilerimiz
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Bize Nasıl Ulaşırsınız?
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <SectionReveal delay={0}>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-info-whatsapp"
              className="glass-card premium-card rounded-2xl p-8 h-full flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-5 group-hover:bg-[#25D366]/20 transition-all duration-300">
                <FaWhatsapp size={28} />
              </div>
              <h3 className="font-serif text-xl font-light text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-white/40 text-sm font-light mb-4">
                Randevu & Bilgi için
              </p>
              <p className="text-gold text-sm font-medium">+90 5XX XXX XX XX</p>
            </a>
          </SectionReveal>

          {/* Instagram */}
          <SectionReveal delay={0.1}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-info-instagram"
              className="glass-card premium-card rounded-2xl p-8 h-full flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5 group-hover:bg-pink-500/20 transition-all duration-300">
                <FaInstagram size={28} />
              </div>
              <h3 className="font-serif text-xl font-light text-white mb-2">
                Instagram
              </h3>
              <p className="text-white/40 text-sm font-light mb-4">
                Bizi takip edin
              </p>
              <p className="text-gold text-sm font-medium">@nazkarabeauty</p>
            </a>
          </SectionReveal>

          {/* Location */}
          <SectionReveal delay={0.2}>
            <div className="glass-card premium-card rounded-2xl p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="font-serif text-xl font-light text-white mb-2">
                Adres
              </h3>
              <p className="text-white/40 text-sm font-light mb-4">
                Bizi ziyaret edin
              </p>
              <p className="text-white/70 text-sm">İstanbul, Türkiye</p>
            </div>
          </SectionReveal>

          {/* Hours */}
          <SectionReveal delay={0.3}>
            <div className="glass-card premium-card rounded-2xl p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
                <FaClock size={24} />
              </div>
              <h3 className="font-serif text-xl font-light text-white mb-4">
                Çalışma Saatleri
              </h3>
              <div className="space-y-3 w-full">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center text-sm border-b border-gold/10 pb-2 last:border-0"
                  >
                    <span className="text-white/40 font-light text-xs">{day}</span>
                    <span className="text-gold font-medium text-xs">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
