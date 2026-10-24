import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description:
    "Telusuri katalog buah, sayuran, daging, frozen food, dan produk pangan HAFERA FRESH. Gunakan pencarian dan filter kategori, lalu tanyakan ketersediaan serta harga grosir melalui WhatsApp.",
};

export default function ProdukPage() {
  return (
    <>
      <PageIntro
        eyebrow="Katalog Produk"
        title="Pilih Produk Sesuai Kebutuhan Dapur Anda"
        description="Katalog contoh untuk membantu Anda menemukan kategori produk. Harga, satuan, dan stok dikonfirmasi langsung oleh tim HAFERA FRESH."
        breadcrumbs={[{ label: "Produk" }]}
      />
      <ProductCatalog />
    </>
  );
}
