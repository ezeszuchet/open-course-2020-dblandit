const mongoose = require('mongoose');

const clientes = require('./clientes');

const cursos = new mongoose.Schema({
    anio: { type: Number },
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { type: [{ ...clientes, nota: Number }] },
});

module.exports = mongoose.model('cursos', cursos);