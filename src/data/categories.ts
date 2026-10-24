import type { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    slug: "buah-sayur",
    name: "Buah dan Sayuran",
    shortDescription: "Buah segar dan sayuran untuk dapur, katering, serta penjualan kembali.",
    description:
      "Pilihan buah dan sayuran yang dapat dipesan sesuai kebutuhan operasional bisnis Anda. Jenis, ukuran, dan volume mengikuti katalog serta ketersediaan yang dikonfirmasi tim HAFERA FRESH saat pemesanan.",
    image: "/images/kategori-buah-sayur.webp",
    alt: "Kotak-kotak berisi apel, nanas, mangga, dan pisang sebagai ilustrasi kategori buah dan sayuran.",
  },
  {
    slug: "frozen-food",
    name: "Frozen Food",
    shortDescription: "Olahan beku praktis untuk menu restoran, katering, dan usaha kuliner.",
    description:
      "Produk beku seperti nugget dan kentang goreng yang membantu menyiapkan menu dengan alur kerja yang lebih ringkas. Penyimpanan beku dan penanganan produk dijelaskan saat konfirmasi pesanan.",
    image: "/images/kategori-frozen.webp",
    alt: "Nugget dan kentang goreng tersaji dalam wadah stainless sebagai ilustrasi kategori frozen food.",
  },
  {
    slug: "daging",
    name: "Daging",
    shortDescription: "Daging sapi, unggas, dan hasil laut untuk kebutuhan masak skala bisnis.",
    description:
      "Daging dan hasil laut yang dapat disesuaikan dengan kebutuhan menu serta volume pesanan. Potongan, kemasan, dan ketersediaan dikonfirmasi terlebih dahulu sebelum pesanan diproses.",
    image: "/images/kategori-daging.webp",
    alt: "Potongan daging sapi mentah di atas talenan kayu sebagai ilustrasi kategori daging.",
  },
  {
    slug: "pangan-lain",
    name: "Produk Pangan Lainnya",
    shortDescription: "Bahan pangan pendukung untuk melengkapi kebutuhan dapur Anda.",
    description:
      "Bahan pangan pendukung seperti telur dan produk kebutuhan dapur lain yang dapat ditanyakan ketersediaannya sesuai kebutuhan bisnis Anda.",
    image: "/images/kategori-pangan.webp",
    alt: "Karung berisi biji-bijian pangan terbuka di atas meja kayu sebagai ilustrasi produk pangan lainnya.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategory(slug)?.name ?? "Kategori lainnya";
}
