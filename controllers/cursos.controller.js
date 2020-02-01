const { validationResult } = require('express-validator');
const cursos = require('../schemas/cursos');
const mongoose = require('mongoose');

const getCursos = (req, res, next) => {
    const duracion = req.query.duracion;
    const anio = req.query.anio;
    const query = {};
    
    if(anio)
        query.anio = anio;
    
    if(duracion)
        query.duracion = duracion;

    cursos.find(query)
        .then(cursos => res.status(200).json(cursos))
        .catch(err => {
            console.log(err);
            res.status(500).json("Ocurrió un error con un módulo interno");
        })
    
};

const postCursos = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const body = req.body;

    const newCurso = new cursos({
        anio: body.anio,
        duracion: body.duracion,
        tema: body.tema,
        alumnos: body.alumnos
    });

    newCurso.save()
        .then(created => res.status(201).json(created))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};

const deleteCursos = (req, res, next) => {
    const id = req.params.id;

    cursos.findByIdAndDelete(id)
        .then(() => res.status(200).json("Curso eliminado correctamente"))
        .catch(err => {
            console.log(err);
            res.status(500).json("Ocurrió un error con un módulo interno");
        })
};

const getAlumnos = (req, res, next) => {
    const id = req.params.id;

    cursos.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(id)} },
            { $project: { alumnos: 1, _id: 0 }},
            { $unwind: "$alumnos" }
    ])
        .then(alumnos => res.status(200).json(alumnos))
        .catch(err => {
            console.log(err);
            res.status(500).json("Ocurrió un error con un módulo interno");
        })
};

const getNotaMasAlta = (req, res, next) => {
    const id = req.params.id;

    cursos.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(id)} },
            { $project: { alumnos: 1, _id: 0 }},
            { $unwind: "$alumnos" },
            { $sort: { "alumnos.nota": -1 } },
            { $limit: 1 }
    ])
        .then(alumno => res.status(200).json(alumno))
        .catch(err => {
            console.log(err);
            res.status(500).json("Ocurrió un error con un módulo interno");
        })
};

module.exports = { getCursos, postCursos, deleteCursos, getAlumnos, getNotaMasAlta };