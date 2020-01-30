const mongoose = require('mongoose');

const Clientes = require('./schemas/Clientes');

const cursos = new mongoose.Schema({
    año_de_dictado: { type: Number },
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { type: Clientes }
}, { _id: false });

module.exports = cursos;