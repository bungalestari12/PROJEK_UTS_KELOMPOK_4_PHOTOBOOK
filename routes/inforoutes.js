const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        nama_aplikasi: "PhotoBook FOUR GROUP",
        deskripsi: "Aplikasi Pemesanan Jasa Fotografi",
        versi: "1.0.0",
        teknologi: ["Node.js", "Express.js"],
        fitur: [
            "Melihat daftar fotografer",
            "Menambah pemesanan",
            "Mencari pemesanan",
            "Mengubah pemesanan",
            "Menghapus pemesanan"
        ],
        status: "Aktif"
    });
});

module.exports = router;

