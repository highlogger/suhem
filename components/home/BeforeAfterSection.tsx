"use client";

import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const beforeAfterPairs = [
  {
    label: "Cilt Bakımı",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80",
    after: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&q=80",
  },
  {
    label: "Kirpik Uzatma",
    before: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=700&q=80",
    after: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=700&q=80",
  },
  {
    label: "Kaş Tasarımı",
    before: "https://images.unsplash.com/photo-1514846226882-9b5dce6a5578?w=700&q=80",
    after: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=700&q=80",
  },
];

function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, x)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, x)));
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none"
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After (bottom layer, full width) */}
      <Image src={after} alt={`${label} sonrası`} fill className="object-cover" />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative w-full h-full" style={{ width: `${100 / (position / 100)}%` }}>
          <Image src={before} alt={`${label} öncesi`} fill className="object-cover" />
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold gold-glow"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold border-2 border-white flex items-center justify-center shadow-xl cursor-col-resize">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8L1 4M1 8L5 12" stroke="#0f0f0f" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M11 8L15 4M15 8L11 12" stroke="#0f0f0f" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
        Öncesi
      </div>
      <div className="absolute bottom-4 right-4 bg-gold text-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold">
        Sonrası
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="before-after" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-16">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Dönüşümler
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Öncesi & Sonrası
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="text-white/45 mt-6 max-w-lg mx-auto font-light">
            Kaydırarak öncesi ve sonrasını karşılaştırın. Her dönüşüm, ustalığımızın kanıtıdır.
          </p>
        </SectionReveal>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-10">
          {beforeAfterPairs.map(({ label }, i) => (
            <button
              key={label}
              onClick={() => setActive(i)}
              className={`px-5 py-2 text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-gold text-black font-semibold"
                  : "border border-gold/30 text-gold/60 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <BeforeAfterSlider
              before={beforeAfterPairs[active].before}
              after={beforeAfterPairs[active].after}
              label={beforeAfterPairs[active].label}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
