const mongoose = require('mongoose');

const clientes = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    DNI: { type: Number },
    direccion: { type: String },
    cursoId: { type: Number }
});

module.exports = mongoose.model('clientes', clientes);