"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/kampanyalar", label: "Kampanyalar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-gold/10">
      {/* Gold ornament bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-light tracking-widest gradient-gold-text">
                NAZ KARA
              </span>
              <span className="text-[9px] font-sans tracking-[0.35em] text-gold/60 uppercase mt-1">
                Beauty & Care
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Profesyonel güzellik hizmetleri ile lüks bir bakım deneyimi yaşayın. Her anınız özel.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-light tracking-widest text-gold mb-6">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300 font-light tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/40 group-hover:w-6 group-hover:bg-gold transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-light tracking-widest text-gold mb-6">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {[
                "Cilt Bakımı",
                "Hydra Facial",
                "Lazer Epilasyon",
                "Kirpik Uzatma",
                "Kaş Tasarımı",
                "Kalıcı Makyaj",
                "Saç Bakımı",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/hizmetler"
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300 font-light tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/40 group-hover:w-6 group-hover:bg-gold transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-light tracking-widest text-gold mb-6">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm font-light">
                <FaMapMarkerAlt className="text-gold/60 mt-0.5 flex-shrink-0" size={14} />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm font-light">
                <FaPhone className="text-gold/60 flex-shrink-0" size={14} />
                <a href="tel:+905XXXXXXXXX" className="hover:text-gold transition-colors">
                  +90 5XX XXX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm font-light">
                <FaWhatsapp className="text-gold/60 flex-shrink-0" size={14} />
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp ile Yaz
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm font-light">
                <FaClock className="text-gold/60 mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p>Pzt–Cmt: 09:00 – 20:00</p>
                  <p>Pazar: 10:00 – 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest font-light">
            © {new Date().getFullYear()} Naz Kara Beauty. Tüm hakları saklıdır.
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/40 to-transparent hidden md:block" />
          <p className="text-white/20 text-xs tracking-wider font-light">
            Premium Beauty & Care
          </p>
        </div>
      </div>
    </footer>
  );
}
