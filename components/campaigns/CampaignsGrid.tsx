"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { FaWhatsapp, FaStar, FaGift } from "react-icons/fa";
import { motion } from "framer-motion";

const campaigns = [
  {
    id: "pedikur",
    title: "Pedikür",
    price: "599₺",
    originalPrice: "799₺",
    badge: "En Çok Satan",
    gift: null,
    desc: "Tam kapsamlı pedikür bakımı. Ayak banyosu, ölü deri temizleme, tırnak bakımı, masaj ve kalıcı oje dahil.",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80",
    tag: "pedikur-kampanya",
  },
  {
    id: "protez-tirnak",
    title: "Protez Tırnak",
    price: "750₺",
    originalPrice: "950₺",
    badge: "Fırsatı Kaçırma",
    gift: "1 Nail Art Hediye",
    desc: "Premium akrilik veya jel protez tırnak uygulaması. Seçtiğiniz desene göre 1 nail art tasarım hediye!",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    tag: "protez-tirnak-kampanya",
  },
  {
    id: "sac-bakimi",
    title: "Saç Bakımı",
    price: "2.000₺'den",
    originalPrice: null,
    badge: "Özel Fiyat",
    gift: null,
    desc: "Keratin, botoks veya ozon tedavileri dahil kapsamlı saç bakım paketi. Uzmanlarımız ihtiyacınıza özel protokol belirler.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    tag: "sac-bakimi-kampanya",
  },
  {
    id: "sirt-masaj",
    title: "Sırt Masajı & Sırt Bakımı",
    price: "1.500₺",
    originalPrice: "2.000₺",
    badge: "Lüks Paket",
    gift: null,
    desc: "60 dakika aromaterapi sırt masajı ve sırt bölgesi için özel cilt bakımı paketi. Stres atmak için mükemmel.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    tag: "sirt-masaj-kampanya",
  },
];

export default function CampaignsGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map(
            ({ id, title, price, originalPrice, badge, gift, desc, image, tag }, i) => (
              <SectionReveal key={id} delay={i * 0.12}>
                <motion.div
                  className="relative glass-card premium-card rounded-3xl overflow-hidden group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Top image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Premium badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gold text-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-bold">
                      <FaStar size={10} />
                      {badge}
                    </div>

                    {/* Gift badge */}
                    {gift && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/80 border border-gold/50 text-gold text-[10px] tracking-wider px-3 py-1.5 rounded-full">
                        <FaGift size={10} />
                        {gift}
                      </div>
                    )}

                    {/* Price on image */}
                    <div className="absolute bottom-4 right-4 text-right">
                      {originalPrice && (
                        <div className="text-white/50 text-sm line-through font-light">
                          {originalPrice}
                        </div>
                      )}
                      <div className="font-serif text-4xl font-light gradient-gold-text leading-none">
                        {price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="font-serif text-2xl font-light text-white tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                      {title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                      {desc}
                    </p>
                    <a
                      href={`https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20${encodeURIComponent(title)}%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`campaign-wa-${tag}`}
                      className="btn-gold w-full py-3.5 text-[11px] tracking-widest uppercase rounded-xl flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp size={16} />
                      WhatsApp ile Randevu Al
                    </a>
                  </div>

                  {/* Gold shimmer border on hover */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-gold/30 transition-all duration-400 pointer-events-none" />
                </motion.div>
              </SectionReveal>
            )
          )}
        </div>

        {/* Notice */}
        <SectionReveal className="mt-12 text-center">
          <p className="text-white/30 text-sm font-light tracking-wide">
            * Kampanyalar stokla sınırlıdır. Fiyatlar KDV dahildir.
            Detaylar için WhatsApp üzerinden iletişime geçin.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
