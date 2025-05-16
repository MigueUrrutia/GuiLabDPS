const express = require('express');
const usuarioController = require('./config/controllers/usuarios.controller.js');
const router = express.Router();

// Rutas
router.get('/usuarios', usuarioController.findAll);
router.get('/usuarios/:id', usuarioController.findOne);
router.post('/usuarios', usuarioController.create);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.delete);

module.exports = router;