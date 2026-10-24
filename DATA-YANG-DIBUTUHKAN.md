# Data yang Masih Dibutuhkan dari Pemilik

Nomor WhatsApp resmi dan logo sudah tersedia. Website masih berjalan dengan
**data contoh** untuk katalog. Sebelum dipublikasikan, lengkapi daftar berikut.
Jangan mengganti data contoh dengan perkiraan.

## A. Wajib sebelum publikasi

- [x] **Nomor WhatsApp resmi** +62 858-3902-5704 (tautan `6285839025704`),
      sudah diisi di `src/config/site.ts`.
- [ ] **Nama badan usaha/legal** dan ejaan merek resmi (saat ini
      "HAFERA FRESH").
- [ ] **Domain final** untuk `NEXT_PUBLIC_SITE_URL` (dipakai sitemap, robots,
      Open Graph). Sekaligus konfirmasi canonical.
- [x] **File logo asli** sudah dipasang di `public/brand/logo-emblem.webp`
      dan favicon `src/app/icon.png`.
- [ ] **Alamat lengkap** atau keputusan untuk tetap menampilkan
      "Pekanbaru, Riau" saja.
- [ ] **Jam operasional** dan waktu respons WhatsApp (saat ini tidak
      dicantumkan).
- [ ] **Email bisnis** (opsional; isi `NEXT_PUBLIC_CONTACT_EMAIL`).

## B. Katalog resmi

Saat ini 12 produk contoh ditandai "Contoh data". Untuk setiap produk, kirim:

| Field | Contoh | Catatan |
| --- | --- | --- |
| Nama produk | Apel Fuji | Nama yang dipakai di katalog |
| Kategori | Buah dan Sayuran | Salah satu: buah-sayur, frozen-food, daging, pangan-lain |
| Foto | `produk-apel.webp` | Foto asli, minimal 900 px sisi terpanjang |
| Deskripsi | … | Faktual, hindari klaim asal/sertifikasi tanpa bukti |
| Satuan penjualan | kg / karton / pack | Hanya diisi bila sudah fix |
| Harga | Rp … | Opsional; bila berubah-ubah, gunakan "Hubungi kami" |
| Ketersediaan | tersedia / inden | Status stok tidak ditampilkan jika tidak ada data |
| Catatan kemasan | … | Opsional |

Keputusan yang dibutuhkan:

- [ ] Apakah harga boleh ditampilkan di website? Jika ya, apakah harga grosir
      bertingkat?
- [ ] Apakah ada jumlah pesanan minimum?
- [ ] Produk apa saja yang benar-benar tersedia saat peluncuran?
- [ ] Apakah ada produk yang harus dihapus dari contoh (jangan tampilkan yang
      tidak dijual)?

## C. Operasional dan layanan

- [ ] Metode pembayaran yang diterima (transfer, tunai, tempo?).
- [ ] Area pengiriman dan apakah ada biaya kirim.
- [ ] Jadwal pengiriman dan batas waktu pemesanan.
- [ ] Kebijakan pembatalan/pengembalian bila ada.
- [ ] Layanan tambahan yang sudah pasti (mis. potong sesuai permintaan).
- [ ] Apakah melayani pengiriman ke luar Pekanbaru? Jika ya, ke mana saja?

## D. Konten perusahaan

- [ ] Sejarah singkat, tahun berdiri (jangan dicantumkan sebelum terverifikasi).
- [ ] Jumlah karyawan, kapasitas gudang, atau armada — hanya jika ingin
      dipublikasikan.
- [ ] Visi dan misi resmi (saat ini versi yang dapat diedit).
- [ ] Nilai perusahaan yang ingin ditonjolkan.
- [ ] Foto asli gudang, proses distribusi, dan tim (opsional tetapi disarankan).
- [ ] Testimoni asli beserta izin publikasi (nama dan foto). Selama belum ada,
      bagian testimoni tidak ditampilkan.
- [ ] Akun media sosial resmi (Facebook/Instagram/TikTok) bila tersedia.
- [ ] Klaim sertifikasi (halal, izin edar, BPOM, dll.) **hanya** jika dokumen
      resminya ada. Saat ini tidak ada klaim tersebut di website.

## E. Setelah data diterima

1. Isi environment variable di `.env.local` (pengembangan) dan hosting.
2. Perbarui `src/config/site.ts`, `src/data/products.ts`,
   `src/data/categories.ts`, dan `src/data/content.ts`.
3. Ganti foto di `public/images/` dan perbarui alt text.
4. Ubah `demo: true` menjadi `false` pada produk yang sudah resmi.
5. Jalankan `npm run typecheck && npm run lint && npm test && npm run build`.
6. Uji kembali tombol WhatsApp di ponsel, formulir, filter katalog, dan tautan
   internal.
7. Unggah `out/` ke hosting; pastikan `.htaccess` ikut.
