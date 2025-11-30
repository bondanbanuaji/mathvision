# Panduan Setup Lokal MathVision 💻

Dokumen ini menjelaskan langkah-langkah lengkap untuk menjalankan aplikasi MathVision di komputer lokal Anda.

## 📋 Persiapan Awal (Prerequisites)

Pastikan software berikut sudah terinstal di komputer Anda:

1.  **Node.js & NPM**
    *   Download: [https://nodejs.org/](https://nodejs.org/)
    *   Cek versi: `node -v` (Minimal v14.x) dan `npm -v`

2.  **MongoDB Community Server**
    *   Download: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
    *   Pastikan service MongoDB sudah berjalan.
    *   Cek status (Linux/Mac): `sudo systemctl status mongod`
    *   Cek status (Windows): Cek di Services management console.

3.  **Git** (Opsional, untuk clone repository)
    *   Download: [https://git-scm.com/](https://git-scm.com/)

---

## 🚀 Langkah 1: Setup Backend (Server)

Backend bertugas menangani logika aplikasi, database, dan API.

1.  **Buka Terminal** dan masuk ke folder `backend`:
    ```bash
    cd backend
    ```

2.  **Install Dependencies**:
    Download semua library yang dibutuhkan (Express, Mongoose, dll).
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variables**:
    Buat file `.env` di dalam folder `backend`. Anda bisa menyalin dari contoh berikut:

    **File: `backend/.env`**
    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/mathvision
    JWT_SECRET=rahasia_super_aman_ganti_ini_ya
    JWT_EXPIRE=30d
    ```
    *   `MONGO_URI`: Alamat database MongoDB lokal Anda.
    *   `JWT_SECRET`: Kunci rahasia untuk token login (bisa diisi random string).

4.  **Jalankan Server**:
    ```bash
    npm start
    ```
    Jika berhasil, Anda akan melihat pesan:
    ```
    [INFO] ... - Server running in development mode on port 5000
    [INFO] ... - MongoDB Connected: localhost
    ```

    > **Masalah Umum:** Jika error "Connection refused", pastikan MongoDB sudah berjalan.

---

## 🎨 Langkah 2: Setup Frontend (Client)

Frontend adalah antarmuka pengguna yang dibangun dengan Vue.js.

1.  **Buka Terminal Baru** (biarkan terminal backend tetap berjalan) dan masuk ke folder `frontend`:
    ```bash
    cd frontend
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Jalankan Development Server**:
    ```bash
    npm run dev
    ```

4.  **Buka Aplikasi**:
    Buka browser dan kunjungi alamat yang muncul di terminal, biasanya:
    [http://localhost:5173](http://localhost:5173)

---

## 🧪 Langkah 3: Verifikasi Instalasi

1.  **Register Akun**:
    *   Buka halaman Register di frontend.
    *   Buat akun baru. Jika berhasil masuk ke Dashboard, berarti koneksi Database dan Auth berfungsi.

2.  **Coba Fitur**:
    *   Masuk ke menu **Calculator**.
    *   Ketik `2 + 2` dan tekan Solve.
    *   Jika muncul hasil `4`, berarti API Backend berfungsi.

---

## ❓ Troubleshooting

*   **Error: `mongod: command not found`**
    *   Pastikan MongoDB sudah terinstall dan path-nya sudah benar.
    *   Coba jalankan service MongoDB secara manual.

*   **Error: `EADDRINUSE: address already in use :::5000`**
    *   Port 5000 sedang dipakai aplikasi lain. Matikan aplikasi tersebut atau ubah `PORT` di file `backend/.env`.

*   **Frontend tidak bisa connect ke Backend**
    *   Pastikan backend berjalan di port 5000.
    *   Cek konfigurasi proxy di `frontend/vite.config.js`.

---

Selamat! Anda siap mengembangkan MathVision. 🚀
