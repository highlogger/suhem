"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CampaignsHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=85"
          alt="Naz Kara Beauty - Kampanyalar"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Özel Fırsatlar
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white tracking-wide">
            Kampanyalar
          </h1>
          <p className="text-white/50 text-lg font-light mt-4 max-w-lg mx-auto">
            Sınırlı süreli özel fırsatlarımızı kaçırmayın
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
