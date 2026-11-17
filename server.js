
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Memanggil routes
const infoRoutes = require('./routes/inforoutes');
const fotograferRoutes = require('./routes/photograferroutes');
const pemesananRoutes = require('./routes/pemesananroutes');

// Menghubungkan routes ke server
app.use('/info', infoRoutes);
app.use('/fotografer', fotograferRoutes);
app.use('/pemesanan', pemesananRoutes);

// Route utama
app.get('/', (req, res) => {
    res.json({
        message: 'Selamat datang di PhotoBook FOUR GROUP',
        status: 'Server berjalan'
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`PhotoBook berjalan di http://localhost:${PORT}`);
});
