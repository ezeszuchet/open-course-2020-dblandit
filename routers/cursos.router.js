const router = require('express').Router();
const controller = require('./cursos.controller');

router.get('/', controller.getCursos);

module.exports = router;
