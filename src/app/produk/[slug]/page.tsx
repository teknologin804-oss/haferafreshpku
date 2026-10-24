import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ChevronRight, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { getCategoryName } from "@/data/categories";
import { getProduct, products } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Produk tidak ditemukan" };
  }

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: `${product.name} — HAFERA FRESH`,
      description: product.summary,
      images: [{ url: product.image, alt: product.alt }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const categoryName = getCategoryName(product.category);
  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);
  const productUrl = `${siteConfig.url}/produk/${product.slug}/`;
  const whatsappUrl = getProductWhatsAppUrl(product, productUrl);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    category: categoryName,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <PageIntro
        eyebrow={`Katalog · ${categoryName}`}
        title={product.name}
        description={product.summary}
        breadcrumbs={[{ label: "Produk", href: "/produk" }, { label: product.name }]}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#edf0ea]">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              {product.demo ? (
                <span className="absolute left-4 top-4 rounded-[2px] bg-ivory/92 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-deep">
                  Contoh data
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.16em] text-muted">
              Foto ilustrasi produk
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
              {categoryName}
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-charcoal">
              Informasi {product.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>

            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-charcoal">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>

            <dl className="mt-7 divide-y divide-line border-y border-line text-sm">
              <div className="flex items-start justify-between gap-6 py-3.5">
                <dt className="text-muted">Harga</dt>
                <dd className="max-w-[11rem] text-right font-medium text-deep">
                  Hubungi kami untuk penawaran
                </dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-3.5">
                <dt className="text-muted">Satuan penjualan</dt>
                <dd className="max-w-[11rem] text-right font-medium text-deep">
                  Dikonfirmasi saat pemesanan
                </dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-3.5">
                <dt className="text-muted">Ketersediaan</dt>
                <dd className="max-w-[11rem] text-right font-medium text-deep">
                  Dicek sebelum pesanan diproses
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Tanya Produk via WhatsApp
              </a>
              <Link href="/cara-pemesanan" className="btn btn-outline w-full">
                Lihat cara pemesanan
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              Harga dan satuan belum tercantum karena menunggu konfirmasi pemilik. Tim HAFERA FRESH
              akan memberikan informasi yang berlaku saat Anda menghubungi.
            </p>
          </div>
        </div>

        <div className="shell mt-10">
          <Link href="/produk" className="link-quiet">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Kembali ke katalog
          </Link>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line bg-[#f4f2ea] py-14 sm:py-20">
          <div className="shell">
            <SectionHeading
              eyebrow="Produk Terkait"
              title={`Produk lain di kategori ${categoryName}`}
            />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </>
  );
}
