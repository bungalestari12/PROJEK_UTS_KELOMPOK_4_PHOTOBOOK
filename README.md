# PhotoBook - Aplikasi Pemesanan Jasa Fotografi

## 1. Deskripsi Project
PhotoBook merupakan aplikasi berbasis REST API yang digunakan untuk mengelola pemesanan jasa fotografi. Aplikasi ini dibuat untuk memudahkan pengguna dalam melihat daftar fotografer, melakukan pemesanan jasa fotografi, mencari data pemesanan, mengubah data, dan menghapus pemesanan.

Project ini dibuat menggunakan Node.js dan Express.js, serta diuji menggunakan Postman.

## 2. Teknologi yang Digunakan
- Node.js
- Express.js
- JavaScript
- Postman
- Visual Studio Code

## 3. Fitur Aplikasi
1. Menampilkan informasi aplikasi.
2. Menampilkan daftar fotografer.
3. Mencari fotografer berdasarkan ID.
4. Menampilkan seluruh data pemesanan.
5. Menambahkan data pemesanan.
6. Mencari pemesanan berdasarkan ID.
7. Mengubah data pemesanan.
8. Menghapus data pemesanan.


## 4. Daftar Endpoint API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /info | Melihat informasi aplikasi |
| GET | /fotografer | Melihat semua fotografer |
| GET | /fotografer/:id | Mencari fotografer berdasarkan ID |
| GET | /pemesanan | Melihat semua pemesanan |
| POST | /pemesanan | Menambahkan pemesanan |
| GET | /pemesanan/:id | Mencari pemesanan berdasarkan ID |
| PUT | /pemesanan/:id | Mengubah pemesanan |
| DELETE | /pemesanan/:id | Menghapus pemesanan |


## 5. Penyimpanan Data
Data aplikasi disimpan menggunakan array dan object literal pada file data/data.js. Data pemesanan disimpan sementara di dalam memori aplikasi sehingga data akan kembali kosong ketika server dimulai ulang.

## 6. Pengujian
Seluruh endpoint diuji menggunakan Postman untuk memastikan fitur GET, POST, PUT, dan DELETE dapat berjalan dengan baik.

## 7. Penutup
PhotoBook merupakan project REST API sederhana untuk pengelolaan pemesanan jasa fotografi. Project ini menerapkan konsep routing, controller, module, array, object literal, serta operasi CRUD menggunakan Node.js dan Express.js.
