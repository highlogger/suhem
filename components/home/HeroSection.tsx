"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=90"
          alt="Naz Kara Beauty - Premium güzellik salonu"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        {/* Gold vignette sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans font-medium">
            Premium Beauty & Care
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-wide mb-6"
        >
          Premium Güzellik
          <br />
          <span className="gradient-gold-text gold-glow-text italic font-light">
            & Bakım Deneyimi
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/65 text-lg md:text-xl font-light tracking-wide mb-12 max-w-xl mx-auto"
        >
          Profesyonel güzellik hizmetleri ile lüks bir bakım deneyimi yaşayın.
          Her anınız özel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/hizmetler"
            id="hero-services-btn"
            className="btn-gold px-8 py-4 text-sm tracking-widest uppercase rounded-full font-semibold"
          >
            Hizmetleri İncele
          </Link>
          <a
            href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="btn-ghost px-8 py-4 text-sm tracking-widest uppercase rounded-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp İletişim
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex items-center justify-center gap-10 mt-20"
        >
          {[
            { value: "5K+", label: "Mutlu Müşteri" },
            { value: "8+", label: "Yıl Deneyim" },
            { value: "11", label: "Hizmet" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-3xl font-light gradient-gold-text">
                {value}
              </div>
              <div className="text-white/40 text-[11px] tracking-widest uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase">
          Keşfet
        </span>
        <FaChevronDown className="text-gold/50" size={14} />
      </motion.div>
    </section>
  );
}
