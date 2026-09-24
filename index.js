const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =========================================================================
// DATA DUMMY RIWAYAT PEMINJAMAN
// =========================================================================
let riwayatPeminjamanData = [
    {
        id: 'TRX-1001',
        judul: '3726 Mdpl',
        penulis: 'Nurwina Sari',
        tglPinjam: '2026-09-10',
        tglKembali: '2026-09-17',
        status: 'dipinjam'
    },
    {
        id: 'TRX-1002',
        judul: 'Bandung After Rain',
        penulis: 'Aulia Salsabila',
        tglPinjam: '2026-08-01',
        tglKembali: '2026-08-08',
        status: 'dikembalikan'
    }
];

// =========================================================================
// DATA KATALOG BUKU (10 NOVEL + 10 KOMIK)
// =========================================================================
const katalogBukuData = [
    // --- NOVEL / FIKSI ---
    { 
        id: 1, 
        judul: '3726 Mdpl', 
        pengarang: 'Nurwina Sari', 
        kategori: 'Fiksi / Novel', 
        stok: 5, 
        cover: '/img/novel1.png',
        preview: 'Perjalanan mendaki gunung yang membawa kisah cinta, persahabatan, dan perjuangan di puncaknya...'
    },
    { 
        id: 2, 
        judul: 'Bandung After Rain', 
        pengarang: 'Aulia Salsabila', 
        kategori: 'Fiksi / Novel', 
        stok: 0, 
        cover: '/img/novel2.png',
        preview: 'Kisah romansa manis dan kenangan indah di kota Bandung setelah hujan reda...'
    },
    { 
        id: 3, 
        judul: 'Saat-Saat Jauh', 
        pengarang: 'Lia Seplia', 
        kategori: 'Fiksi / Novel', 
        stok: 12, 
        cover: '/img/novel3.png',
        preview: 'Tentang jarak yang memisahkan dan rindu yang tak pernah usai...'
    },
    { 
        id: 4, 
        judul: 'Kado Terbaik', 
        pengarang: 'J.S. Khairen', 
        kategori: 'Fiksi / Novel', 
        stok: 4, 
        cover: '/img/novel4.png',
        preview: 'Kisah perjuangan hidup dan hadiah tak ternilai dari takdir...'
    },
    { 
        id: 5, 
        judul: 'The Lover Next Door', 
        pengarang: 'Masae N.S.', 
        kategori: 'Fiksi / Novel', 
        stok: 8, 
        cover: '/img/novel5.png',
        preview: 'Kisah tentang tetangga sebelah rumah yang menyimpan banyak rahasia menarik...'
    },
    { 
        id: 6, 
        judul: 'Novel Koleksi Seri 6', 
        pengarang: 'Penulis Bestseller 6', 
        kategori: 'Fiksi / Novel', 
        stok: 10, 
        cover: '/img/novel6.jpg',
        preview: 'Kisah menarik edisi keenam dari petualangan novel fiksi...'
    },
    { 
        id: 7, 
        judul: 'Novel Koleksi Seri 7', 
        pengarang: 'Penulis Bestseller 7', 
        kategori: 'Fiksi / Novel', 
        stok: 6, 
        cover: '/img/novel7.jpg',
        preview: 'Petualangan misteri dan persahabatan yang penuh dengan kejutan...'
    },
    { 
        id: 8, 
        judul: 'Novel Koleksi Seri 8', 
        pengarang: 'Penulis Bestseller 8', 
        kategori: 'Fiksi / Novel', 
        stok: 3, 
        cover: '/img/novel8.jpg',
        preview: 'Perjalanan waktu dan takdir indah dua insan manusia...'
    },
    { 
        id: 9, 
        judul: 'Novel Koleksi Seri 9', 
        pengarang: 'Penulis Bestseller 9', 
        kategori: 'Fiksi / Novel', 
        stok: 9, 
        cover: '/img/novel9.jpg',
        preview: 'Kisah hangat tentang keluarga dan perjuangan menggapai impian...'
    },
    { 
        id: 10, 
        judul: 'Novel Koleksi Seri 10', 
        pengarang: 'Penulis Bestseller 10', 
        kategori: 'Fiksi / Novel', 
        stok: 7, 
        cover: '/img/novel10.jpg',
        preview: 'Seri penutup karya fiksi favorit di perpustakaan digital...'
    },

    // --- KOMIK / MANGA ---
    {
        id: 11,
        judul: 'Komik Petualangan Seri 1',
        pengarang: 'Mangaka 1',
        kategori: 'Komik / Manga',
        stok: 8,
        cover: '/img/komik1.jpg',
        preview: 'Petualangan seru pahlawan muda dalam menyelamatkan dunia dari ancaman kegelapan...'
    },
    {
        id: 12,
        judul: 'Komik Petualangan Seri 2',
        pengarang: 'Mangaka 2',
        kategori: 'Komik / Manga',
        stok: 5,
        cover: '/img/komik2.jpg',
        preview: 'Aksi pertarungan sengit dan kekuatan tersembunyi yang akhirnya bangkit...'
    },
    {
        id: 13,
        judul: 'Komik Petualangan Seri 3',
        pengarang: 'Mangaka 3',
        kategori: 'Komik / Manga',
        stok: 0,
        cover: '/img/komik3.jpg',
        preview: 'Misteri akademi sihir dan pencarian artefak kuno yang hilang...'
    },
    {
        id: 14,
        judul: 'Komik Petualangan Seri 4',
        pengarang: 'Mangaka 4',
        kategori: 'Komik / Manga',
        stok: 10,
        cover: '/img/komik4.jpg',
        preview: 'Kisah komedi persekolahan dan aksi kocak para anggota klub sains...'
    },
    {
        id: 15,
        judul: 'Komik Petualangan Seri 5',
        pengarang: 'Mangaka 5',
        kategori: 'Komik / Manga',
        stok: 6,
        cover: '/img/komik5.jpg',
        preview: 'Persahabatan sejati dan perjuangan menjadi tim olahraga terbaik di turnamen nasional...'
    },
    {
        id: 16,
        judul: 'Komik Petualangan Seri 6',
        pengarang: 'Mangaka 6',
        kategori: 'Komik / Manga',
        stok: 4,
        cover: '/img/komik6.jpg',
        preview: 'Dunia siber masa depan dan detektif muda yang memecahkan kasus rahasia...'
    },
    {
        id: 17,
        judul: 'Komik Petualangan Seri 7',
        pengarang: 'Mangaka 7',
        kategori: 'Komik / Manga',
        stok: 7,
        cover: '/img/komik7.jpg',
        preview: 'Petualangan mengarungi lautan luas untuk menemukan harta karun legendaris...'
    },
    {
        id: 18,
        judul: 'Komik Petualangan Seri 8',
        pengarang: 'Mangaka 8',
        kategori: 'Komik / Manga',
        stok: 9,
        cover: '/img/komik8.png',
        preview: 'Legenda pendekar pedang tunggal yang bertarung demi keadilan...'
    },
    {
        id: 19,
        judul: 'Komik Petualangan Seri 9',
        pengarang: 'Mangaka 9',
        kategori: 'Komik / Manga',
        stok: 2,
        cover: '/img/komik9.jpg',
        preview: 'Kisah fantasi penjelajah waktu yang berusaha mengubah masa depan...'
    },
    {
        id: 20,
        judul: 'Komik Petualangan Seri 10',
        pengarang: 'Mangaka 10',
        kategori: 'Komik / Manga',
        stok: 11,
        cover: '/img/komik10.jpg',
        preview: 'Pertempuran puncak melawan raja iblis demi kedamaian negeri...'
    }
];

