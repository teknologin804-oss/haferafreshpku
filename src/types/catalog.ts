export type CategorySlug = "buah-sayur" | "frozen-food" | "daging" | "pangan-lain";

export type ProductSort = "default" | "name-asc" | "name-desc" | "category";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** Deskripsi singkat untuk kartu katalog. */
  summary: string;
  /** Penjelasan lebih lengkap di halaman detail. */
  description: string;
  image: string;
  alt: string;
  /** Poin penggunaan umum, bukan klaim sertifikasi atau asal produk. */
  highlights: string[];
  featured: boolean;
  /**
   * true = contoh data untuk pengembangan. Harga dan satuan sengaja tidak
   * dicantumkan karena belum dikonfirmasi pemilik.
   */
  demo: boolean;
}
