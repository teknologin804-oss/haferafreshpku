import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Check,
  ChefHat,
  MapPin,
  MessageCircle,
  Package,
  Snowflake,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";
import { brandImages } from "@/config/site";
import { categories } from "@/data/categories";
import { orderSteps, segments, serviceValues } from "@/data/content";
import { featuredProducts } from "@/data/products";
import { getBusinessWhatsAppUrl, getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Distributor Buah, Daging & Frozen Food Pekanbaru",
  description:
    "HAFERA FRESH menyediakan pasokan buah, sayuran, daging, dan frozen food untuk restoran, katering, toko, dan usaha kuliner di Pekanbaru. Hubungi tim untuk ketersediaan dan penawaran.",
};

const trustItems = [
  {
    icon: Package,
    title: "Pilihan Produk Beragam",
    description: "Buah, sayuran, daging, frozen food, dan bahan pangan pendukung.",
  },
  {
    icon: Boxes,
    title: "Layanan untuk Kebutuhan Grosir",
    description: "Pesanan dapat didiskusikan sesuai volume kebutuhan bisnis.",
  },
  {
    icon: MessageCircle,
    title: "Komunikasi Pemesanan yang Mudah",
    description: "Pertanyaan produk dijawab langsung melalui WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Berbasis di Pekanbaru",
    description: "Melayani kebutuhan pasokan di Pekanbaru dan sekitarnya.",
  },
];

const segmentIcons = {
  utensils: UtensilsCrossed,
  hotel: Building2,
  store: Store,
  chef: ChefHat,
} as const;

