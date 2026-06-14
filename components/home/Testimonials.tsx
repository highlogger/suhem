"use client";

import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayşe Kaya",
    role: "Düzenli Müşteri",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    text: "Naz Kara Beauty'de aldığım cilt bakımı hayatımı değiştirdi. Profesyonel yaklaşımları ve sıcak ortamı her seferinde geri dönmemi sağlıyor. Gerçekten premium bir deneyim!",
    rating: 5,
    service: "Cilt Bakımı",
  },
  {
    name: "Fatma Demir",
    role: "VIP Müşteri",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    text: "Kirpik uzatma konusunda birçok yere gittim ama Naz Kara'nın kalitesine ulaşamadım. Elleri gerçekten altın! Sonuç muhteşem ve doğal görünüyor.",
    rating: 5,
    service: "Kirpik Uzatma",
  },
  {
    name: "Zeynep Arslan",
    role: "Düzenli Müşteri",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80",
    text: "Kalıcı makyaj yaptırdım ve sonuçtan çok memnunum. Sabah uyandığımda makyajlı görünmek inanılmaz bir his. Herkese tavsiye ederim!",
    rating: 5,
    service: "Kalıcı Makyaj",
  },
  {
    name: "Elif Şahin",
    role: "Yeni Müşteri",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    text: "Hydra facial tedavisinden sonra cildim bambaşka bir his aldı. Pürüzsüz, parlak ve genç görünüyor. Kesinlikle tekrar geleceğim!",
    rating: 5,
    service: "Hydra Facial",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
        {/* Decorative gold orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-16">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Müşteri Görüşleri
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Memnuniyetiniz
            <br />
            <span className="gradient-gold-text italic">Önceliğimiz</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        {/* Testimonial carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card rounded-3xl p-10 md:p-14 text-center relative"
            >
              <FaQuoteLeft className="text-gold/20 absolute top-8 left-8" size={40} />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold" size={16} />
                ))}
              </div>

              {/* Text */}
              <p className="font-serif text-xl md:text-2xl font-light text-white/85 italic leading-relaxed mb-10 max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Service tag */}
              <div className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-[10px] tracking-widest uppercase mb-8">
                {testimonials[current].service}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/40">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium tracking-wide">
                    {testimonials[current].name}
                  </div>
                  <div className="text-gold/60 text-xs tracking-widest uppercase">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Önceki"
              className="w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 flex items-center justify-center"
            >
              <FaChevronLeft size={14} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Yorum ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-gold"
                      : "w-2 h-2 bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Sonraki"
              className="w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 flex items-center justify-center"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
