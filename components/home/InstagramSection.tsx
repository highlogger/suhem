"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";
import { FaInstagram, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const posts = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    type: "photo",
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    type: "reel",
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    type: "photo",
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    type: "reel",
  },
  {
    id: "ig-5",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&q=80",
    type: "photo",
  },
  {
    id: "ig-6",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
    type: "photo",
  },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaInstagram className="text-gold" size={20} />
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Instagram
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-2">
            @nazkarabeauty
          </h2>
          <p className="text-white/40 text-sm font-light tracking-wide mt-3">
            Bizi takip edin, güzellik dünyamıza katılın
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </SectionReveal>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <SectionReveal key={post.id} delay={i * 0.07}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id={`instagram-post-${post.id}`}
                className="relative block aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={post.image}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  {post.type === "reel" ? (
                    <FaPlay
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={20}
                    />
                  ) : (
                    <FaInstagram
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={20}
                    />
                  )}
                </div>
                {/* Reel badge */}
                {post.type === "reel" && (
                  <div className="absolute top-2 right-2 bg-gold/90 text-black text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full font-semibold">
                    Reel
                  </div>
                )}
              </a>
            </SectionReveal>
          ))}
        </div>

        {/* Follow button */}
        <SectionReveal className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            className="btn-ghost inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase rounded-full"
          >
            <FaInstagram size={16} />
            Instagram&apos;da Takip Et
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
