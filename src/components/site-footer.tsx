import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { categories } from "@/data/categories";
import { navigation, siteConfig } from "@/config/site";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
            Distributor buah, daging, frozen food, dan produk pangan untuk kebutuhan bisnis kuliner di
            Pekanbaru dan sekitarnya.
          </p>
          <p className="mt-6 font-serif text-lg italic text-gold-soft">{siteConfig.tagline}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light mt-8"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hubungi via WhatsApp
          </a>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Navigasi
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory/65">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Kategori Produk
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory/65">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/produk?kategori=${category.slug}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-ivory"
                >
                  {category.name}
                  <ArrowUpRight className="h-3 w-3 text-ivory/30" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Kontak Bisnis
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-ivory/65">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
              <span>
                {siteConfig.location.label}
                <span className="mt-1 block text-xs text-ivory/60">
                  Alamat lengkap dikonfirmasi saat pemesanan.
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
              <span>
                {siteConfig.whatsapp.isPlaceholder ? (
                  <span className="text-ivory/60">Nomor WhatsApp belum dikonfigurasi</span>
                ) : (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-ivory"
                  >
                    {siteConfig.whatsapp.displayNumber}
                  </a>
                )}
              </span>
            </li>
            {siteConfig.email ? (
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-ivory">
                  {siteConfig.email}
                </a>
              </li>
            ) : null}
          </ul>
          <p className="mt-6 border-l border-gold/40 pl-3 text-xs leading-relaxed text-ivory/60">
            Ketersediaan, satuan, dan harga produk dikonfirmasi langsung oleh tim HAFERA FRESH.
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="tracking-[0.12em] uppercase">Pekanbaru · Riau · Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
