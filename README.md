- Fitur yang diimplementasikan 🔎
Form Input Data	-> Mahasiswa dapat mengisi data pemesanan bahan ajar.
Validasi Form	-> Memastikan semua kolom terisi sebelum data dikirim.
Manipulasi DOM	-> Data form ditambahkan ke tabel secara dinamis tanpa refresh halaman.
Interaksi UI (Alert, Confirm)	-> Memberi feedback saat berhasil menambah/menghapus data.
Desain Modular	-> HTML, CSS, dan JS dipisahkan dalam file berbeda (modular).
Responsif & Modern UI	-> Menggunakan box-shadow dan border-radius.

- Analisis kebutuhan:
Sistem SITTA membutuhkan form pemesanan bahan ajar dan tabel untuk melihat pesanan.

- Perancangan struktur HTML semantik:
Menggunakan elemen <header>, <main>, <section>, <table>, <form> agar mudah dipahami dan valid secara struktur.

- Desain antarmuka (CSS):
Membuat UI bersih, profesional, dan mudah dibaca. Menggunakan external CSS untuk pemisahan concern, dan inline CSS untuk interaksi dinamis (contoh tombol hapus).

- Interaktivitas (JavaScript DOM):
Menggunakan event addEventListener() untuk form.
Mengambil nilai input dengan getElementById.
Menambahkan data ke tabel secara dinamis dengan createElement() dan innerHTML.
Menghapus data menggunakan event delegation.
Menampilkan feedback dengan alert() dan confirm().

- Validasi & Feedback:
Jika input kosong atau tidak valid, tampilkan pesan kesalahan. Jika berhasil, tampilkan pesan sukses.

- Pengujian:
Coba submit form kosong → tampilkan peringatan.
Isi data lengkap → data tampil di tabel.
Klik hapus → tampilkan konfirmasi.
