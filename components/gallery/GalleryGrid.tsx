"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Lüks güzellik salonu",
    category: "Salon",
    aspect: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    alt: "Cilt bakımı uygulaması",
    category: "Cilt Bakımı",
    aspect: "normal",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80",
    alt: "Kirpik uzatma sonucu",
    category: "Kirpik",
    aspect: "normal",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Profesyonel cilt bakımı",
    category: "Cilt Bakımı",
    aspect: "tall",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "Tırnak tasarımı",
    category: "Tırnak",
    aspect: "normal",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Kaş tasarımı ve güzellik",
    category: "Kaş",
    aspect: "normal",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80",
    alt: "Makyaj çalışması",
    category: "Makyaj",
    aspect: "tall",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    alt: "Hydra facial tedavisi",
    category: "Cilt Bakımı",
    aspect: "normal",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    alt: "Sırt masajı uygulaması",
    category: "Masaj",
    aspect: "normal",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80",
    alt: "Pedikür uygulaması",
    category: "Pedikür",
    aspect: "normal",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    alt: "Güzellik uzmanı",
    category: "Ekip",
    aspect: "tall",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    alt: "Rahatlatıcı masaj",
    category: "Salon",
    aspect: "normal",
  },
];

const categories = ["Tümü", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tümü"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0));

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Filter tabs */}
        <SectionReveal className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`gallery-filter-${cat.toLowerCase().replace(/ /g, "-")}`}
              className={`px-5 py-2 text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-black font-bold"
                  : "border border-gold/30 text-gold/60 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </SectionReveal>

        {/* Masonry grid */}
        <div className="masonry-grid">
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="masonry-item"
              >
                <button
                  onClick={() => openLightbox(index)}
                  id={`gallery-item-${img.id}`}
                  className="relative w-full overflow-hidden rounded-2xl group block"
                  aria-label={`${img.alt} - büyüt`}
                >
                  <div
                    className={`relative ${
                      img.aspect === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                    } overflow-hidden`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                        <FaSearch size={16} className="text-black" />
                      </div>
                    </div>
                    {/* Category tag */}
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-gold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                      {img.category}
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Image */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={filtered[lightboxIndex].src}
                    alt={filtered[lightboxIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Caption */}
                <div className="text-center mt-4">
                  <p className="text-white/60 text-sm font-light">
                    {filtered[lightboxIndex].alt}
                  </p>
                  <p className="text-gold text-[11px] tracking-widest uppercase mt-1">
                    {filtered[lightboxIndex].category}
                  </p>
                </div>
              </motion.div>

              {/* Controls */}
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                id="lightbox-close"
                aria-label="Kapat"
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <FaTimes size={16} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                id="lightbox-prev"
                aria-label="Önceki"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold/30 hover:border-gold/50 transition-all"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                id="lightbox-next"
                aria-label="Sonraki"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold/30 hover:border-gold/50 transition-all"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
