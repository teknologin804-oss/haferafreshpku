export interface Service {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  icon: "apple" | "snowflake" | "beef" | "chat" | "quote";
  categorySlug?: string;
}

export const services: Service[] = [
  {
    slug: "buah-sayur",
    title: "Pasokan Buah dan Sayuran",
    summary: "Buah dan sayuran untuk kebutuhan dapur, katering, dan penjualan kembali.",
    detail:
      "Pilih jenis buah dan sayuran sesuai kebutuhan menu atau toko Anda. Jumlah, ukuran, dan ketersediaan dikonfirmasi terlebih dahulu agar pesanan sesuai rencana penggunaan.",
    icon: "apple",
    categorySlug: "buah-sayur",
  },
  {
    slug: "frozen-food",
    title: "Pasokan Frozen Food",
    summary: "Produk beku praktis untuk mempercepat penyajian menu sehari-hari.",
    detail:
      "Produk beku seperti nugget dan kentang goreng dapat membantu menyiapkan menu dengan alur kerja yang lebih ringkas. Penanganan dan penyimpanan produk dijelaskan saat konfirmasi pesanan.",
    icon: "snowflake",
    categorySlug: "frozen-food",
  },
  {
    slug: "daging",
    title: "Pasokan Daging",
    summary: "Daging sapi, unggas, dan hasil laut untuk kebutuhan masak skala bisnis.",
    detail:
      "Sampaikan jenis dan perkiraan jumlah daging yang dibutuhkan. Tim HAFERA FRESH akan mengonfirmasi potongan, ketersediaan, serta detail pesanan sebelum diproses.",
    icon: "beef",
    categorySlug: "daging",
  },
  {
    slug: "konsultasi-grosir",
    title: "Konsultasi Kebutuhan Grosir",
    summary: "Diskusikan kebutuhan pasokan rutin bersama tim HAFERA FRESH.",
    detail:
      "Ceritakan jenis usaha, menu yang sering disiapkan, dan perkiraan kebutuhan bahan baku. Tim akan membantu menyusun daftar produk yang sesuai dengan kebutuhan tersebut.",
    icon: "chat",
  },
  {
    slug: "permintaan-penawaran",
    title: "Permintaan Penawaran Bisnis",
    summary: "Ajukan permintaan penawaran untuk pembelian dalam jumlah tertentu.",
    detail:
      "Isi detail kebutuhan melalui formulir atau WhatsApp. Harga, satuan, jadwal, dan biaya pengiriman akan dikonfirmasi langsung oleh tim HAFERA FRESH sesuai volume pesanan.",
    icon: "quote",
  },
];

export interface Segment {
  slug: string;
  title: string;
  description: string;
  icon: "utensils" | "hotel" | "store" | "chef";
}

export const segments: Segment[] = [
  {
    slug: "restoran",
    title: "Restoran dan Rumah Makan",
    description: "Pasokan bahan baku untuk menu harian dengan kebutuhan yang dapat didiskusikan.",
    icon: "utensils",
  },
  {
    slug: "hotel-katering",
    title: "Hotel dan Katering",
    description: "Dukungan pasokan untuk acara, menu rutin, dan kebutuhan dapur dalam jumlah besar.",
    icon: "hotel",
  },
  {
    slug: "toko",
    title: "Toko dan Pedagang",
    description: "Pilihan produk untuk dijual kembali dengan volume yang menyesuaikan kebutuhan.",
    icon: "store",
  },
  {
    slug: "umkm",
    title: "Usaha Kuliner",
    description: "Pasokan untuk kafe, kedai, dan usaha kuliner yang sedang bertumbuh.",
    icon: "chef",
  },
];

export interface ValueItem {
  title: string;
  description: string;
}

