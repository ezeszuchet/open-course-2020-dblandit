const { check } = require('express-validator');

const postValidators = [
    check('año_de_dictado').isNumeric().withMessage("Año de dictado del curso debe ser numérico"),
    check('duracion').isNumeric().withMessage("La duración del curso debe ser numérico"),
    check('tema').exists().withMessage("El tema debe ser ingresado")
];

module.exports = { postValidators };
