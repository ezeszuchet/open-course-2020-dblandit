const router = require('express').Router();
const controller = require('../controllers/cursos.controller');

router.get('/', controller.getCursos);
router.post('/', controller.postCursos);

module.exports = router;