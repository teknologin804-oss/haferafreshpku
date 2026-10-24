import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/config/site";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak & Permintaan Penawaran",
  description:
    "Hubungi HAFERA FRESH di Pekanbaru untuk menanyakan ketersediaan produk, harga grosir, dan kebutuhan pasokan bisnis. Gunakan WhatsApp atau formulir permintaan penawaran.",
};

export default function KontakPage() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <>
      <PageIntro
        eyebrow="Kontak"
        title="Mari Diskusikan Kebutuhan Pasokan Anda"
        description="Tim HAFERA FRESH siap membantu pertanyaan tentang produk, ketersediaan, dan penawaran untuk kebutuhan bisnis Anda."
        breadcrumbs={[{ label: "Kontak" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Informasi Kontak</p>
            <h2 className="mt-4 text-3xl leading-tight text-charcoal">
              Hubungi melalui kanal yang tersedia
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              WhatsApp menjadi kanal tercepat untuk menanyakan ketersediaan produk dan penawaran.
              Formulir di samping akan menyiapkan pesan yang sama agar Anda dapat mengirimkannya
              langsung.
            </p>

            <ul className="mt-8 divide-y divide-line border-y border-line">
              <li className="flex items-start gap-4 py-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                    Lokasi
                  </h3>
                  <p className="mt-1 text-sm text-charcoal">{siteConfig.location.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Alamat lengkap belum dipublikasikan. Detail lokasi dan pengiriman dikonfirmasi
                    saat pemesanan.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 py-5">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                    WhatsApp
                  </h3>
                  {siteConfig.whatsapp.isPlaceholder ? (
                    <p className="mt-1 text-sm text-muted">
                      Nomor resmi belum dikonfigurasi pada versi ini.
                    </p>
                  ) : (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-charcoal underline decoration-line underline-offset-4 transition-colors hover:text-deep"
                    >
                      {siteConfig.whatsapp.displayNumber}
                    </a>
                  )}
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Ketersediaan, satuan, dan harga dikonfirmasi melalui percakapan.
                  </p>
                </div>
              </li>

              {siteConfig.email ? (
                <li className="flex items-start gap-4 py-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 inline-block text-sm text-charcoal underline decoration-line underline-offset-4 hover:text-deep"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              ) : null}

              <li className="flex items-start gap-4 py-5">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                    Waktu Respons
                  </h3>
                  <p className="mt-1 text-sm text-charcoal">
                    Mengikuti jam operasional tim HAFERA FRESH.
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Jam operasional resmi belum dicantumkan karena menunggu konfirmasi pemilik.
                  </p>
                </div>
              </li>
            </ul>

            <div className="relative mt-8 overflow-hidden border border-line bg-deep p-6 text-ivory">
              <div className="hero-grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Area Layanan
                </p>
                <p className="mt-3 font-serif text-2xl text-ivory">Pekanbaru &amp; sekitarnya</p>
                <p className="mt-2 text-xs leading-relaxed text-ivory/70">
                  Jangkauan pengiriman dikonfirmasi sesuai lokasi dan jumlah pesanan. Website tidak
                  menampilkan peta atau alamat yang belum terverifikasi.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-5"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Tanyakan ketersediaan
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <QuoteForm />
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Dengan mengirim pesan, Anda setuju untuk dihubungi kembali mengenai permintaan ini.
              Website tidak menyimpan data formulir.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
