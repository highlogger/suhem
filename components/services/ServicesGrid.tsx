"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: "cilt-bakimi",
    title: "Cilt Bakımı",
    desc: "Cilt tipinize özel hazırlanan protokollerle derin temizlik, nemlendirme ve canlandırma. Sağlıklı, parlak ve genç görünümlü bir cilt için kişiselleştirilmiş bakım.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    detail: "60–90 dk",
  },
  {
    id: "hydra-facial",
    title: "Hydra Facial",
    desc: "Derin gözenek temizliği, peeling ve yoğun nemlendirmeyi bir arada sunan en yeni cilt bakım teknolojisi. Hemen belirgin sonuçlar.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    detail: "60 dk",
  },
  {
    id: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    desc: "En gelişmiş lazer teknolojileri ile kalıcı tüy azaltma. Tüm cilt tonlarına ve tüy tiplerine uygun, güvenli ve etkili uygulama.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    detail: "Bölgeye göre değişir",
  },
  {
    id: "kirpik-uzatma",
    title: "Kirpik Uzatma",
    desc: "Klasik, hybrid ve volüm tekniklerinde profesyonel kirpik uzatma. Doğal ve etkileyici bir göz görünümü için el yapımı, özenli uygulama.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    detail: "90–120 dk",
  },
  {
    id: "kas-tasarimi",
    title: "Kaş Tasarımı",
    desc: "Yüz hatlarınıza uygun kaş tasarımı, şekillendirme ve renklendirme. Doğal ve simetrik sonuçlar için uzman ellerin dokunuşu.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    detail: "30–45 dk",
  },
  {
    id: "tirnak-bakimi",
    title: "Tırnak Bakımı",
    desc: "El ve ayak tırnaklarınız için manikür, pedikür ve kalıcı oje uygulamaları. Sağlıklı ve bakımlı tırnaklar için profesyonel çözümler.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    detail: "45–60 dk",
  },
  {
    id: "protez-tirnak",
    title: "Protez Tırnak",
    desc: "Akrilik, jel ve polygel ile premium protez tırnak uygulaması. Uzun ömürlü, doğal görünümlü ve dayanıklı tırnak tasarımları.",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80",
    detail: "90–120 dk",
  },
  {
    id: "kalici-makyaj",
    title: "Kalıcı Makyaj",
    desc: "Microblading, ombre ve powder brow teknikleriyle uzun ömürlü kaş; dudak ve göz makyajı. Her sabah hazır görünmek artık çok kolay.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    detail: "2–3 saat",
  },
  {
    id: "sac-bakimi",
    title: "Saç Bakımı",
    desc: "Keratin, botoks ve ozon tedavileriyle saç onarımı ve güçlendirme. Hasar görmüş saçlar için yoğun bakım protokolleri.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    detail: "60–180 dk",
  },
  {
    id: "pedikur",
    title: "Pedikür",
    desc: "Ayak bakımı, tırnak şekillendirme, ölü deri temizleme ve masaj dahil kapsamlı pedikür. Ayaklarınız için lüks bir bakım deneyimi.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    detail: "60–75 dk",
  },
  {
    id: "sirt-masaj",
    title: "Sırt Masajı & Sırt Bakımı",
    desc: "Stres giderici aromaterapi masajı ve sırt bölgesi için özel bakım uygulaması. Vücut ve zihni dinlendiren, yenileyici bir deneyim.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    detail: "60–90 dk",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, title, desc, image, detail }, i) => (
            <SectionReveal key={id} delay={i * 0.07}>
              <div className="glass-card premium-card rounded-3xl overflow-hidden group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-gold/90 text-black text-[10px] tracking-wider px-3 py-1 rounded-full font-semibold">
                    {detail}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="font-serif text-2xl font-light text-white tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                    {title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed font-light flex-1">
                    {desc}
                  </p>
                  <a
                    href={`https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20${encodeURIComponent(title)}%20hizmetleri%20hakkında%20bilgi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`service-wa-${id}`}
                    className="mt-6 btn-gold w-full py-3 text-[11px] tracking-widest uppercase rounded-xl flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp ile İletişim
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
