const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// Crear un tarea
// api/tareas
router.post('/',
       auth,[
           check('nombre', 'El nombre es obligatorio').not().isEmpty(),
           check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
       ],
       tareaController.crearTarea);

// Obtener las tareas 
router.get('/',
   auth,
   tareaController.obtenerTareas);

// Actualizar un tarea
router.put('/:id',
   auth,
   tareaController.actualizartarea);

// Eliminar una tarea 
router.delete('/:id',
    auth,
    tareaController.eliminarTarea);

module.exports = router;