# Revou Milestone Project REST API

## 📌 Overview

Repositori ini berisi sebuah REST API untuk sebuah platform pemesanan tiket bioskop. Pengguna dapat melakukan autentikasi, melihat daftar film yang sedang tayang, memesan tiket untuk sebuah film, dan melihat riwayat pesanan tiket mereka. Selain itu, juga terdapat pengguna admin yang dapat menambah film, mengedit film, ataupun menghapus film. Pengguna admin juga dapat menambah dan menghapus jam tayang dari suatu film.

## 📦 Library Used

- Express: Library ini digunakan untuk melakukan pengembangan REST API dengan mudah
- Jest: Library ini digunakan untuk melakukan unit testing pada REST API
- Typescript: Library ini digunakan untuk tipe data pada bahasa Javascript
- Bcrypt: Library ini digunakan untuk melakukan _hashing_ password
- Jsonwebtoken: Library ini digunakan untuk membuat dan memverifikasi token autentikasi
- Mysql2: Library ini digunakan untuk berinteraksi dengan database mysql
- Supertest: Library ini digunakan untuk melakukan testing HTTP
- Dotenv: Library ini digunakan untuk memuat variabel dari file .env

## 📁 Folder Structure

- **doc**: Folder ini berisi dokumentasi REST API
- **src**: Direktori ini menyimpan semua kode untuk REST API.
  - **controllers**: Folder ini berisi kontroler untuk menangani permintaan masuk, memprosesnya, dan mengembalikan respons yang sesuai
  - **services**: Folder ini berisi layanan untuk mengimplentasi logika bisnis
  - **repositories**: Folder ini berisi repositori untuk melakukan interkasi dengan model dan melakukan operasi database
  - **models**: Folder ini berisi model data yang mewakili struktur entitas database
  - **middlewares**: Folder ini berisi kode middleware yang digunakan untuk melakukan operasi sebelum diteruskan ke handler rute
  - **routes**: Folder ini berisi definisi rute untuk REST API
  - **lib**: Folder ini berisi file database yang berujuan untuk menghubungkan REST API dengan database
  - **utils**: Folder ini berisi kode untuk utilitas pada REST API
  - **queries**: Folder ini berisi kueri mysql yang digunakan pasa REST API
  - **tests**: File ini berisi unit testing yang digunakan untuk pengujian REST API
  - **app.ts**: File ini berisi konfigurasi utama REST API, yang meliputi kontroler, rute, dan middleware yang digunakan.
  - **controllers.ts**: File ini berisi definisi kontroler dari folder controllers yang akan digunakan untuk REST API
  - **index.ts**: File ini merupakan file utama yang digunakan untuk menjalankan REST API

## 📊 Database Structure

Tabel yang digunakan pada database antara lain:

1. movies

| Column   | Data Type    | Not Null | Auto Increment | Key     | Default |
| -------- | ------------ | -------- | -------------- | ------- | ------- |
| id       | INT          | [✓]      | [✓]            | PRIMARY |         |
| title    | VARCHAR(100) |          |                |         |         |
| genre    | VARCHAR(200) |          |                |         |         |
| duration | INT          |          |                |         |         |
| synopsis | VARCHAR(100) |          |                |         |         |
| cast     | VARCHAR(100) |          |                |         |         |
| director | VARCHAR(100) |          |                |         |         |
| rating   | DECIMAL(2,1) |          |                |         |         |

2. showtime

| Column   | Data Type | Not Null | Auto Increment | Key     | Default |
| -------- | --------- | -------- | -------------- | ------- | ------- |
| id       | INT       | [✓]      | [✓]            | PRIMARY |         |
| movie_id | INT       |          |                | FOREIGN |         |
| showtime | TIME      |          |                |         |         |

3. ticket

| Column      | Data Type    | Not Null | Auto Increment | Key     | Default           |
| ----------- | ------------ | -------- | -------------- | ------- | ----------------- |
| id          | INT          | [✓]      | [✓]            | PRIMARY |                   |
| movie_id    | INT          |          |                | FOREIGN |                   |
| user_id     | INT          |          |                | FOREIGN |                   |
| showtime_id | INT          |          |                | FOREIGN |                   |
| seat        | INT          |          |                |         |                   |
| status      | VARCHAR(100) |          |                |         | 'Pending'         |
| created_at  | TIMESTAMP    |          |                |         | CURRENT_TIMESTAMP |

4. users

| Column   | Data Type    | Not Null | Auto Increment | Key     | Default |
| -------- | ------------ | -------- | -------------- | ------- | ------- |
| id       | INT          | [✓]      | [✓]            | PRIMARY |         |
| name     | VARCHAR(100) |          |                |         |         |
| email    | VARCHAR(200) |          |                |         |         |
| password | VARCHAR(100) |          |                |         |         |
| role     | VARCHAR(100) |          |                |         |         |

## 💻 Setup

1. Jalankan `npm install`
2. Ubah nama file `.env.example` menjadi `.env` and masukkan variabel yang diperlukan
3. Jalankan `npx tsc` untuk mengompilasi kode Typescript
4. Jalankan `npm start` untuk memulai aplikasi

aplikasi dapat dibuka pada [http://localhost:8082](http://localhost:8082).

## ⚙️ Testing

Testing yang dilakukan untuk REST API terdapat pada folder `tests`.

- **`booking.test.ts`**

  Testing yang dilakukan:

  - Mendapatkan riwayat pemesanan tiket dari pengguna

- **`movies.test.ts`**

  Testing yang dilakukan:

  - Mendapatkan daftar film yang sedang tayang
  - Mendapatkan detail dari film tertentu
  - Menambah film baru (user admin)
  - Mengubah detail film tertentu (user admin)
  - Menghapus film (user admin)

- **`showtime.test.ts`**

  Testing yang dilakukan:

  - Menambah jam tayang untuk film tertentu
  - Menghapus jam tanyang untuk film tertentu

- **`ticket.test.ts`**

  Testing yang dilakukan:

  - Melakukan pemesanan tiket

- **`ticket.test.ts`**

  Testing yang dilakukan:

  - Melakukan registrasi pengguna
  - Melakuakn login pengguna
