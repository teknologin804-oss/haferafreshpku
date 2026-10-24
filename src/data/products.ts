import type { Product } from "@/types/catalog";

/**
 * KATALOG CONTOH.
 *
 * Data di bawah disusun untuk pengembangan tampilan. Harga, satuan, dan stok
 * belum dikonfirmasi pemilik sehingga tidak dicantumkan. Ganti isi berkas ini
 * dengan katalog resmi, lalu ubah `demo` menjadi false.
 */
export const products: Product[] = [
  {
    slug: "apel",
    name: "Apel",
    category: "buah-sayur",
    summary: "Apel dengan kulit merah cerah dan tekstur renyah, cocok untuk konsumsi langsung maupun olahan.",
    description:
      "Apel termasuk buah yang banyak digunakan untuk hidangan penutup, jus, salad, dan pelengkap menu. Ukuran serta tingkat kematangan dapat didiskusikan saat pemesanan agar sesuai kebutuhan dapur Anda.",
    image: "/images/produk-apel.webp",
    alt: "Tumpukan apel merah segar dengan tekstur kulit yang jelas.",
    highlights: ["Umum dipakai untuk menu penutup dan jus", "Cocok untuk kebutuhan katering dan toko buah", "Jumlah pesanan menyesuaikan kebutuhan"],
    featured: true,
    demo: true,
  },
  {
    slug: "jeruk",
    name: "Jeruk",
    category: "buah-sayur",
    summary: "Jeruk dengan rasa manis-asam segar untuk sajian, minuman, dan penjualan kembali.",
    description:
      "Jeruk dapat dipesan untuk kebutuhan minuman, hidangan, maupun penjualan kembali. Tim HAFERA FRESH akan mengonfirmasi varietas dan ukuran yang tersedia saat Anda menghubungi.",
    image: "/images/produk-jeruk.webp",
    alt: "Jeruk segar berwarna oranye tersusun rapat dengan permukaan mengilap.",
    highlights: ["Umum digunakan untuk minuman dan hidangan", "Pilihan volume untuk kebutuhan bisnis", "Ketersediaan dikonfirmasi saat pemesanan"],
    featured: true,
    demo: true,
  },
  {
    slug: "pisang",
    name: "Pisang",
    category: "buah-sayur",
    summary: "Pisang dengan tekstur lembut dan rasa manis alami untuk sarapan, camilan, dan olahan.",
    description:
      "Pisang banyak digunakan pada menu sarapan, camilan, kue, dan minuman. Tingkat kematangan dapat didiskusikan agar sesuai dengan waktu penggunaan di dapur Anda.",
    image: "/images/produk-pisang.webp",
    alt: "Sisir pisang kuning segar dengan tekstur kulit yang mulus.",
    highlights: ["Cocok untuk menu sarapan dan camilan", "Dapat dipakai untuk olahan kue dan minuman", "Tingkat kematangan dapat didiskusikan"],
    featured: false,
    demo: true,
  },
  {
    slug: "wortel",
    name: "Wortel",
    category: "buah-sayur",
    summary: "Wortel segar untuk sup, tumisan, dan hidangan pendamping.",
    description:
      "Wortel merupakan sayuran serbaguna untuk sup, tumisan, dan hidangan pendamping. Ukuran dan jumlah dapat disesuaikan dengan kebutuhan operasional dapur.",
    image: "/images/produk-wortel.webp",
    alt: "Tumpukan wortel oranye segar yang tersusun memanjang.",
    highlights: ["Umum dipakai untuk sup dan tumisan", "Dapat dipesan dalam jumlah besar", "Ketersediaan dikonfirmasi saat pemesanan"],
    featured: false,
    demo: true,
  },
  {
    slug: "kentang",
    name: "Kentang",
    category: "buah-sayur",
    summary: "Kentang pilihan untuk menu goreng, rebus, dan olahan pendamping.",
    description:
      "Kentang digunakan pada banyak menu, mulai dari lauk pendamping hingga camilan. Pemesanan dalam jumlah besar dapat didiskusikan dengan tim HAFERA FRESH.",
    image: "/images/produk-kentang.webp",
    alt: "Kentang segar dalam karung anyaman di pasar sebagai ilustrasi pasokan kentang.",
    highlights: ["Serbaguna untuk menu goreng dan rebus", "Cocok untuk kebutuhan katering", "Volume pesanan menyesuaikan kebutuhan"],
    featured: false,
    demo: true,
  },
  {
    slug: "bawang-merah",
    name: "Bawang Merah",
    category: "buah-sayur",
    summary: "Bawang merah untuk bumbu dasar berbagai masakan Indonesia.",
    description:
      "Bawang merah adalah bahan bumbu dasar pada banyak masakan. Tim HAFERA FRESH dapat membantu mengonfirmasi ketersediaan dan jumlah yang sesuai dengan kebutuhan dapur.",
    image: "/images/produk-bawang-merah.webp",
    alt: "Tumpukan bawang merah dengan kulit berwarna merah keunguan.",
    highlights: ["Bumbu dasar untuk berbagai masakan", "Kebutuhan rutin dapur dan katering", "Ketersediaan dikonfirmasi saat pemesanan"],
    featured: false,
    demo: true,
  },
  {
    slug: "daging-sapi",
    name: "Daging Sapi",
    category: "daging",
    summary: "Daging sapi untuk steak, tumisan, sup, dan kebutuhan masak skala bisnis.",
    description:
      "Daging sapi dapat dipilih sesuai kebutuhan menu, mulai dari hidangan tumis hingga steak. Potongan dan jumlah pesanan dikonfirmasi lebih dahulu agar sesuai dengan rencana produksi dapur.",
    image: "/images/produk-daging-sapi.webp",
    alt: "Potongan daging sapi mentah dengan bumbu di atas talenan kayu.",
    highlights: ["Tersedia untuk kebutuhan menu skala bisnis", "Potongan dapat didiskusikan", "Penyimpanan dan pengiriman dikonfirmasi saat pemesanan"],
    featured: true,
    demo: true,
  },
  {
    slug: "ayam-fillet",
    name: "Ayam Fillet",
    category: "daging",
    summary: "Fillet ayam tanpa tulang untuk menu praktis di restoran dan katering.",
    description:
      "Ayam fillet memudahkan pengolahan menu karena tidak memiliki tulang. Jumlah dan kemasan pesanan dapat didiskusikan sesuai kebutuhan operasional dapur Anda.",
    image: "/images/produk-ayam-fillet.webp",
    alt: "Dua potong ayam fillet mentah berbumbu di atas talenan putih.",
    highlights: ["Praktis untuk menu restoran dan katering", "Tanpa tulang sehingga lebih efisien", "Volume pesanan menyesuaikan kebutuhan"],
    featured: true,
    demo: true,
  },
  {
    slug: "udang",
    name: "Udang",
    category: "daging",
    summary: "Udang segar untuk menu tumis, bakar, dan hidangan laut.",
    description:
      "Udang dapat menjadi pilihan untuk menu tumis, bakar, atau hidangan laut lainnya. Ukuran dan tingkat kesegaran produk dikonfirmasi saat pemesanan.",
    image: "/images/produk-udang.webp",
    alt: "Tumpukan udang mentah berwarna oranye muda di atas wadah.",
    highlights: ["Cocok untuk menu tumis dan bakar", "Ukuran dapat didiskusikan", "Ketersediaan dikonfirmasi saat pemesanan"],
    featured: false,
    demo: true,
  },
  {
    slug: "nugget-ayam",
    name: "Nugget Ayam",
    category: "frozen-food",
    summary: "Nugget ayam beku untuk menu cepat saji dan kebutuhan katering.",
    description:
      "Nugget ayam beku membantu mempercepat penyajian menu tanpa mengurangi variasi hidangan. Pastikan produk disimpan pada suhu beku dan dimasak sesuai petunjuk kemasan.",
    image: "/images/produk-nugget.webp",
    alt: "Nugget ayam berwarna keemasan yang tersusun rapat.",
    highlights: ["Praktis untuk menu cepat saji", "Cocok untuk kebutuhan katering", "Simpan pada suhu beku"],
    featured: false,
    demo: true,
  },
  {
    slug: "french-fries",
    name: "French Fries",
    category: "frozen-food",
    summary: "Kentang goreng beku sebagai pendamping menu yang praktis.",
    description:
      "Kentang goreng beku banyak digunakan sebagai pendamping menu di restoran dan usaha kuliner. Jumlah dan kemasan pesanan dapat disesuaikan dengan kebutuhan Anda.",
    image: "/images/produk-french-fries.webp",
    alt: "Kentang goreng keemasan dalam wajan besi dengan saus tomat.",
    highlights: ["Pendamping menu yang praktis", "Cocok untuk restoran dan kafe", "Volume pesanan menyesuaikan kebutuhan"],
    featured: false,
    demo: true,
  },
  {
    slug: "telur",
    name: "Telur",
    category: "pangan-lain",
    summary: "Telur ayam sebagai bahan pangan pokok untuk berbagai menu.",
    description:
      "Telur ayam merupakan bahan pangan pokok yang digunakan pada banyak menu, termasuk sarapan, kue, dan hidangan lainnya. Kebutuhan jumlah dapat didiskusikan saat pemesanan.",
    image: "/images/produk-telur.webp",
    alt: "Dua telur ayam berwarna cokelat di samping segelas susu dan tangkai gandum.",
    highlights: ["Bahan pangan pokok berbagai menu", "Kebutuhan harian dapur dan katering", "Ketersediaan dikonfirmasi saat pemesanan"],
    featured: false,
    demo: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}
