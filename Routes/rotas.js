const express = require('express')
const router = express.Router()
const tarefasController = require('../Controllers/tarefaController')
const idMiddleware = require('../Middlewares/idMiddleware')
const statusMiddleware = require('../Middlewares/statusMiddleware')
const tarefaMiddleware = require('../Middlewares/tarefaMiddleware')
const updateMiddleware = require('../Middlewares/updateMiddleware')

router.get('/tarefas', tarefasController.getAll);
router.get('/tarefas/:id', idMiddleware, tarefasController.getById);
router.post('/tarefas', tarefaMiddleware, statusMiddleware, tarefasController.createTask);
router.put('/tarefas/:id', idMiddleware, updateMiddleware, tarefasController.updateTask);
router.delete('/tarefas/:id', idMiddleware, tarefasController.deleteTask);

module.exports = router;