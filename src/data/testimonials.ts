export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  business?: string;
}

/**
 * Testimoni asli pelanggan.
 *
 * Sengaja dikosongkan. Jangan menambahkan nama, foto, atau ulasan fiktif.
 * Setelah pemilik memperoleh izin publikasi dari pelanggan, tambahkan datanya
 * di sini; komponen Testimonials akan tampil otomatis di beranda.
 */
export const testimonials: Testimonial[] = [];
