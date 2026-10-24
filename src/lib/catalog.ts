import { getCategoryName } from "@/data/categories";
import type { CategorySlug, Product, ProductSort } from "@/types/catalog";

export type CategoryFilter = CategorySlug | "semua";

export function normalizeSearchTerm(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function filterProducts(
  products: Product[],
  query: string,
  category: CategoryFilter,
  sort: ProductSort = "default",
): Product[] {
  const term = normalizeSearchTerm(query);

  const filtered = products.filter((product) => {
    const matchesCategory = category === "semua" || product.category === category;

    if (!matchesCategory) {
      return false;
    }

    if (term.length === 0) {
      return true;
    }

    const haystack = normalizeSearchTerm(
      [product.name, product.summary, getCategoryName(product.category)].join(" "),
    );

    return haystack.includes(term);
  });

  const sorted = [...filtered];

  switch (sort) {
    case "name-asc":
      sorted.sort((a, b) => a.name.localeCompare(b.name, "id"));
      break;
    case "name-desc":
      sorted.sort((a, b) => b.name.localeCompare(a.name, "id"));
      break;
    case "category":
      sorted.sort((a, b) => {
        const byCategory = getCategoryName(a.category).localeCompare(getCategoryName(b.category), "id");
        return byCategory !== 0 ? byCategory : a.name.localeCompare(b.name, "id");
      });
      break;
    case "default":
    default:
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
      break;
  }

  return sorted;
}
