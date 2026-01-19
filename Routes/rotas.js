const express = require('express')
const router = express.Router()
const tarefasController = require('../Controllers/tarefaController')

router.get('/tarefas', tarefasController.getAll);
router.get('/tarefas/:id', tarefasController.getById);
router.post('/tarefas', tarefasController.createTask);
router.put('/tarefas/:id', tarefasController.updateTask);
router.delete('/tarefas/:id', tarefasController.deleteTask);

module.exports = router;