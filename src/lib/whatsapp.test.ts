import { describe, expect, it } from "vitest";
import {
  buildProductMessage,
  buildQuoteMessage,
  buildWhatsAppUrl,
  normalizePhoneNumber,
} from "@/lib/whatsapp";
import type { Product } from "@/types/catalog";

const product: Product = {
  slug: "apel",
  name: "Apel",
  category: "buah-sayur",
  summary: "Apel segar.",
  description: "Deskripsi apel.",
  image: "/images/produk-apel.webp",
  alt: "Apel",
  highlights: [],
  featured: true,
  demo: true,
};

describe("normalizePhoneNumber", () => {
  it("mengubah nomor lokal menjadi format internasional", () => {
    expect(normalizePhoneNumber("0812-3456-7890")).toBe("6281234567890");
  });

  it("menghapus spasi dan tanda plus pada nomor internasional", () => {
    expect(normalizePhoneNumber("+62 812 3456 7890")).toBe("6281234567890");
  });

  it("mengembalikan string kosong bila tidak ada digit", () => {
    expect(normalizePhoneNumber("telepon")).toBe("");
  });
});

describe("buildWhatsAppUrl", () => {
  it("menghasilkan tautan wa.me dengan pesan yang di-encode", () => {
    const message = "Halo & tanya #harga\nMohon info.";
    const url = buildWhatsAppUrl("0812 3456 7890", message);

    expect(url.startsWith("https://wa.me/6281234567890?text=")).toBe(true);
    expect(new URL(url).searchParams.get("text")).toBe(message);
    expect(url).not.toContain(" ");
    expect(url).not.toContain("\n");
    expect(url).toContain("%26");
    expect(url).toContain("%23");
  });

  it("tidak menambahkan query bila pesan kosong", () => {
    expect(buildWhatsAppUrl("6281234567890", "   ")).toBe("https://wa.me/6281234567890");
  });
});

describe("buildProductMessage", () => {
  it("memuat nama produk, kategori, dan tautan halaman", () => {
    const message = buildProductMessage(product, "https://hafera.example/produk/apel/");

    expect(message).toContain("Produk: Apel");
    expect(message).toContain("Kategori: Buah dan Sayuran");
    expect(message).toContain("https://hafera.example/produk/apel/");
  });
});

describe("buildQuoteMessage", () => {
  it("menyusun pesan penawaran lengkap", () => {
    const message = buildQuoteMessage(
      {
        name: "Sari",
        customerType: "Restoran / rumah makan",
        category: "daging",
        quantity: "20 kg per minggu",
        phone: "0812 3456 7890",
        notes: "Untuk menu steak.",
      },
      "Daging",
    );

    expect(message).toContain("Nama: Sari");
    expect(message).toContain("Jenis pelanggan: Restoran / rumah makan");
    expect(message).toContain("Kebutuhan produk: Daging");
    expect(message).toContain("Estimasi jumlah: 20 kg per minggu");
    expect(message).toContain("Kontak: 0812 3456 7890");
    expect(message).toContain("Catatan: Untuk menu steak.");
  });

  it("melewati field opsional yang kosong", () => {
    const message = buildQuoteMessage(
      { name: "Budi", customerType: "Toko / pedagang", category: "campuran" },
      "Campuran / belum ditentukan",
    );

    expect(message).not.toContain("Estimasi jumlah:");
    expect(message).not.toContain("Catatan:");
  });
});
