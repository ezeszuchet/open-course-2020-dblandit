const { check } = require('express-validator');
const cursos = require('../schemas/cursos');

const postValidators = [
    check('anio').isNumeric().withMessage("Año de dictado del curso debe ser numérico"),
    check('duracion').isNumeric().withMessage("La duración del curso debe ser numérico"),
    check('tema').exists().withMessage("El tema debe ser ingresado"),
    // check('alumnos.DNI').isNumeric().withMessage("El campo dni debe ser numérico")
    //     .custom(value => {
    //         return cursos.findOne({"alumnos.DNI": value})
    //             .then(cursos => {
    //                 return cursos ? Promise.reject("El alumno indicado ya existe") : Promise.resolve()
    //             })
    //     }),
    // check('alumnos.nombre').exists().withMessage("El nombre debe ser ingresado"),
    // check('alumnos.apellido').exists().withMessage("El apellido debe ser ingresado"),
    // check('alumnos.direccion').exists().withMessage("La dirección debe ser ingresada"),
];

module.exports = { postValidators };
