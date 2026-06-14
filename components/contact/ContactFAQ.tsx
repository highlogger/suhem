"use client";

import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    q: "Randevu almak için ne yapmalıyım?",
    a: "WhatsApp üzerinden bize ulaşabilirsiniz. Sizi en kısa sürede yanıtlayarak uygun randevu saatinizi belirleyeceğiz.",
  },
  {
    q: "Hizmetler öncesinde hazırlık gerekiyor mu?",
    a: "Lazer epilasyon öncesinde bölgeyi tıraş etmenizi, cilt bakımı öncesinde ise makyajsız gelmenizi öneririz. Diğer hizmetler için özel hazırlık gerekmez.",
  },
  {
    q: "Ödeme seçenekleri nelerdir?",
    a: "Nakit ve kredi kartı ile ödeme kabul ediyoruz. Bazı hizmetler için taksit imkânı da sunuyoruz. Detaylar için bizimle iletişime geçin.",
  },
  {
    q: "Lazer epilasyon kaç seansta tamamlanıyor?",
    a: "Cilt ve tüy yapısına göre değişmekle birlikte, genellikle 6–10 seans arasında kalıcı sonuç alınmaktadır. Uzmanlarımız ilk görüşmede size özel plan oluşturur.",
  },
  {
    q: "Kalıcı makyaj ne kadar süre kalıcı?",
    a: "Kalıcı makyaj cilt tipine ve bakımına göre 1–3 yıl arasında kalıcılığını korur. Rötuş seanslarıyla ömrü uzatılabilir.",
  },
  {
    q: "Hamilelik döneminde hizmet alınabilir mi?",
    a: "Hamilelik döneminde lazer epilasyon ve kalıcı makyaj önerilmez. Ancak cilt bakımı ve bazı hizmetler uygulanabilir. Uzmanlarımız sizi yönlendirecektir.",
  },
  {
    q: "İptal veya erteleme politikanız nedir?",
    a: "Randevunuzu en az 24 saat öncesinden WhatsApp üzerinden iptal veya erteleyebilirsiniz. Son dakika iptalleri için belirli koşullar geçerlidir.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-gold/10"
    >
      <button
        onClick={() => setOpen(!open)}
        id={`faq-item-${index}`}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-light text-white group-hover:text-gold transition-colors duration-300 leading-snug">
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all duration-300 ${
            open ? "bg-gold/20 border-gold/60 rotate-180" : "group-hover:bg-gold/10"
          }`}
        >
          <FaChevronDown size={12} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/55 font-light text-sm leading-relaxed pb-6 pl-0 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactFAQ() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-14">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Sıkça Sorulan Sorular
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Merak Ettikleriniz
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        <div className="glass-card rounded-3xl px-8 py-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal className="text-center mt-14">
          <p className="text-white/40 text-sm font-light mb-6">
            Sorunuz burada yoksa WhatsApp&apos;tan bize yazabilirsiniz.
          </p>
          <a
            href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase rounded-full"
          >
            <FaWhatsapp size={18} />
            Soru Sor
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
