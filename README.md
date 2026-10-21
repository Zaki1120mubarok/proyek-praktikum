# Katalog Menu Restoran (`restoran-app`)

Aplikasi web berbasis React dan Vite yang dirancang untuk menampilkan daftar menu makanan dan minuman secara dinamis. Proyek ini dibuat untuk memenuhi tugas praktikum mata kuliah Pemrograman Web II pada Program Studi Informatika, Universitas Nurul Huda.

---

## Daftar Komponen & Props

Aplikasi ini dibangun menggunakan prinsip komponen yang modular dan *reusable*:

### 1. `MenuCard` (`src/components/MenuCard.jsx`)
Komponen utama untuk menampilkan kartu informasi setiap menu.
* **`nama`** (`String`): Nama dari item menu makanan atau minuman (contoh: `"Nasi Goreng Special"`).
* **`harga`** (`Number`): Nominal harga menu dalam angka (contoh: `25000`).
* **`kategori`** (`String`): Jenis kelompok menu (contoh: `"Makanan"` atau `"Minuman"`).
* **`tersedia`** (`Boolean`): Status ketersediaan stok menu (`true` untuk tersedia, `false` jika stok habis).

---

## Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal:

1. **Clone Repositori**
   ```bash
   git clone [https://github.com/Zaki1120mubarok/restoran-app.git](https://github.com/Zaki1120mubarok/restoran-app.git)
   cd restoran-app

## penggunaan AI
Selama proses pengerjaan tugas proyek ini, bantuan AI (Gemini) dimanfaatkan secara jujur dan transparan untuk:

Pemecahan Masalah (Troubleshooting): Membantu menganalisis dan menyelesaikan pesan galat (error) saat proses build serta kendala sintaksis pada Git.

Pemahaman Konsep: Membantu memahami penerapan props destructuring dan conditional rendering (operator ternari) pada komponen React.

Penyusunan Dokumentasi: Membantu memformulasi struktur berkas README.md agar rapi dan sesuai dengan pedoman lembar kerja.

Seluruh kode yang dihasilkan dari bantuan AI telah dipelajari, dipahami, dan disesuaikan sendiri sesuai kebutuhan proyek.