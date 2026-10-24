import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface CtaBannerProps {
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBanner({
  title = "Butuh Pasokan Pangan untuk Bisnis Anda?",
  description = "Hubungi HAFERA FRESH untuk mendiskusikan kebutuhan produk dan mendapatkan penawaran yang sesuai.",
  secondaryHref = "/cara-pemesanan",
  secondaryLabel = "Lihat cara pemesanan",
}: CtaBannerProps) {
  return (
    <section className="bg-[#f4f2ea] py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="relative overflow-hidden bg-deep px-6 py-12 text-ivory sm:px-10 lg:px-14 lg:py-16">
          <div className="hero-grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/15"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-16 h-80 w-80 rounded-full border border-ivory/5"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-invert">Penawaran &amp; Pemesanan</p>
              <h2 className="mt-5 text-[1.9rem] leading-[1.15] text-ivory sm:text-[2.4rem] lg:text-[2.8rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Hubungi via WhatsApp
              </a>
              <Link href={secondaryHref} className="btn btn-outline-light">
                {secondaryLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
