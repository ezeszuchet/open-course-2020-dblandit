const { check } = require('express-validator');
const clientes = require('../models/clientes');

const postValidators = [
    check('DNI').isNumeric().withMessage("El campo dni debe ser numérico")
        .custom(value => {
            return clientes.findOne({DNI: value})
                .then(cliente => {
                    return cliente ? Promise.reject("El cliente indicado ya existe") : Promise.resolve()
                })
        }),
    check('nombre').exists().withMessage("El nombre debe ser ingresado"),
    check('apellido').exists().withMessage("El apellido debe ser ingresado"),
    check('direccion').exists().withMessage("La dirección debe ser ingresada"),
];

module.exports = { postValidators };
