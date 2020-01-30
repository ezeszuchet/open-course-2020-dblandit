const mongoose = require('mongoose');

const Clientes = require('C:\\Users\\user\\Desktop\\BigData\\Clases\\Node.js\\open-course-2020-dblandit\\Schema\\cursos.js');
//ver para no hacer una ruta absoluta

const cursos = new mongoose.Schema({
    año_de_dictado: { type: Number },
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { type: Clientes }
});

module.exports = mongoose.model('cursos', cursos);