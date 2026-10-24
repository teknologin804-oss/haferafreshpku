import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ChefHat, MapPin, Store, UtensilsCrossed } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brandImages, siteConfig } from "@/config/site";
import { aboutValues, segments } from "@/data/content";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali HAFERA FRESH, distributor buah, daging, frozen food, dan produk pangan di Pekanbaru yang melayani kebutuhan restoran, katering, toko, dan usaha kuliner.",
};

const segmentIcons = {
  utensils: UtensilsCrossed,
  hotel: Building2,
  store: Store,
  chef: ChefHat,
} as const;

export default function TentangKamiPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tentang HAFERA FRESH"
        title="Mitra Pasokan Pangan untuk Bisnis di Pekanbaru"
        description="HAFERA FRESH hadir untuk memudahkan bisnis kuliner mendapatkan bahan pangan dengan proses pemesanan yang jelas dan komunikasi langsung."
        breadcrumbs={[{ label: "Tentang Kami" }]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Identitas Perusahaan"
              title="Pangan Segar, Komunikasi yang Jelas"
            />
            <div className="prose-hafera mt-6 max-w-xl space-y-4">
              <p>
                HAFERA FRESH adalah usaha distribusi pangan yang berbasis di Pekanbaru, Riau.
                Fokus kami adalah menyediakan pilihan buah, sayuran, daging, frozen food, dan
                produk pangan pendukung untuk kebutuhan bisnis.
              </p>
              <p>
                Kami memahami bahwa dapur bisnis bekerja dengan ritme yang berbeda dari rumah
                tangga. Karena itu, setiap pesanan dimulai dengan percakapan: jenis produk,
                perkiraan jumlah, dan waktu kebutuhan dibicarakan terlebih dahulu agar tim dapat
                memberikan informasi yang sesuai.
              </p>
              <p>
                Katalog di website ini disusun agar Anda lebih mudah menemukan kategori produk.
                Detail seperti harga, satuan, dan ketersediaan tetap dikonfirmasi langsung sebelum
                pesanan diproses.
              </p>
            </div>

            <dl className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  Bidang Usaha
                </dt>
                <dd className="mt-1.5 text-sm text-charcoal">Distribusi bahan pangan</dd>
              </div>
              <div>
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  Basis Operasional
                </dt>
                <dd className="mt-1.5 text-sm text-charcoal">{siteConfig.location.label}</dd>
              </div>
              <div>
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  Fokus Layanan
                </dt>
                <dd className="mt-1.5 text-sm text-charcoal">Kebutuhan bisnis kuliner</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                <Image
                  src={brandImages.warehouse.src}
                  alt={brandImages.warehouse.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-gold/60"
                aria-hidden="true"
              />
              <p className="mt-3 text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                Foto ilustrasi aktivitas distribusi, bukan dokumentasi fasilitas perusahaan.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Nilai Perusahaan"
            title="Prinsip yang Menjadi Dasar Layanan"
            description="Nilai-nilai berikut menjadi arah komunikasi dan pelayanan HAFERA FRESH."
          />
          <div className="mt-10 grid gap-x-12 border-t border-line sm:grid-cols-3">
            {aboutValues.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 60}
                className="border-b border-line py-7 sm:border-b-0 sm:pr-6"
              >
                <span className="font-serif text-2xl text-gold-ink">0{index + 1}</span>
                <h3 className="mt-3 font-serif text-xl text-charcoal">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Arah Perusahaan"
              title="Visi dan Misi"
              description="Konten visi dan misi ini dapat disesuaikan pemilik sesuai arah perusahaan yang resmi."
            />
            <div className="mt-7 border-l-2 border-gold pl-5">
              <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
                Visi
              </h3>
              <p className="mt-2 font-serif text-xl leading-relaxed text-deep">
                Menjadi mitra pasokan pangan yang dapat diandalkan bagi bisnis kuliner di Pekanbaru
                dan sekitarnya.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
              Misi
            </h3>
            <ul className="mt-5 divide-y divide-line border-t border-line">
              {[
                "Menyediakan pilihan produk pangan yang terorganisasi sehingga pelanggan mudah menemukan kebutuhannya.",
                "Menjaga komunikasi pemesanan yang jelas, termasuk informasi ketersediaan, satuan, dan harga.",
                "Mendukung kebutuhan operasional bisnis kuliner melalui layanan yang dapat didiskusikan sesuai volume pesanan.",
                "Membangun hubungan kerja yang transparan dengan pelanggan dan mitra pasokan.",
              ].map((mission, index) => (
                <li key={mission} className="flex items-start gap-5 py-4">
                  <span className="font-serif text-lg text-gold-ink">0{index + 1}</span>
                  <p className="text-sm leading-relaxed text-muted">{mission}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-[#f4f2ea] py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Segmen Pelanggan"
            title="Siapa yang Kami Layani"
            description="HAFERA FRESH menyiapkan layanan untuk berbagai jenis usaha yang membutuhkan pasokan bahan pangan."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment, index) => {
              const Icon = segmentIcons[segment.icon];

              return (
                <Reveal
                  key={segment.slug}
                  delay={index * 60}
                  className="border border-line bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-xl text-charcoal">{segment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{segment.description}</p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/produk" className="btn btn-dark">
              Lihat katalog produk
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="inline-flex items-center gap-2 text-xs text-muted">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Berbasis di {siteConfig.location.label}.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
