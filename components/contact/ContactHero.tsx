"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
          alt="Naz Kara Beauty - İletişim"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        {/* Gold orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/8 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Bize Ulaşın
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white tracking-wide mb-4">
            İletişim
          </h1>
          <p className="text-white/55 text-lg font-light mb-10 max-w-lg mx-auto">
            Randevu almak veya bilgi almak için WhatsApp üzerinden bize ulaşın.
            Hızlı yanıt garantisi.
          </p>
          <motion.a
            href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            id="contact-hero-whatsapp"
            className="btn-gold inline-flex items-center gap-3 px-10 py-5 text-sm tracking-widest uppercase rounded-full"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FaWhatsapp size={22} />
            WhatsApp ile Yaz
          </motion.a>
          <div className="gold-divider mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
