const clientesRouter = require('express').Router();

const { getClientes: getClientes, getCliente: getCliente, patchCliente, patchCliente, deleteCliente: deleteCliente } = require('./clientesController');
const { postValidators } = require('./clientesValidators');
const { getCliente, patchCliente } = require('../clienteCRUD/clienteController');
const { getItems, postItem, deleteItems } = require('../itemCRUD/itemController');

clientesRouter.get('/', getClientes);
clientesRouter.post('/', postValidators, postFactura);

clientesRouter.get('/:id', getCliente);
clientesRouter.patch('/:id', patchCliente);
clientesRouter.delete('/:id', deleteCliente);

clientesRouter.get('/:id/cliente', getCliente);
clientesRouter.patch('/:id/cliente', patchCliente);


module.exports = clientesRouter;
