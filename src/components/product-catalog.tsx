"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { filterProducts, type CategoryFilter } from "@/lib/catalog";
import { getCatalogWhatsAppUrl } from "@/lib/whatsapp";
import type { CategorySlug, ProductSort } from "@/types/catalog";
import { cn } from "@/lib/utils";

const sortOptions: { value: ProductSort; label: string }[] = [
  { value: "default", label: "Pilihan utama" },
  { value: "name-asc", label: "Nama A–Z" },
  { value: "name-desc", label: "Nama Z–A" },
  { value: "category", label: "Kategori" },
];

function isCategorySlug(value: string): value is CategorySlug {
  return categories.some((category) => category.slug === value);
}

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("semua");
  const [sort, setSort] = useState<ProductSort>("default");

  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get("kategori");

    if (requestedCategory && isCategorySlug(requestedCategory)) {
      // Filter awal dari URL hanya bisa dibaca setelah hidrasi. Ini satu kali
      // sinkronisasi dengan URL, bukan render berantai, sehingga aman.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategory(requestedCategory);
    }
  }, []);

  const results = useMemo(
    () => filterProducts(products, query, category, sort),
    [query, category, sort],
  );

  const activeCategory = categories.find((item) => item.slug === category);
  const heading = activeCategory ? activeCategory.name : "Semua produk";
  const filtering = category !== "semua" || query.trim().length > 0;

  const updateCategory = (next: CategoryFilter) => {
    setCategory(next);

    const url = new URL(window.location.href);

    if (next === "semua") {
      url.searchParams.delete("kategori");
    } else {
      url.searchParams.set("kategori", next);
    }

    window.history.replaceState(null, "", url.toString());
  };

  return (
    <div>
      <div className="border-y border-line bg-white/60">
        <div className="shell py-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="relative">
              <label htmlFor="catalog-search" className="sr-only">
                Cari produk
              </label>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari produk, misalnya apel atau daging…"
                className="field h-12 pl-11 pr-11"
                autoComplete="off"
              />
              {query.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Hapus pencarian"
                  className="absolute right-3 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-ivory hover:text-deep"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="catalog-sort" className="sr-only">
                Urutkan produk
              </label>
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <select
                id="catalog-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as ProductSort)}
                className="field h-12 w-full min-w-[11rem] lg:w-auto"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            className="mt-5 flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter kategori produk"
          >
            <button
              type="button"
              onClick={() => updateCategory("semua")}
              aria-pressed={category === "semua"}
              className={cn(
                "shrink-0 rounded-[3px] border px-4 py-2 text-xs font-semibold tracking-[0.03em] transition-colors",
                category === "semua"
                  ? "border-deep bg-deep text-ivory"
                  : "border-line bg-white text-charcoal hover:border-deep/40",
              )}
            >
              Semua
            </button>
            {categories.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => updateCategory(item.slug)}
                aria-pressed={category === item.slug}
                className={cn(
                  "shrink-0 rounded-[3px] border px-4 py-2 text-xs font-semibold tracking-[0.03em] transition-colors",
                  category === item.slug
                    ? "border-deep bg-deep text-ivory"
                    : "border-line bg-white text-charcoal hover:border-deep/40",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shell py-10 sm:py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h2 className="text-2xl text-charcoal sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-muted" aria-live="polite">
              Menampilkan {results.length} dari {products.length} produk contoh
            </p>
          </div>
          {filtering ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                updateCategory("semua");
              }}
              className="link-quiet"
            >
              Reset filter
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {results.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 4} />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-dashed border-line bg-white px-6 py-16 text-center">
            <p className="font-serif text-2xl text-charcoal">Produk tidak ditemukan</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Coba kata kunci lain atau pilih kategori berbeda. Anda juga dapat menanyakan
              ketersediaan langsung kepada tim HAFERA FRESH.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  updateCategory("semua");
                }}
                className="btn btn-outline"
              >
                Tampilkan semua produk
              </button>
              <a
                href={getCatalogWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Tanyakan ketersediaan
              </a>
            </div>
          </div>
        )}

        <p className="mt-10 border-l-2 border-gold/60 pl-4 text-xs leading-relaxed text-muted">
          Katalog ini masih menggunakan data contoh. Harga, satuan, ketersediaan, dan detail produk
          belum resmi dan akan dikonfirmasi oleh tim HAFERA FRESH saat pemesanan.
        </p>
      </div>
    </div>
  );
}
