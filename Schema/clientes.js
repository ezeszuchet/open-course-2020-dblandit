const mongoose = require('mongoose');

const clientes = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    DNI: { type: Number },
    direccion: { type: Number }
}, { _id: false });

module.exports = clientes;