export default function HomePage() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-[#f7f4ec] pb-16 pt-28 text-charcoal sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="editorial-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-24 top-4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(215,173,75,0.16),transparent_68%)]"
          aria-hidden="true"
        />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <p className="eyebrow">Food Distribution · Pekanbaru</p>
              <h1 className="mt-6 max-w-2xl text-[2.5rem] leading-[1.02] text-deep sm:text-[3.35rem] lg:text-[3.8rem] xl:text-[4.1rem]">
                Pasokan Pangan{" "}
                <span className="font-light italic text-gold-ink">Berkualitas</span> untuk Bisnis
                Anda.
              </h1>
              <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-[#4f5a53] sm:text-base">
                HAFERA FRESH menghadirkan pilihan buah, daging, dan frozen food untuk mendukung
                kebutuhan bisnis kuliner Anda di Pekanbaru.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Konsultasi &amp; Pemesanan
                </a>
                <Link href="/produk" className="btn btn-outline">
                  Jelajahi Produk
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
                <li>Buah &amp; Sayuran</li>
                <li className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <li>Daging</li>
                <li className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <li>Frozen Food</li>
                <li className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <li>Produk Pangan</li>
              </ul>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6 xl:col-span-5" delay={120}>
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div
                className="absolute -inset-3 border border-gold/50 sm:-inset-4"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eceae1] shadow-soft">
                <Image
                  src={brandImages.hero.src}
                  alt={brandImages.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <p className="absolute right-3 top-3 rounded-[2px] bg-ivory/90 px-2 py-1 text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  Foto ilustrasi
                </p>
              </div>

              <div className="absolute -bottom-6 left-0 max-w-[15rem] bg-deep p-5 text-ivory shadow-lift sm:-left-6">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Fresh for a Better Tomorrow
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-ivory">
                  Pasokan pangan untuk dapur yang sibuk.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section aria-label="Nilai layanan HAFERA FRESH" className="border-b border-line bg-white">
        <div className="shell grid divide-y divide-line py-2 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 60}
              className="flex items-start gap-3.5 py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0 lg:border-l lg:border-line lg:first:border-l-0 lg:first:pl-0"
            >
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h2 className="font-serif text-[1.0625rem] leading-snug text-charcoal">{item.title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Kategori Produk"
              title="Solusi Pasokan untuk Kebutuhan Pangan Anda"
              description="Telusuri kategori utama yang dapat dipesan untuk kebutuhan dapur, katering, toko, dan usaha kuliner."
            />
            <Link href="/produk" className="link-quiet shrink-0 self-start md:self-end">
              Lihat seluruh katalog
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {categories.slice(0, 1).map((category) => (
              <Reveal key={category.slug} className="lg:col-span-7">
                <Link
                  href={`/produk?kategori=${category.slug}`}
                  className="group relative block h-full min-h-[22rem] overflow-hidden bg-forest sm:min-h-[26rem]"
                >
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/5"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-ivory sm:p-8">
                    <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold">
                      01 · Kategori
                    </p>
                    <h3 className="mt-2 max-w-sm text-3xl text-ivory sm:text-[2.15rem]">
                      {category.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/70">
                      {category.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-soft">
                      Jelajahi kategori
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <div className="flex flex-col gap-4 lg:col-span-5">
              {categories.slice(1).map((category, index) => (
                <Reveal key={category.slug} delay={80 + index * 70}>
                  <Link
                    href={`/produk?kategori=${category.slug}`}
                    className="group flex min-h-[8.75rem] overflow-hidden border border-line bg-white transition-colors duration-300 hover:border-gold/60"
                  >
                    <div className="relative w-[6.5rem] shrink-0 overflow-hidden sm:w-[8.5rem]">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        fill
                        sizes="(max-width: 640px) 26vw, 150px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center px-5 py-4">
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                        0{index + 2}
                      </p>
                      <h3 className="mt-1 font-serif text-xl text-charcoal transition-colors group-hover:text-deep">
                        {category.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                        {category.shortDescription}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold text-deep">
                        Lihat produk
                        <ArrowUpRight
                          className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="border-y border-line bg-[#f4f2ea] py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Pilihan Produk"
              title="Pilihan Produk HAFERA FRESH"
              description="Contoh produk yang biasa dicari untuk kebutuhan bisnis. Ketersediaan dan harga dikonfirmasi langsung oleh tim."
            />
            <Link href="/produk" className="link-quiet shrink-0 self-start md:self-end">
              Semua produk
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden bg-forest">
                <Image
                  src={brandImages.warehouse.src}
                  alt={brandImages.warehouse.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-forest/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 hidden h-28 w-28 border-r border-b border-gold/60 sm:block"
                aria-hidden="true"
              />
              <p className="mt-3 text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                Foto ilustrasi aktivitas distribusi
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={100}>
            <SectionHeading
              eyebrow="Tentang HAFERA FRESH"
              title="Mitra Pasokan Pangan untuk Bisnis Anda"
              className="max-w-xl"
            />
            <div className="prose-hafera mt-5 max-w-xl space-y-4">
              <p>
                HAFERA FRESH membantu pelanggan memenuhi kebutuhan produk pangan melalui
                komunikasi pemesanan yang praktis dan pilihan produk sesuai katalog perusahaan.
              </p>
              <p>
                Kami melayani kebutuhan restoran, katering, hotel, toko, dan usaha kuliner di
                Pekanbaru. Setiap pesanan dimulai dari percakapan, sehingga detail produk dan
                kebutuhan bisnis dapat dibicarakan lebih dulu.
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {["Pilihan kategori produk yang terorganisasi", "Pemesanan melalui percakapan langsung", "Konfirmasi detail sebelum pesanan diproses"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>

            <Link href="/tentang-kami" className="btn btn-outline mt-8">
              Kenali HAFERA FRESH
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Mengapa Memilih Kami"
            title="Layanan yang Dibangun untuk Kebutuhan Bisnis"
            description="Fokus layanan HAFERA FRESH adalah memudahkan bisnis Anda mendapatkan bahan pangan dengan informasi yang jelas."
          />

          <div className="mt-10 grid gap-x-12 border-t border-line sm:grid-cols-2">
            {serviceValues.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 60}
                className="group grid grid-cols-[auto_1fr] gap-5 border-b border-line py-7"
              >
                <span className="font-serif text-2xl text-gold-ink">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-charcoal">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS SOLUTIONS */}
      <section className="border-t border-line bg-[#f4f2ea] py-16 sm:py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Solusi Bisnis"
              title="Pasokan untuk Setiap Jenis Usaha Kuliner"
              description="Sampaikan jenis usaha dan kebutuhan bahan baku Anda. Tim HAFERA FRESH akan membantu menyusun pilihan produk yang sesuai."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {segments.map((segment) => {
                const Icon = segmentIcons[segment.icon];

                return (
                  <li
                    key={segment.slug}
                    className="border border-line bg-white p-5 transition-colors hover:border-gold/60"
                  >
                    <Icon className="h-5 w-5 text-gold-ink" aria-hidden="true" />
                    <h3 className="mt-3 font-serif text-lg text-charcoal">{segment.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {segment.description}
                    </p>
                  </li>
                );
              })}
            </ul>

            <a
              href={getBusinessWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mt-8"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Diskusikan Kebutuhan Bisnis Anda
            </a>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <div className="relative ml-auto max-w-lg">
              <div className="absolute -inset-3 border border-gold/30" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={brandImages.kitchen.src}
                  alt={brandImages.kitchen.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/45 to-transparent p-5 pt-14">
                  <div className="flex items-start gap-3">
                    <Snowflake className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-ivory/90">
                      Kebutuhan frozen food, daging, buah, dan sayuran dapat ditanyakan dalam satu
                      percakapan dengan tim.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                Foto ilustrasi
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Cara Pemesanan"
              title="Lima Langkah Menuju Pesanan Anda"
              description="Alur sederhana agar detail produk, harga, dan pengiriman disepakati sebelum pesanan diproses."
            />
            <Link href="/cara-pemesanan" className="link-quiet shrink-0 self-start md:self-end">
              Panduan lengkap
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {orderSteps.map((step, index) => (
              <li key={step.step} className="bg-ivory">
                <Reveal
                  delay={index * 60}
                  className="group h-full bg-ivory p-6 transition-colors hover:bg-white"
                >
                  <span className="font-serif text-3xl text-gold-ink">{step.step}</span>
                  <h3 className="mt-4 font-serif text-lg leading-snug text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <p className="mt-5 text-xs leading-relaxed text-muted">
            Jadwal dan biaya pengiriman dikonfirmasi saat pemesanan. Website ini tidak menjanjikan
            pengiriman instan.
          </p>
        </div>
      </section>

      <Testimonials />

      <CtaBanner />
    </>
  );
}
