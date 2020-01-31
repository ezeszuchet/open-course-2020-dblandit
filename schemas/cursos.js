const mongoose = require('mongoose');

const clientes = require('./clientes');

const cursos = new mongoose.Schema({
    anio: { type: Number },
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { type: [{
            nombre: { type: String },
            apellido: { type: String },
            DNI: { type: Number },
            direccion: { type: String },
            nota: Number 
        }] 
    },
});

module.exports = mongoose.model('cursos', cursos);