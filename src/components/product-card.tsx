import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getCategoryName } from "@/data/categories";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift">
      <Link
        href={`/produk/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#edf0ea]"
        aria-label={`Lihat detail ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.demo ? (
          <span className="absolute left-3 top-3 rounded-[2px] bg-ivory/92 px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-deep backdrop-blur">
            Contoh data
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
          {getCategoryName(product.category)}
        </p>
        <h3 className="mt-2 text-xl leading-snug text-charcoal">
          <Link href={`/produk/${product.slug}`} className="transition-colors hover:text-deep">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.8125rem] leading-relaxed text-muted">
          {product.summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="text-[0.6875rem] leading-tight text-muted">
            Harga &amp; satuan
            <br />
            dikonfirmasi
          </span>
          <a
            href={getProductWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-deep transition-colors hover:text-[#0a5a44]"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Tanya Produk
          </a>
        </div>
      </div>
    </article>
  );
}
