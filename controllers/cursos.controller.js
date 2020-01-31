const { validationResult } = require('express-validator');
const cursos = require('../schemas/cursos');

const getCursos = (req, res, next) => {
    const duracion = req.query.duracion;
    const anio = req.query.anio;

    cursos.find({ duracion, anio })
        .then(cursos => {
            // if(cursos){
            // res.status(200).json({
            //     code: 0,
            //     message: cursos
            // });
            // }else{
            //     res.status(400).json({
            //         code: 0,
            //         message: "No se encontro ningun curso"
            //     }); 
            // }

            res.status(200).json(cursos);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
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
        anio: body.anio,
        duracion: body.duracion,
        tema: body.tema,
        alumnos: body.alumnos
    });

    newCurso.save()
        .then(created => {
            res.status(201).json(created);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
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

module.exports = { getCursos, postCursos };