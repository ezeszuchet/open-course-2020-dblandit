const clientesRouter = require('express').Router();

const controller = require('./cursos.controller');
const { postValidators } = require('./clientesValidators');

clientesRouter.get('/', getClientes);
clientesRouter.post('/', postValidators, postFactura);

module.exports = clientesRouter;
