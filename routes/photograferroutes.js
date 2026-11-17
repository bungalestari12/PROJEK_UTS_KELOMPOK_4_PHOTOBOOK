
const express = require('express');
const router = express.Router();

const { fotografer } = require('../data/data');

// GET - Menampilkan semua fotografer
router.get('/', (req, res) => {
    res.json({
        pesan: "Daftar fotografer PhotoBook",
        jumlah: fotografer.length,
        data: fotografer
    });
});

// GET - Mencari fotografer berdasarkan ID
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const hasil = fotografer.find(f => f.id === id);

    if (!hasil) {
        return res.status(404).json({
            pesan: "Fotografer tidak ditemukan"
        });
    }

    res.json({
        pesan: "Data fotografer ditemukan",
        data: hasil
    });
});

module.exports = router;
