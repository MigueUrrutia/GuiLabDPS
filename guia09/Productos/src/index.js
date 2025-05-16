const express = require('express');
const rateLimit = require('express-rate-limit');
const librosRoutes = require('./routes');
const cors = require('cors');
const db = require('./config/models/db'); // ✅ conexión MySQL
require('dotenv').config();

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/api', rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 1000,
  message: 'Demasiadas peticiones, por favor intente más tarde.',
}));
app.use('/api', librosRoutes);

// ✅ Ruta de prueba de conexión
app.get('/api/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error de conexión', message: err.message });
    }
    res.json({ message: 'Conexión exitosa ✅', resultado: results[0].resultado });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
