import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-line bg-[#f7f4ec] pt-28">
      <div className="editorial-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-24 top-24 h-80 w-80 rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div className="shell relative py-20">
        <p className="eyebrow">Halaman tidak ditemukan</p>
        <p className="mt-6 font-serif text-[5rem] leading-none text-gold-ink sm:text-[7rem]">404</p>
        <h1 className="mt-4 max-w-2xl text-[2rem] leading-tight text-deep sm:text-[2.7rem]">
          Halaman yang Anda cari tidak tersedia.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          Mungkin tautannya berubah atau produk yang Anda cari sudah tidak tercantum. Anda dapat
          kembali ke beranda atau menelusuri katalog produk.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-dark">
            Kembali ke beranda
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/produk" className="btn btn-outline">
            Lihat katalog
          </Link>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hubungi tim
          </a>
        </div>
      </div>
    </section>
  );
}
