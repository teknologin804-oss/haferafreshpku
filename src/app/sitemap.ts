import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const pages = ["", "/tentang-kami/", "/produk/", "/layanan/", "/cara-pemesanan/", "/kontak/"];
  const priorityByPage: Record<string, number> = {
    "": 1,
    "/produk/": 0.9,
    "/kontak/": 0.8,
  };

  const pageEntries: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: priorityByPage[path] ?? 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/produk/${product.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pageEntries, ...productEntries];
}
