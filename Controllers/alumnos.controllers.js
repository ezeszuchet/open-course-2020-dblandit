const alumnos = require('../models/alumnos');

const { validationResult } = require('express-validator');

const getAlumnos = (req, res, next) => {
    const id = req.params.id;

    //hacerlo por agreggate

    alumnos.
    aggregate([{ $match: { id: { $gte: 21 }}}])
    //Parsear el id a objectId
};


const postCursos = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    }

    const body = req.body;

    const newCurso = new cursos({
        año_de_dictado: body.año_de_dictado,
        duracion: body.duracion,
        tema: body.tema,
        alumnos: body.alumnos
    });

    newCurso.save()
        .then(created => {
            res.status(201).json({
                code: 0,
                message: created
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const deleteCursos = (req, res, next) => {
    const id = req.params.id;

    cursos.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                code: 0,
                message: "Curso eliminado correctamente"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};