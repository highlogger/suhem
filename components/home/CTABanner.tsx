"use client";

import SectionReveal from "@/components/SectionReveal";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section id="cta-banner" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="CTA banner background"
          fill
          className="object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        {/* Gold glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Decorative border lines */}
      <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <SectionReveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold/60" />
            <span className="text-gold text-[11px] tracking-[0.5em] uppercase font-sans">
              Sizin için buradayız
            </span>
            <div className="h-px w-16 bg-gold/60" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-light text-white tracking-wide leading-snug mb-6">
            Güzelliğiniz İçin
            <br />
            <span className="gradient-gold-text italic gold-glow-text">
              İlk Adımı Atın
            </span>
          </h2>

          <p className="text-white/55 text-lg font-light leading-relaxed max-w-xl mx-auto mb-12">
            Profesyonel ekibimiz sizi bekliyor. WhatsApp üzerinden kolayca randevu alın,
            güzellik yolculuğunuza başlayın.
          </p>

          <motion.a
            href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="btn-gold inline-flex items-center gap-3 px-10 py-5 text-sm tracking-widest uppercase rounded-full"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp size={20} />
            WhatsApp ile Randevu Al
          </motion.a>

          {/* Reassurance */}
          <p className="text-white/30 text-xs tracking-widest uppercase mt-6">
            Ücretsiz danışmanlık · Hızlı yanıt · Profesyonel hizmet
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
