
const { fotografer, pemesanan } = require('../data/data');

// 1. Menampilkan semua pemesanan
const tampilkanPemesanan = (req, res) => {
    res.json({
        pesan: "Daftar semua pemesanan",
        jumlah: pemesanan.length,
        data: pemesanan
    });
};

// 2. Menambahkan pemesanan
const tambahPemesanan = (req, res) => {
    const {
        nama_pelanggan,
        no_hp,
        id_fotografer,
        tanggal,
        jumlah_sesi
    } = req.body;

    if (!nama_pelanggan || !no_hp || !tanggal) {
        return res.status(400).json({
            pesan: "Data pelanggan, nomor HP, dan tanggal wajib diisi"
        });
    }

    const idFotografer = Number(id_fotografer);
    const jumlahSesi = Number(jumlah_sesi);

    const layanan = fotografer.find(
        f => f.id === idFotografer
    );

    if (!layanan) {
        return res.status(404).json({
            pesan: "Fotografer tidak ditemukan"
        });
    }

    if (!Number.isInteger(jumlahSesi) || jumlahSesi < 1) {
        return res.status(400).json({
            pesan: "Jumlah sesi minimal 1"
        });
    }

    const idBaru = Math.max(
        0,
        ...pemesanan.map(p => p.id)
    ) + 1;

    const totalHarga = layanan.harga * jumlahSesi;

    const pesananBaru = {
        id: idBaru,
        nama_pelanggan,
        no_hp,
        fotografer: layanan.nama,
        id_fotografer: idFotografer,
        tanggal,
        jumlah_sesi: jumlahSesi,
        harga_per_sesi: layanan.harga,
        total_harga: totalHarga,
        status: "Menunggu"
    };

    pemesanan.push(pesananBaru);

    res.status(201).json({
        pesan: "Pemesanan berhasil ditambahkan",
        data: pesananBaru
    });
};

// 3. Mencari pemesanan berdasarkan ID
const cariPemesanan = (req, res) => {
    const id = Number(req.params.id);

    const pesanan = pemesanan.find(
        p => p.id === id
    );

    if (!pesanan) {
        return res.status(404).json({
            pesan: "Pemesanan tidak ditemukan"
        });
    }

    res.json({
        pesan: "Data pemesanan ditemukan",
        data: pesanan
    });
};

// 4. Mengubah pemesanan
const ubahPemesanan = (req, res) => {
    const id = Number(req.params.id);

    const index = pemesanan.findIndex(
        p => p.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            pesan: "Pemesanan tidak ditemukan"
        });
    }

    const pesananLama = pemesanan[index];

    const {
        nama_pelanggan,
        no_hp,
        id_fotografer,
        tanggal,
        jumlah_sesi
    } = req.body;

    const idFotografer = id_fotografer === undefined
        ? pesananLama.id_fotografer
        : Number(id_fotografer);

    const jumlahSesi = jumlah_sesi === undefined
        ? pesananLama.jumlah_sesi
        : Number(jumlah_sesi);

    const layanan = fotografer.find(
        f => f.id === idFotografer
    );

    if (!layanan) {
        return res.status(404).json({
            pesan: "Fotografer tidak ditemukan"
        });
    }

    if (!Number.isInteger(jumlahSesi) || jumlahSesi < 1) {
        return res.status(400).json({
            pesan: "Jumlah sesi minimal 1"
        });
    }

    if (
        nama_pelanggan !== undefined && !nama_pelanggan ||
        no_hp !== undefined && !no_hp ||
        tanggal !== undefined && !tanggal
    ) {
        return res.status(400).json({
            pesan: "Data tidak boleh kosong"
        });
    }

    const totalHarga = layanan.harga * jumlahSesi;

    pemesanan[index] = {
        ...pesananLama,
        nama_pelanggan: nama_pelanggan ?? pesananLama.nama_pelanggan,
        no_hp: no_hp ?? pesananLama.no_hp,
        fotografer: layanan.nama,
        id_fotografer: idFotografer,
        tanggal: tanggal ?? pesananLama.tanggal,
        jumlah_sesi: jumlahSesi,
        harga_per_sesi: layanan.harga,
        total_harga: totalHarga
    };

    res.json({
        pesan: "Pemesanan berhasil diperbarui",
        data: pemesanan[index]
    });
};

// 5. Menghapus pemesanan
const hapusPemesanan = (req, res) => {
    const id = Number(req.params.id);

    const index = pemesanan.findIndex(
        p => p.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            pesan: "Pemesanan tidak ditemukan"
        });
    }

    const pesananDihapus = pemesanan.splice(index, 1);

    res.json({
        pesan: "Pemesanan berhasil dihapus",
        data: pesananDihapus[0]
    });
};

module.exports = {
    tampilkanPemesanan,
    tambahPemesanan,
    cariPemesanan,
    ubahPemesanan,
    hapusPemesanan
};
