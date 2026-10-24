import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, MessageCircle, Truck } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs, orderSteps } from "@/data/content";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Cara Pemesanan",
  description:
    "Panduan pemesanan HAFERA FRESH: pilih produk, hubungi tim, konfirmasi stok dan harga, sepakati pembayaran serta pengiriman, lalu pesanan diproses.",
};

const preparationItems = [
  "Jenis produk atau kategori yang dibutuhkan",
  "Perkiraan jumlah dan satuan",
  "Waktu penggunaan atau jadwal kebutuhan",
  "Lokasi pengiriman bila sudah diketahui",
];

export default function CaraPemesananPage() {
  return (
    <>
      <PageIntro
        eyebrow="Cara Pemesanan"
        title="Proses Pemesanan yang Jelas dari Awal"
        description="Pemesanan dilakukan melalui percakapan agar detail produk dan kebutuhan bisnis Anda dapat dikonfirmasi dengan tepat."
        breadcrumbs={[{ label: "Cara Pemesanan" }]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Alur Pemesanan"
              title="Lima Langkah Sederhana"
              description="Tidak ada pembayaran atau pemesanan otomatis di website ini. Semua detail disepakati melalui komunikasi langsung."
            />

            <ol className="mt-10">
              {orderSteps.map((step, index) => (
                <li key={step.step} className="relative flex gap-6 pb-8 last:pb-0">
                  {index < orderSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[1.4375rem] top-12 h-[calc(100%-3rem)] w-px bg-line"
                    />
                  ) : null}
                  <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white font-serif text-sm text-deep">
                    {step.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="border border-line bg-white p-6">
                <p className="eyebrow">Sebelum Menghubungi</p>
                <h2 className="mt-3 font-serif text-2xl text-charcoal">
                  Siapkan informasi ini
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Informasi awal membantu tim memberikan gambaran ketersediaan dan penawaran yang
                  lebih cepat.
                </p>
                <ul className="mt-5 space-y-3">
                  {preparationItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-6 w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Mulai percakapan
                </a>
                <Link href="/kontak" className="link-quiet mt-4">
                  Isi formulir penawaran
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-4 border border-line bg-ivory p-5">
                <h3 className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-deep">
                  <Truck className="h-4 w-4 text-gold" aria-hidden="true" />
                  Catatan Pengiriman
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Jadwal dan biaya pengiriman dikonfirmasi saat pemesanan, menyesuaikan lokasi serta
                  jumlah pesanan. Website ini tidak menjanjikan pengiriman instan.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Pertanyaan Umum"
              title="Hal yang Sering Ditanyakan"
              description="Jawaban singkat tentang harga, stok, dan pengiriman."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 40}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                      <span className="font-serif text-lg text-charcoal">{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-deep transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-5 pr-10 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Siap Memulai Pesanan?"
        description="Hubungi HAFERA FRESH dan sampaikan kebutuhan Anda. Tim akan membantu mengonfirmasi detail sebelum pesanan diproses."
        secondaryHref="/produk"
        secondaryLabel="Telusuri katalog"
      />
    </>
  );
}
