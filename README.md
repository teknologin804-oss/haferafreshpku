# HAFERA FRESH — Website Perusahaan

Website profil dan katalog untuk **HAFERA FRESH**, distributor buah, sayuran,
daging, frozen food, dan produk pangan di Pekanbaru, Riau.

Arah desain: editorial ivory yang lapang dengan aksen deep emerald dan emas.
Hijau dipakai sebagai aksen (tombol, CTA, footer), bukan sebagai latar seluruh
halaman, agar konten mudah dibaca dan terasa premium.

Dibangun dengan Next.js App Router (static export), TypeScript strict, Tailwind
CSS v4, dan Lucide. Seluruh halaman dapat diunggah ke hosting statis/cPanel
maupun Vercel.

> **Status konten:** nomor WhatsApp resmi sudah terpasang, tetapi katalog masih
> memakai **data contoh**. Lihat [DATA-YANG-DIBUTUHKAN.md](DATA-YANG-DIBUTUHKAN.md)
> sebelum website dipublikasikan.

---

## 1. Menjalankan proyek

Prasyarat: Node.js 20.9+ (diuji pada Node 24) dan npm.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi ke folder `out/` (static export) |
| `npm run preview` | Menyajikan hasil `out/` secara lokal di port 3100 |
| `npm run typecheck` | Pemeriksaan TypeScript strict |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm test` | Unit test Vitest |

## 2. Konfigurasi

Salin `.env.example` menjadi `.env.local` untuk pengembangan, atau isi variabel
yang sama di dashboard hosting/Vercel. **Jangan** commit `.env.local`.

```bash
cp .env.example .env.local
```

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Opsional | Nomor resmi `6285839025704` sudah menjadi default di `src/config/site.ts`. Isi variabel ini hanya bila ingin merotasi nomor tanpa mengubah kode. Format internasional tanpa `+`, spasi, atau tanda hubung; nomor lokal `0812…` otomatis dinormalisasi. |
| `NEXT_PUBLIC_SITE_URL` | Ya, sebelum publikasi | URL publik penuh, tanpa slash di akhir. Dipakai untuk `sitemap.xml`, `robots.txt`, dan Open Graph. Contoh: `https://haferafresh.co.id`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Opsional | Jika pemilik ingin menampilkan email bisnis. |

Catatan penting:

- Konfigurasi dibaca **saat build**. Jika variabel diubah di hosting, lakukan
  build/deploy ulang.
- Nomor WhatsApp resmi: **+62 858-3902-5704** (tautan memakai `6285839025704`).
  Nomor tampil terformat di footer dan halaman kontak. Uji ulang tombol setelah
  mengganti nomor.
- Canonical sengaja tidak dipasang karena domain resmi belum dikonfirmasi.
  Setelah domain tetap, tambahkan `alternates.canonical` pada metadata halaman.
- Semua data bisnis terpusat di [`src/config/site.ts`](src/config/site.ts),
  katalog di [`src/data/products.ts`](src/data/products.ts), dan kategori di
  [`src/data/categories.ts`](src/data/categories.ts).

## 3. Logo

Logo resmi HAFERA FRESH sudah dipasang: `public/brand/logo-emblem.webp`
(lingkaran hijau-emas dengan simbol buah dan kepingan salju), dengan favicon di
`src/app/icon.png`. Header menampilkan emblem bersama wordmark HTML agar nama
merek tetap terbaca di ukuran kecil.

Untuk mengganti logo: timpa `logo-emblem.webp` dengan emblem persegi berlatar
transparan (minimal 512 px), perbarui `src/app/icon.png`, dan sesuaikan
`brandImages.logo` bila format berkas berbeda. Jangan mendistorsi proporsi.
Panduan ada di [`public/brand/README.md`](public/brand/README.md).

## 4. Mengganti foto

Semua foto berada di `public/images/` dalam format WebP lokal dan sudah
diperkecil (maksimal 1600 px) agar ringan. Static export memakai
`images.unoptimized`, sehingga ukuran dan format berkas yang Anda simpan adalah
yang dikirim ke browser — kompres sebelum mengganti foto besar. Ganti berkas
dengan nama yang sama agar halaman ikut berubah, dan perbarui alt text di data
terkait.

Foto saat ini adalah **stok ilustrasi** (Pexels) dan ditandai sebagai foto
ilustrasi pada halaman. Daftar sumber ada di
[`public/images/CREDITS.md`](public/images/CREDITS.md). Jangan menyajikan foto
stok sebagai dokumentasi fasilitas perusahaan.

## 5. Mengubah katalog

- Tambah/ubah produk di `src/data/products.ts` (slug unik, kategori, deskripsi,
  gambar, alt, `featured`).
- Ubah `demo: true` menjadi `false` setelah data resmi tersedia; badge "Contoh
  data" akan hilang.
- **Jangan** mencantumkan harga, satuan, atau stok jika belum dikonfirmasi
  pemilik. Halaman detail saat ini menampilkan "Hubungi kami untuk penawaran".
- Kategori baru perlu ditambahkan di `src/data/categories.ts` dan tipe
  `CategorySlug` di `src/types/catalog.ts`.
- Halaman detail produk dibuat otomatis dari slug saat build
  (`generateStaticParams`).

Layanan, segmen pelanggan, langkah pemesanan, nilai perusahaan, visi/misi, dan
FAQ berada di [`src/data/content.ts`](src/data/content.ts).

Testimoni berada di [`src/data/testimonials.ts`](src/data/testimonials.ts) dan
sengaja kosong. Selama kosong, bagian testimoni tidak ditampilkan sama sekali.
Tambahkan testimoni asli (dengan izin pelanggan) di array tersebut untuk
mengaktifkannya. Jangan mengisi nama atau ulasan fiktif.

