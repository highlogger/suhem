"use client";

import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <SectionReveal direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] gold-border">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85"
                  alt="Naz Kara Beauty'nin hikayesi"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating small image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden gold-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=85"
                  alt="Güzellik uzmanı"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Gold badge */}
              <div className="absolute top-8 -left-8 glass-card rounded-xl p-5 gold-glow">
                <div className="font-serif text-4xl font-light gradient-gold-text">2016</div>
                <div className="text-white/50 text-[11px] tracking-widest uppercase mt-1">
                  Kuruluş Yılı
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="right">
            <div className="ornament mb-6">
              <span className="text-gold text-[11px] tracking-[0.4em] uppercase font-sans">
                Bizim Hikayemiz
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide leading-snug mb-8">
              Güzelliğe Adanmış
              <br />
              <span className="gradient-gold-text italic">Bir Yolculuk</span>
            </h2>
            <div className="space-y-5 text-white/60 font-light leading-relaxed">
              <p>
                Naz Kara Beauty, 2016 yılında güzelliğe olan derin tutkuyla hayata geçirildi.
                Kurucumuzun yıllar süren deneyimi ve uzmanlığıyla başlayan bu yolculuk,
                bugün İstanbul&apos;un en seçkin güzellik merkezlerinden biri haline geldi.
              </p>
              <p>
                Her müşterimize benzersiz bir deneyim sunma inancıyla hareket ediyoruz.
                Cilt bakımından kalıcı makyaja, lazer epilasyondan kirpik tasarımına kadar
                geniş hizmet yelpazemizle güzelliğinizi ön plana çıkarıyoruz.
              </p>
              <p>
                Hijyen, güvenlik ve kalite; bizim için sadece standartlar değil, vazgeçilemez
                değerlerdir. Her işlemde kullandığımız steril malzemeler ve sertifikalı ürünlerle
                sağlığınızı en üst düzeyde koruyoruz.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-gold/10">
              {[
                { value: "5.000+", label: "Mutlu Müşteri" },
                { value: "8+", label: "Yıl Deneyim" },
                { value: "99%", label: "Memnuniyet" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-serif text-3xl font-light gradient-gold-text">
                    {value}
                  </div>
                  <div className="text-white/40 text-[11px] tracking-widest uppercase mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
