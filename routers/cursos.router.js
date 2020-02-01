const router = require('express').Router();
const controller = require('../controllers/cursos.controller');
const validator = require('../validators/cursos.validator')

router.get('/', controller.getCursos);
router.post('/', validator.postValidators, controller.postCursos);
router.delete('/:id', controller.deleteCursos)

router.get('/:id/alumnos', controller.getAlumnos);
router.get('/:id/nota', controller.getNotaMasAlta);

module.exports = router;