## 6. Halaman dan fitur

| Rute | Isi |
| --- | --- |
| `/` | Hero, trust strip, kategori, produk unggulan, tentang, nilai layanan, solusi bisnis, alur pemesanan, CTA |
| `/tentang-kami` | Profil, nilai, visi & misi, segmen pelanggan |
| `/produk` | Katalog dengan pencarian, filter kategori (tersinkron ke URL), pengurutan, empty state |
| `/produk/[slug]` | Detail produk statis, informasi harga/satuan/ketersediaan, produk terkait |
| `/layanan` | Lima layanan dengan CTA kontekstual |
| `/cara-pemesanan` | Alur lima langkah, catatan pengiriman, FAQ |
| `/kontak` | Informasi kontak dan formulir permintaan penawaran |
| `/404` | Halaman 404 konsisten branding |

Fitur teknis:

- Header transparan di beranda dan solid saat scroll; menu seluler dengan focus
  trap, `Escape`, dan penguncian scroll.
- Animasi reveal ringan dengan `IntersectionObserver`; menghormati
  `prefers-reduced-motion`.
- WhatsApp terpusat di `src/lib/whatsapp.ts`, pesan di-`encodeURIComponent` dan
  menyertakan nama produk, kategori, serta tautan halaman.
- Formulir divalidasi dengan Zod di sisi klien, menampilkan error per field.
- Structured data `LocalBusiness` dan `Product`, metadata per halaman, sitemap,
  robots, Open Graph.

## 7. Alur formulir (tanpa backend)

Website ini **tidak memiliki backend, database, atau penyimpanan data**. Formulir
permintaan penawaran:

1. Memvalidasi input di browser.
2. Menyusun pesan WhatsApp yang rapi.
3. Menampilkan panel "Pesan siap dikirim" dengan tautan WhatsApp.
4. Pesan baru terkirim setelah pengguna menekan tombol kirim di WhatsApp.

Tidak ada klaim bahwa formulir tersimpan di server. Bila nanti dibutuhkan
penyimpanan lead, buat endpoint terpisah dengan validasi server, proteksi spam,
dan penyimpanan database yang aman.

## 8. Build dan deploy

```bash
npm run build
```

Hasil static export ada di `out/`.

### Vercel

- Import repositori, framework terdeteksi sebagai Next.js.
- Tambahkan environment variables di atas untuk Production dan Preview.
- Build command `npm run build`; Vercel menangani output statis.
- Lakukan build ulang setelah mengubah environment variables.

### cPanel / XAMPP

1. Jalankan `npm run build`.
   Build ini juga menjalankan `scripts/flatten-rsc-payloads.mjs`, adapter pasca-build
   yang memperbaiki bug Next.js 16 (issue #85374): payload RSC ditulis sebagai
   folder bersarang sementara klien meminta berkas datar bertitik, sehingga
   navigasi klien menghasilkan 404 di hosting statis. Skrip ini menambahkan alias
   berkas datar sehingga navigasi antar-halaman berjalan tanpa error console.
2. Unggah **isi** folder `out/` ke `public_html/` (atau folder domain).
3. Pastikan `public/.htaccess` ikut terunggah; berkas ini mengatur
   `DirectoryIndex` dan `ErrorDocument 404 /404.html`.
4. Aktifkan HTTPS dan arahkan `NEXT_PUBLIC_SITE_URL` ke domain final, lalu build
   ulang sebelum mengunggah.
5. Untuk pengujian lokal XAMPP, letakkan isi `out/` di
   `C:\xampp\htdocs\haferafreshpku` dan buka `http://localhost/haferafreshpku/`.
   Jika situs berada di subfolder, tambahkan `basePath` pada `next.config.ts`
   dan build ulang.

## 9. Pemeriksaan yang sudah dijalankan

Pada versi ini:

- `npm run typecheck` — lolos (TypeScript strict).
- `npm run lint` — lolos tanpa error/warning.
- `npm test` — 28 unit test lolos (WhatsApp, katalog, validasi).
- `npm run build` — lolos; 23 halaman statis termasuk 12 detail produk,
  `sitemap.xml`, dan `robots.txt`.
- Uji browser pada 320 px, 375 px, dan 1440 px: tidak ada horizontal overflow.
- Navigasi, menu seluler, filter/pencarian katalog, empty state, detail produk,
  validasi formulir, serta tautan WhatsApp diperiksa di browser.

Nomor WhatsApp resmi (+62 858-3902-5704) dan logo asli sudah dipasang serta
diperiksa pada tautan dan header.

Yang **belum** dapat diverifikasi karena data belum tersedia: domain final,
harga dan stok aktual, alamat lengkap, foto produk asli, testimoni asli, dan
skor Lighthouse final.

## 10. Struktur folder

```
src/
  app/            Halaman App Router, layout, sitemap, robots, 404
  components/     Header, footer, kartu produk, katalog, formulir, UI
  config/         Identitas merek dan kontak terpusat
  data/           Katalog contoh, kategori, layanan, konten
  lib/            WhatsApp, filter katalog, validasi Zod, util, unit test
  types/          Tipe katalog
public/
  brand/          Logo resmi (emblem) + panduan penggantian
  images/         Foto WebP lokal + kredit
```

## 11. Catatan keamanan

- Tidak ada API key, token, atau kredensial di kode frontend.
- Nomor WhatsApp publik tersimpan terpusat di config dan dapat ditimpa lewat environment.
- Input pengguna tidak pernah dieksekusi sebagai HTML; pesan di-encode sebelum
  menjadi URL.
- Tautan eksternal memakai `rel="noopener noreferrer"`.
- Jangan menambahkan dashboard admin/inventaris ke static export ini tanpa
  otorisasi server yang aman.
