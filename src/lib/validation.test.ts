import { describe, expect, it } from "vitest";
import { getCategoryLabel, parseQuoteRequest } from "@/lib/validation";

const validInput = {
  name: "Sari Wulandari",
  customerType: "Restoran / rumah makan",
  category: "buah-sayur",
  quantity: "20 kg per minggu",
  phone: "0812 3456 7890",
  notes: "Untuk kebutuhan menu harian.",
};

describe("parseQuoteRequest", () => {
  it("lolos untuk data yang valid", () => {
    const result = parseQuoteRequest(validInput);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Sari Wulandari");
      expect(result.data.category).toBe("buah-sayur");
    }
  });

  it("menolak nama yang terlalu pendek", () => {
    const result = parseQuoteRequest({ ...validInput, name: "A" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("Nama minimal 2 karakter.");
    }
  });

  it("menolak jenis pelanggan di luar daftar", () => {
    const result = parseQuoteRequest({ ...validInput, customerType: "Pengecer misterius" });
    expect(result.success).toBe(false);
  });

  it("menolak kategori di luar daftar", () => {
    const result = parseQuoteRequest({ ...validInput, category: "minuman" });
    expect(result.success).toBe(false);
  });

  it("menolak nomor kontak yang tidak valid", () => {
    const result = parseQuoteRequest({ ...validInput, phone: "abc" });
    expect(result.success).toBe(false);
  });

  it("menolak nomor yang hanya berisi tanda baca", () => {
    const result = parseQuoteRequest({ ...validInput, phone: "--------" });
    expect(result.success).toBe(false);
  });

  it("mengizinkan nomor kontak kosong", () => {
    const result = parseQuoteRequest({ ...validInput, phone: "" });
    expect(result.success).toBe(true);
  });

  it("menolak catatan yang melebihi 600 karakter", () => {
    const result = parseQuoteRequest({ ...validInput, notes: "a".repeat(601) });
    expect(result.success).toBe(false);
  });

  it("mengisi field opsional dengan string kosong", () => {
    const result = parseQuoteRequest({
      name: "Budi",
      customerType: "Toko / pedagang",
      category: "campuran",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.notes).toBe("");
      expect(result.data.phone).toBe("");
      expect(result.data.quantity).toBe("");
    }
  });
});

describe("getCategoryLabel", () => {
  it("mengembalikan label kategori yang sesuai", () => {
    expect(getCategoryLabel("daging")).toBe("Daging");
    expect(getCategoryLabel("campuran")).toBe("Campuran / belum ditentukan");
  });
});