export const serviceValues: ValueItem[] = [
  {
    title: "Pilihan Produk Sesuai Kebutuhan",
    description:
      "Katalog disusun agar Anda mudah menemukan kategori buah, sayuran, daging, frozen food, dan bahan pangan pendukung.",
  },
  {
    title: "Komunikasi Pemesanan yang Mudah",
    description:
      "Pemesanan dimulai melalui percakapan langsung, sehingga pertanyaan tentang produk bisa dijawab lebih jelas.",
  },
  {
    title: "Melayani Kebutuhan Bisnis",
    description:
      "Pemesanan dapat didiskusikan untuk kebutuhan restoran, katering, toko, dan usaha kuliner lainnya.",
  },
  {
    title: "Informasi Produk yang Jelas",
    description:
      "Ketersediaan, satuan, dan penawaran harga dikonfirmasi sebelum pesanan diproses agar tidak ada perkiraan yang menyesatkan.",
  },
];

export const orderSteps = [
  {
    step: "01",
    title: "Pilih kategori atau produk",
    description:
      "Telusuri katalog HAFERA FRESH dan catat produk yang ingin ditanyakan atau dipesan.",
  },
  {
    step: "02",
    title: "Hubungi tim HAFERA FRESH",
    description:
      "Gunakan tombol WhatsApp atau formulir permintaan penawaran untuk memulai percakapan.",
  },
  {
    step: "03",
    title: "Konfirmasi stok, satuan, dan harga",
    description:
      "Tim akan mengonfirmasi ketersediaan, satuan penjualan, dan penawaran harga sesuai kebutuhan Anda.",
  },
  {
    step: "04",
    title: "Sepakati jumlah, pembayaran, dan pengiriman",
    description:
      "Jumlah pesanan, metode pembayaran, jadwal, serta biaya pengiriman dibicarakan sebelum pesanan diproses.",
  },
  {
    step: "05",
    title: "Pesanan diproses setelah disetujui",
    description:
      "Setelah semua detail disepakati, pesanan diproses sesuai kesepakatan yang telah dibuat.",
  },
];

export const faqs = [
  {
    question: "Apakah harga produk sudah tercantum di website?",
    answer:
      "Belum. Katalog di website ini masih berupa data contoh dan belum memuat harga resmi. Harga, satuan, dan ketersediaan akan dikonfirmasi langsung oleh tim HAFERA FRESH melalui WhatsApp atau formulir penawaran.",
  },
  {
    question: "Bagaimana cara mengetahui ketersediaan stok?",
    answer:
      "Ketersediaan produk berubah dari waktu ke waktu. Tanyakan produk yang Anda butuhkan melalui WhatsApp, lalu tim akan mengonfirmasi stok terkini sebelum pesanan diproses.",
  },
  {
    question: "Apakah ada jumlah pesanan minimum?",
    answer:
      "Ketentuan jumlah minimum belum dipublikasikan di website. Silakan sampaikan perkiraan kebutuhan Anda, lalu tim HAFERA FRESH akan menjelaskan ketentuan yang berlaku.",
  },
  {
    question: "Bagaimana jadwal dan biaya pengiriman?",
    answer:
      "Jadwal dan biaya pengiriman dikonfirmasi saat pemesanan, menyesuaikan lokasi serta jumlah pesanan. Belum ada janji pengiriman instan yang ditampilkan di website ini.",
  },
  {
    question: "Metode pembayaran apa yang tersedia?",
    answer:
      "Metode pembayaran dibicarakan bersama saat konfirmasi pesanan. Website belum menampilkan simulasi pembayaran atau menyimpan data transaksi.",
  },
];

export const aboutValues = [
  {
    title: "Kejelasan Informasi",
    description:
      "Produk, satuan, dan harga dikonfirmasi sebelum pesanan diproses, sehingga pelanggan memahami detail yang disepakati.",
  },
  {
    title: "Komunikasi Langsung",
    description:
      "Setiap kebutuhan dapat didiskusikan melalui WhatsApp atau formulir penawaran agar tim memahami konteks bisnis Anda.",
  },
  {
    title: "Fokus pada Kebutuhan Bisnis",
    description:
      "Layanan diarahkan untuk dapur, toko, dan usaha kuliner yang membutuhkan pasokan bahan pangan secara teratur.",
  },
];
