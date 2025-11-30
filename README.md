# MathVision 🧮

MathVision adalah platform matematika pintar berbasis web yang dibangun dengan MEVN Stack (MongoDB, Express.js, Vue.js, Node.js). Aplikasi ini menggabungkan kemampuan OCR untuk memindai soal, kalkulator canggih dengan langkah-langkah penyelesaian, visualisasi grafik interaktif, dan asisten belajar berbasis AI.

## 🚀 Fitur Utama

- **OCR Scanner**: Pindai soal matematika dari gambar menggunakan Tesseract.js.
- **Smart Calculator**: Selesaikan ekspresi matematika kompleks dengan langkah-langkah (step-by-step).
- **Graphing Engine**: Visualisasikan fungsi matematika dalam grafik 2D interaktif.
- **History & Tracking**: Simpan riwayat perhitungan dan pemindaian Anda.
- **AI Tutor**: Chat dengan asisten AI untuk penjelasan konsep matematika.
- **User System**: Autentikasi pengguna aman dengan JWT.

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3, Vite, Pinia, Vue Router, Chart.js, Katex.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT.
- **Tools**: Tesseract.js (OCR), Math.js (Calculation).

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (v14 atau lebih baru)
- [MongoDB](https://www.mongodb.com/try/download/community) (Pastikan service MongoDB berjalan)

## ⚡ Cara Menjalankan (Quick Start)

### 1. Setup Backend

```bash
cd backend
npm install
cp .env.example .env # Sesuaikan konfigurasi jika perlu
npm start
```

Server backend akan berjalan di `http://localhost:5000`.

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplikasi frontend akan berjalan di `http://localhost:5173`.

## 📚 Dokumentasi

Panduan lengkap cara setup di local dapat dilihat di [docs/setup_local.md](docs/setup_local.md).
