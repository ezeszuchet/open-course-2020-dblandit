const { validationResult } = require('express-validator');
const cursos = require('./schemas/cursos');

const getCursos = (req, res, next) => {
    res.status(203);    
};
// const getCursos = (req, res, next) => {
//     const duracion = req.query.duracion;
//     const año_de_dictado = req.query.anio_de_dictado;

//     cursos.aggregate([{ $match: { duracion: duracion, año_de_dictado: año_de_dictado}}])
//             .then(cursos => {
//                 if(cursos){
//                 res.status(200).json({
//                     code: 0,
//                     message: cursos
//                 });
//                 }else{
//                     res.status(400).json({
//                         code: 0,
//                         message: "No se encontro ningun curso"
//                     }); 
//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                     code: 20,
//                     message: "Ocurrió un error con un módulo interno"
//                 });
//             })
// };

// const postCursos = (req, res, next) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             code: 10,
//             message: errors.array()
//         })
//     }

//     const body = req.body;

//     const newCurso = new cursos({
//         año_de_dictado: body.año_de_dictado,
//         duracion: body.duracion,
//         tema: body.tema,
//         alumnos: body.alumnos,
//         // cursos.keys(body).forEach(k => {
//         //     alumnos[k] = body.alumnos[k];
//         // });
//     });

//     newCurso.save()
//         .then(created => {
//             res.status(201).json({
//                 code: 0,
//                 message: created
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 code: 20,
//                 message: "Ocurrió un error con un módulo interno"
//             });
//         })
// };

// const deleteCursos = (req, res, next) => {
//     const id = req.params.id;

//     cursos.findByIdAndDelete(id)
//         .then(() => {
//             res.status(200).json({
//                 code: 0,
//                 message: "Curso eliminado correctamente"
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 code: 20,
//                 message: "Ocurrió un error con un módulo interno"
//             });
//         })
// };