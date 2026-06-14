"use client";

import SectionReveal from "@/components/SectionReveal";

export default function ContactMap() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-12">
          <div className="ornament justify-center mb-4">
            <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
              Konumuz
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white tracking-wide">
            Bizi Bulun
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </SectionReveal>

        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden gold-border" style={{ height: "450px" }}>
            {/* Gold overlay top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96418.35718856671!2d28.88917766171875!3d41.01384086904088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1716000000000!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Naz Kara Beauty Konum"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
