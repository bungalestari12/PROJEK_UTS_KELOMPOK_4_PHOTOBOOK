
const express = require('express');
const router = express.Router();

const {
    tampilkanPemesanan,
    tambahPemesanan,
    cariPemesanan,
    ubahPemesanan,
    hapusPemesanan
} = require('../controllers/pemesanancontrollers');

// GET - Menampilkan semua pemesanan
router.get('/', tampilkanPemesanan);

// POST - Menambahkan pemesanan
router.post('/', tambahPemesanan);

// GET - Mencari pemesanan berdasarkan ID
router.get('/:id', cariPemesanan);

// PUT - Mengubah pemesanan
router.put('/:id', ubahPemesanan);

// DELETE - Menghapus pemesanan
router.delete('/:id', hapusPemesanan);

module.exports = router;
