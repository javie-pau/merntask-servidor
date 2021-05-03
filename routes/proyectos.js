const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// Crear un proyecto
// api/proyectos
router.post('/',
auth,
[
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
],
proyectoController.crearProyecto);

// Obtener todos los proyectos
router.get('/',
auth,
proyectoController.obtenerProyectos);

// Actualizar proyecto via ID
router.put('/:id',
auth,
[
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
],
proyectoController.actualizarProyecto);

// Eliminar un Proyecto
router.delete('/:id',
auth,
proyectoController.eliminarproyecto);

module.exports = router;