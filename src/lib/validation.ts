import { z } from "zod";
import { categories } from "@/data/categories";

export const customerTypes = [
  "Restoran / rumah makan",
  "Hotel / katering",
  "UMKM kuliner",
  "Toko / pedagang",
  "Supermarket / retail",
  "Lainnya",
] as const;

export type CustomerType = (typeof customerTypes)[number];

export const categoryOptions = [...categories.map((category) => category.slug), "campuran"] as const;
export type QuoteCategory = (typeof categoryOptions)[number];

const phonePattern = /^[+()\d\s-]{8,24}$/;

export const quoteRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter.")
    .max(80, "Nama maksimal 80 karakter."),
  customerType: z
    .string()
    .trim()
    .min(1, "Pilih jenis pelanggan.")
    .refine((value) => customerTypes.includes(value as CustomerType), {
      message: "Pilih jenis pelanggan dari daftar.",
    }),
  category: z
    .string()
    .trim()
    .min(1, "Pilih kategori kebutuhan.")
    .refine((value) => categoryOptions.includes(value as QuoteCategory), {
      message: "Pilih kategori dari daftar.",
    }),
  quantity: z.string().trim().max(80, "Estimasi jumlah maksimal 80 karakter.").optional().default(""),
  phone: z
    .string()
    .trim()
    .max(24, "Nomor kontak maksimal 24 karakter.")
    .refine(
      (value) =>
        value.length === 0 ||
        (phonePattern.test(value) && value.replace(/\D/g, "").length >= 8),
      {
        message: "Masukkan nomor yang valid, misalnya 0812 3456 7890.",
      },
    )
    .optional()
    .default(""),
  notes: z.string().trim().max(600, "Catatan maksimal 600 karakter.").optional().default(""),
});

export type QuoteRequestValues = z.input<typeof quoteRequestSchema>;
export type QuoteRequestParsed = z.output<typeof quoteRequestSchema>;

export function parseQuoteRequest(input: unknown) {
  return quoteRequestSchema.safeParse(input);
}

export function getCategoryLabel(value: string): string {
  if (value === "campuran") {
    return "Campuran / belum ditentukan";
  }

  return categories.find((category) => category.slug === value)?.name ?? value;
}
