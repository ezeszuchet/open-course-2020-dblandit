const mongoose = require('mongoose');

const Clientes = require('./clientes');

const cursos = new mongoose.Schema({
    año_de_dictado: { type: Number },
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { type: Clientes },
    alumnosId: { type: [String] }
});

module.exports = mongoose.model('cursos', cursos);