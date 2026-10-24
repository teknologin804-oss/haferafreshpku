# Aset Logo HAFERA FRESH

Logo resmi HAFERA FRESH tersimpan sebagai **`logo-emblem.webp`** (lingkaran
hijau-emas dengan simbol buah dan kepingan salju). Favicon memakai versi PNG
yang sama di `src/app/icon.png`.

Logo ini sudah dipakai di header, footer, dan favicon tanpa mengubah bentuk,
warna, atau proporsinya. Latar di luar lingkaran dibuat transparan agar menyatu
dengan header ivory.

## Mengganti logo di kemudian hari

1. Simpan logo baru dengan latar transparan, bentuk persegi, minimal 512 × 512 px.
2. Ekspor ke WebP/PNG dan timpa `logo-emblem.webp` (atau ubah
   `brandImages.logo` di `src/config/site.ts` bila memakai nama/format lain).
3. Perbarui `src/app/icon.png` dengan emblem yang sama.
4. Jangan mendistorsi logo: gunakan proporsi 1:1 dan `object-contain`/rasio asli.

Header menampilkan emblem pada 48–56 px dan menyertai wordmark "HAFERA FRESH"
dalam HTML agar nama merek tetap terbaca jelas di semua ukuran layar.
