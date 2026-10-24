import { describe, expect, it } from "vitest";
import { filterProducts, normalizeSearchTerm } from "@/lib/catalog";
import type { Product } from "@/types/catalog";

function makeProduct(overrides: Partial<Product> & Pick<Product, "slug" | "name" | "category">): Product {
  return {
    summary: "",
    description: "",
    image: "/images/contoh.webp",
    alt: "",
    highlights: [],
    featured: false,
    demo: true,
    ...overrides,
  };
}

const catalog: Product[] = [
  makeProduct({ slug: "apel", name: "Apel", category: "buah-sayur", featured: true }),
  makeProduct({ slug: "pisang", name: "Pisang", category: "buah-sayur" }),
  makeProduct({ slug: "daging-sapi", name: "Daging Sapi", category: "daging", featured: true }),
  makeProduct({ slug: "nugget", name: "Nugget Ayam", category: "frozen-food" }),
];

describe("normalizeSearchTerm", () => {
  it("menghasilkan huruf kecil tanpa spasi berlebih", () => {
    expect(normalizeSearchTerm("  Daging   Sapi ")).toBe("daging sapi");
  });
});

describe("filterProducts", () => {
  it("mencari tanpa membedakan huruf besar dan kecil", () => {
    const results = filterProducts(catalog, "APEL", "semua");
    expect(results.map((item) => item.slug)).toEqual(["apel"]);
  });

  it("mengabaikan spasi di awal dan akhir pencarian", () => {
    const results = filterProducts(catalog, "   sapi   ", "semua");
    expect(results.map((item) => item.slug)).toEqual(["daging-sapi"]);
  });

  it("memfilter berdasarkan kategori", () => {
    const results = filterProducts(catalog, "", "buah-sayur");
    expect(results).toHaveLength(2);
    expect(results.every((item) => item.category === "buah-sayur")).toBe(true);
  });

  it("menggabungkan filter kategori dan pencarian", () => {
    expect(filterProducts(catalog, "apel", "daging")).toEqual([]);
  });

  it("mencocokkan nama kategori pada pencarian", () => {
    const results = filterProducts(catalog, "frozen", "semua");
    expect(results.map((item) => item.slug)).toEqual(["nugget"]);
  });

  it("mengembalikan array kosong bila tidak ada hasil", () => {
    expect(filterProducts(catalog, "durian", "semua")).toEqual([]);
  });
});

describe("filterProducts sorting", () => {
  it("menempatkan produk unggulan lebih dulu pada urutan default", () => {
    const results = filterProducts(catalog, "", "semua", "default");
    expect(results.slice(0, 2).every((item) => item.featured)).toBe(true);
  });

  it("mengurutkan nama A-Z", () => {
    const results = filterProducts(catalog, "", "semua", "name-asc");
    expect(results.map((item) => item.name)).toEqual([
      "Apel",
      "Daging Sapi",
      "Nugget Ayam",
      "Pisang",
    ]);
  });

  it("mengurutkan nama Z-A", () => {
    const results = filterProducts(catalog, "", "semua", "name-desc");
    expect(results.map((item) => item.name)).toEqual([
      "Pisang",
      "Nugget Ayam",
      "Daging Sapi",
      "Apel",
    ]);
  });
});
