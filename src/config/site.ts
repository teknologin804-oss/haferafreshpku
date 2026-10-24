/**
 * Sumber tunggal data bisnis HAFERA FRESH.
 *
 * Nomor WhatsApp resmi sudah diisi. Environment variable tetap didukung agar
 * nomor dapat dirotasi tanpa mengubah kode (mis. saat pindah nomor bisnis).
 * Lihat README.md bagian Konfigurasi.
 */
const officialWhatsAppNumber = "6285839025704";
const rawWhatsAppNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || officialWhatsAppNumber;
const whatsappDigits = rawWhatsAppNumber.replace(/\D/g, "");
const isPlaceholderWhatsApp = whatsappDigits.length < 8;

function formatWhatsAppNumber(digits: string): string {
  if (!digits.startsWith("62")) {
    return `+${digits}`;
  }

  const local = digits.slice(2);

  if (local.length >= 10) {
    return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`;
  }

  return `+62 ${local}`;
}

/**
 * Menentukan alamat canonical situs.
 *
 * Urutan prioritas:
 * 1. NEXT_PUBLIC_SITE_URL — domain final milik pemilik situs (custom domain).
 * 2. VERCEL_PROJECT_PRODUCTION_URL — diisi otomatis oleh Vercel saat build,
 *    supaya sitemap/robots/canonical/Open Graph tidak pernah menunjuk ke
 *    localhost hanya karena env manual belum diisi.
 * 3. VERCEL_URL — domain preview/deployment.
 * 4. localhost — untuk pengembangan lokal.
 */
function resolveSiteUrl(): string {
  const tidy = (value: string) =>
    value
      .replace(/^https?:\/\//, "")
      .replace(/\/+$/, "");

  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (vercelProduction) {
    return `https://${tidy(vercelProduction)}`;
  }

  const vercelDeployment = process.env.VERCEL_URL?.trim();

  if (vercelDeployment) {
    return `https://${tidy(vercelDeployment)}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "HAFERA FRESH",
  shortName: "HAFERA",
  tagline: "Fresh for a Better Tomorrow",
  description:
    "HAFERA FRESH adalah distributor buah, daging, frozen food, dan produk pangan untuk kebutuhan bisnis kuliner di Pekanbaru dan sekitarnya.",
  url: resolveSiteUrl(),
  locale: "id_ID",
  lang: "id",
  location: {
    city: "Pekanbaru",
    region: "Riau",
    country: "Indonesia",
    countryCode: "ID",
    /** Nama wilayah umum; alamat lengkap belum dikonfirmasi pemilik. */
    label: "Pekanbaru, Riau",
  },
  whatsapp: {
    number: whatsappDigits,
    isPlaceholder: isPlaceholderWhatsApp,
    displayNumber: isPlaceholderWhatsApp ? "Belum dikonfigurasi" : formatWhatsAppNumber(whatsappDigits),
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
  /** Media sosial belum tersedia; jangan menampilkan tautan fiktif. */
  socialLinks: [] as { label: string; href: string }[],
} as const;

export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Produk", href: "/produk" },
  { label: "Layanan", href: "/layanan" },
  { label: "Cara Pemesanan", href: "/cara-pemesanan" },
  { label: "Kontak", href: "/kontak" },
] as const;

export const brandImages = {
  logo: "/brand/logo-emblem.webp",
  hero: {
    src: "/images/hero-produce.webp",
    alt: "Aneka buah segar seperti jeruk dan apel tersusun rapat sebagai ilustrasi pasokan buah.",
  },
  warehouse: {
    src: "/images/tentang-gudang.webp",
    alt: "Lorong gudang dengan rak dan kardus tertata sebagai ilustrasi aktivitas distribusi.",
  },
  kitchen: {
    src: "/images/bisnis-kuliner.webp",
    alt: "Dua chef menyiapkan hidangan di dapur restoran sebagai ilustrasi pelanggan bisnis kuliner.",
  },
  kitchenService: {
    src: "/images/layanan-dapur.webp",
    alt: "Chef menumis bahan makanan segar di dapur profesional sebagai ilustrasi layanan pasokan.",
  },
} as const;
