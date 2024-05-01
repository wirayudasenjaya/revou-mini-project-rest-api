# Revou Milestone Project REST API

## Overview
Repositori ini berisi sebuah REST API untuk sebuah platform pemesanan tiket bioskop. Pengguna dapat melakukan autentikasi, melihat daftar film yang sedang tayang, memesan tiket untuk sebuah film, dan melihat riwayat pesanan tiket mereka. Selain itu, juga terdapat pengguna admin yang dapat menambah film, mengedit film, ataupun menghapus film. Pengguna admin juga dapat menambah dan menghapus jam tayang dari suatu film.

## Library Used
- Express: Library ini digunakan untuk melakukan pengembangan REST API dengan mudah
- Jest: Library ini digunakan untuk melakukan unit testing pada REST API
- Typescript: Library ini digunakan untuk tipe data pada bahasa Javascript
- Bcrypt: Library ini digunakan untuk melakukan *hashing* password
- Jsonwebtoken: Library ini digunakan untuk membuat dan memverifikasi token autentikasi
- Mysql2: Library ini digunakan untuk berinteraksi dengan database mysql
- Supertest: Library ini digunakan untuk melakukan testing HTTP
- Dotenv: Library ini digunakan untuk memuat variabel dari file .env

## Folder Structure
- **doc**: Folder ini berisi dokumentasi REST API
- **src**: Direktori ini menyimpan semua kode untuk REST API.
	- **controllers**: Folder ini berisi kontroler untuk menangani permintaan masuk, memprosesnya, dan mengembalikan respons yang sesuai
	- **services**: Folder ini berisi layanan  untuk mengimplentasi logika bisnis
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


