import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  ArrowUpRight,
  Beef,
  FileText,
  MessageCircle,
  Snowflake,
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brandImages } from "@/config/site";
import { services } from "@/data/content";
import { getBusinessWhatsAppUrl, getCategoryWhatsAppUrl, getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Layanan Distribusi",
  description:
    "Layanan HAFERA FRESH: pasokan buah dan sayuran, frozen food, daging, konsultasi kebutuhan grosir, dan permintaan penawaran untuk pelanggan bisnis di Pekanbaru.",
};

const serviceIcons = {
  apple: Apple,
  snowflake: Snowflake,
  beef: Beef,
  chat: MessageCircle,
  quote: FileText,
} as const;

export default function LayananPage() {
  return (
    <>
      <PageIntro
        eyebrow="Layanan"
        title="Pasokan Pangan untuk Ritme Bisnis Anda"
        description="Mulai dari buah dan sayuran hingga frozen food dan daging, layanan HAFERA FRESH disusun untuk kebutuhan dapur, toko, dan usaha kuliner."
        breadcrumbs={[{ label: "Layanan" }]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Lingkup Layanan"
              title="Yang Dapat Kami Bantu"
              description="Setiap layanan dimulai dari percakapan agar kebutuhan Anda dipahami sebelum pesanan disiapkan."
            />

            <div className="mt-10 border-t border-line">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const href = service.categorySlug
                  ? getCategoryWhatsAppUrl(service.categorySlug)
                  : service.slug === "permintaan-penawaran"
                    ? getGeneralWhatsAppUrl()
                    : getBusinessWhatsAppUrl();

                return (
                  <Reveal
                    key={service.slug}
                    delay={index * 50}
                    className="group grid gap-4 border-b border-line py-7 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6"
                  >
                    <div className="flex items-center gap-4 sm:w-24 sm:flex-col sm:items-start">
                      <span className="font-serif text-xl text-gold-ink">0{index + 1}</span>
                      <Icon className="h-5 w-5 text-deep" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl leading-snug text-charcoal">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                      <p className="mt-3 text-[0.8125rem] leading-relaxed text-[#5c665f]">
                        {service.detail}
                      </p>
                    </div>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start whitespace-nowrap text-xs font-semibold text-deep transition-colors hover:text-gold-ink sm:mt-1"
                    >
                      Tanyakan
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              Daftar layanan ini dapat disunting pemilik bila ada layanan tambahan yang sudah
              dikonfirmasi. Website tidak mencantumkan janji pengiriman instan atau ketersediaan
              stok yang belum terverifikasi.
            </p>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={brandImages.kitchenService.src}
                    alt={brandImages.kitchenService.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">Konsultasi</p>
                  <h2 className="mt-3 text-2xl leading-snug text-charcoal">
                    Belum yakin produk mana yang dibutuhkan?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Ceritakan jenis usaha dan menu Anda. Tim HAFERA FRESH akan membantu memilih
                    kategori produk yang relevan.
                  </p>
                  <a
                    href={getBusinessWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-5 w-full"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Diskusikan kebutuhan
                  </a>
                  <Link href="/kontak" className="link-quiet mt-4">
                    Gunakan formulir penawaran
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <p className="mt-3 text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                Foto ilustrasi dapur profesional
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Pendekatan Layanan"
              title="Tiga Hal yang Kami Utamakan"
              description="Bukan janji yang berlebihan, melainkan cara kerja yang dapat Anda tanyakan langsung."
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={100}>
            <ol className="divide-y divide-line border-t border-line">
              {[
                {
                  title: "Kebutuhan dibicarakan lebih dulu",
                  body: "Jenis produk, perkiraan jumlah, dan waktu penggunaan menjadi dasar penawaran yang lebih tepat.",
                },
                {
                  title: "Detail pesanan dikonfirmasi",
                  body: "Ketersediaan, satuan, harga, pembayaran, dan pengiriman disepakati sebelum pesanan diproses.",
                },
                {
                  title: "Komunikasi tetap terbuka",
                  body: "Jika ada perubahan stok atau pertanyaan lanjutan, tim akan menginformasikan melalui percakapan yang sama.",
                },
              ].map((item, index) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 py-5">
                  <span className="font-serif text-lg text-gold-ink">0{index + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Butuh Penawaran untuk Kebutuhan Rutin?"
        description="Sampaikan perkiraan kebutuhan bulanan atau mingguan Anda. Tim HAFERA FRESH akan membantu menyusun penawaran yang sesuai."
      />
    </>
  );
}
