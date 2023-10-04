const express = require('express');

const router = express.Router();

const {
    getAllTasks,
    getOneTaskById,
    searchTasks,
    addTask,
    updateTask,
    deleteTask,
} = require('../controllers/TaskController');


// Obtener todas las tareas
router.get('/', getAllTasks);
// Buscar tareas
router.get('/search', searchTasks);

// Obtener una tarea
router.get('/:id', getOneTaskById);


//Agregar una tarea  createTask
router.post('/', addTask);

// Actualizar todo el objeto put ~~
// Actualizar una propiedad del objeto
router.patch('/:id', updateTask);

//Eliminar una tarea

router.delete('/:id', deleteTask);



module.exports = router;