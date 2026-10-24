import { siteConfig } from "@/config/site";
import { getCategoryName } from "@/data/categories";
import type { Product } from "@/types/catalog";

/** Membersihkan nomor menjadi format internasional tanpa tanda baca. */
export function normalizePhoneNumber(input: string): string {
  const digits = input.replace(/\D/g, "");

  if (digits.length === 0) {
    return "";
  }

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  return digits;
}

/** Membuat tautan wa.me dengan pesan yang sudah di-encode. */
export function buildWhatsAppUrl(number: string, message: string): string {
  const phone = normalizePhoneNumber(number);
  const text = message.trim();
  const query = text.length > 0 ? `?text=${encodeURIComponent(text)}` : "";

  return `https://wa.me/${phone}${query}`;
}

export const messages = {
  general:
    "Halo HAFERA FRESH, saya ingin menanyakan ketersediaan produk dan harga grosir. Mohon informasi lebih lanjut.",
  business:
    "Halo HAFERA FRESH, saya ingin mendiskusikan kebutuhan pasokan untuk bisnis saya. Mohon informasi produk dan penawaran yang tersedia.",
  catalog:
    "Halo HAFERA FRESH, saya ingin menanyakan katalog produk dan penawaran untuk kebutuhan bisnis saya.",
} as const;

export function getGeneralWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.number, messages.general);
}

export function getBusinessWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.number, messages.business);
}

export function getCatalogWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.number, messages.catalog);
}

export function getCategoryWhatsAppUrl(categorySlug: string): string {
  const categoryName = getCategoryName(categorySlug);

  return buildWhatsAppUrl(
    siteConfig.whatsapp.number,
    `Halo HAFERA FRESH, saya ingin menanyakan ketersediaan produk kategori ${categoryName}. Mohon informasi katalog dan harga grosirnya.`,
  );
}

export function buildProductMessage(product: Product, sourceUrl?: string): string {
  const lines = [
    "Halo HAFERA FRESH, saya ingin menanyakan produk berikut:",
    "",
    `Produk: ${product.name}`,
    `Kategori: ${getCategoryName(product.category)}`,
  ];

  if (sourceUrl) {
    lines.push(`Halaman produk: ${sourceUrl}`);
  }

  lines.push("", "Mohon informasi ketersediaan, satuan, dan harga untuk kebutuhan bisnis saya.");

  return lines.join("\n");
}

export function getProductWhatsAppUrl(product: Product, sourceUrl?: string): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.number, buildProductMessage(product, sourceUrl));
}

export interface QuoteMessageInput {
  name: string;
  customerType: string;
  category: string;
  quantity?: string;
  phone?: string;
  notes?: string;
}

export function buildQuoteMessage(input: QuoteMessageInput, categoryLabel: string): string {
  const lines = [
    "Halo HAFERA FRESH, saya ingin meminta penawaran.",
    "",
    `Nama: ${input.name}`,
    `Jenis pelanggan: ${input.customerType}`,
    `Kebutuhan produk: ${categoryLabel}`,
  ];

  if (input.quantity?.trim()) {
    lines.push(`Estimasi jumlah: ${input.quantity.trim()}`);
  }

  if (input.phone?.trim()) {
    lines.push(`Kontak: ${input.phone.trim()}`);
  }

  if (input.notes?.trim()) {
    lines.push(`Catatan: ${input.notes.trim()}`);
  }

  lines.push("", "Mohon informasi ketersediaan dan penawarannya. Terima kasih.");

  return lines.join("\n");
}
