# Pembuat Kode QR

Ini adalah aplikasi web sederhana untuk membuat kode QR secara lokal di browser Anda. Aplikasi ini cepat, berfungsi offline, dan menjaga privasi data Anda.

## Fitur

*   **Pembuatan Lokal:** Kode QR dibuat langsung di browser Anda, jadi tidak ada data yang dikirim ke server.
*   **Berfungsi Offline:** Setelah dimuat, aplikasi ini berfungsi sepenuhnya secara offline.
*   **Unduh sebagai PNG atau JPG:** Anda dapat mengunduh kode QR yang dibuat sebagai file PNG atau JPG.
*   **Salin ke Papan Klip:** Salin teks input ke papan klip dengan mudah.
*   **Bersihkan Input:** Bersihkan kolom input dan kode QR dengan satu klik.
*   **Peringatan Input Kosong:** Memberikan peringatan jika input kosong saat mencoba membuat QR Code.
*   **Antarmuka Sederhana:** Antarmuka yang bersih dan mudah digunakan.

## Cara Menggunakan

1.  Buka `public/index.html` di browser web Anda.
2.  Masukkan teks atau URL ke dalam kolom input.
3.  Klik tombol "Buat QR".
4.  Kode QR akan muncul di bawah.
5.  Pilih format unduhan (PNG atau JPG).
6.  Klik tombol "Unduh QR Code" untuk menyimpan kode QR.
7.  Klik tombol "Salin Teks" untuk menyalin teks input ke papan klip.
8.  Klik tombol "Bersihkan" untuk menghapus input dan kode QR.

## Pengembangan

Aplikasi ini dibuat dengan HTML, Tailwind CSS, dan JavaScript. Untuk memodifikasi gaya:

1.  Edit `src/input.css`.
2.  Jalankan perintah berikut untuk membangun kembali file CSS:

    ```bash
    npm run build
    ```