// 1. Landing Page
app.get('/', (req, res) => {
    res.render('landing', { schoolName: 'SMK N 1 Sukoharjo', heroImg: '/img/2.jpg' });
});

// 2. Login Page
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        res.redirect('/dashboard');
    } else {
        res.render('login', { error: 'Username atau password salah!' });
    }
});

// 3. Dashboard Page
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        schoolName: 'SMK Negeri 1 Sukoharjo',
        schoolTagline: 'Portal Vokasi Resmi',
        schoolAddress: 'Jl. Jend. Sudirman No. 151, Sukoharjo, Jawa Tengah',
        portalUrl: '/perpustakaan',
        schoolPhone: '(0271) 000-000',
        schoolEmail: 'info@smkn1sukoharjo.sch.id'
    });
});

// 4. Halaman Perpustakaan
app.get('/perpustakaan', (req, res) => {
    res.render('perpustakaan', {
        schoolName: 'SMK Negeri 1 Sukoharjo',
        katalogBuku: katalogBukuData
    });
});

// 5. API/Route Pinjam Buku (Proses Peminjaman)
app.post('/pinjam', (req, res) => {
    const judul = req.body.judulBuku || req.body.judul || 'Buku Perpustakaan';
    const pengarang = req.body.pengarang || req.body.penulis || 'Penulis';

    const today = new Date();
    const returnDate = new Date();
    returnDate.setDate(today.getDate() + 7);

    const formatTgl = (d) => d.toISOString().split('T')[0];

    // Tambahkan transaksi baru ke daftar paling atas
    riwayatPeminjamanData.unshift({
        id: 'TRX-' + Math.floor(1000 + Math.random() * 9000),
        judul: judul,
        penulis: pengarang,
        tglPinjam: formatTgl(today),
        tglKembali: formatTgl(returnDate),
        status: 'dipinjam'
    });

    if (req.headers['content-type'] && req.headers['content-type'].includes('application/x-www-form-urlencoded')) {
        return res.redirect('/riwayat');
    }

    res.json({ success: true, message: 'Berhasil mengajukan peminjaman! Cek status di menu "Riwayat Saya".' });
});

// 6. Halaman Riwayat Peminjaman
app.get('/riwayat', (req, res) => {
    const listTransaksi = riwayatPeminjamanData.map(item => ({
        id_transaksi: item.id,
        judul_buku: item.judul,
        penulis: item.penulis || 'Penulis',
        tgl_pinjam: item.tglPinjam,
        batas_pengembalian: item.tglKembali,
        status: (item.status || 'dipinjam').toLowerCase()
    }));

    const statsData = {
        total: listTransaksi.length,
        dipinjam: listTransaksi.filter(t => t.status === 'dipinjam').length,
        dikembalikan: listTransaksi.filter(t => t.status === 'dikembalikan').length,
        terlambat: listTransaksi.filter(t => t.status === 'terlambat').length
    };

    const dataDistribusi = [
        { label: 'Dipinjam', value: statsData.dipinjam },
        { label: 'Dikembalikan', value: statsData.dikembalikan },
        { label: 'Terlambat', value: statsData.terlambat }
    ];

    const dataAktivitas = [
        { bulan: 'Jan', jumlah: 1 },
        { bulan: 'Feb', jumlah: 2 },
        { bulan: 'Mar', jumlah: 0 },
        { bulan: 'Apr', jumlah: 1 },
        { bulan: 'Mei', jumlah: 3 },
        { bulan: 'Jun', jumlah: 2 },
        { bulan: 'Jul', jumlah: 4 },
        { bulan: 'Agu', jumlah: 1 },
        { bulan: 'Sep', jumlah: listTransaksi.length }
    ];

    res.render('riwayat', {
        stats: statsData,
        transaksi: listTransaksi,
        distribusiStatus: dataDistribusi,
        aktivitasBulanan: dataAktivitas
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;