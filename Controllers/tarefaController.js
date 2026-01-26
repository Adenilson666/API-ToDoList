const tarefaService = require('../Services/tarefaService');

const getAll = async(req, res, next) => {
    try {
        const tarefas = await tarefaService.getAll();
        return res.status(200).json(tarefas);
    } catch (error) {
        next(error);
    }
}

const getById = async(req, res, next) => {

    try {
        const { id } = req.params;

        const tarefa = await tarefaService.getById(id);

        return res.status(200).json(tarefa);
    } catch (error) {
        next(error);
    }
    
}

const createTask = async(req, res, next) => {

    try {
        const created = await tarefaService.createTask(req.body);
        return res.status(201).json(created);
    } catch (error) {
        next(error);
        console.log(req.body); 
    }   
     
}

const updateTask = async(req, res, next) => {

    try {
        await tarefaService.updateTask(req.params.id, req.body);
        return res.status(204).end();
    } catch (error) {
        next(error);
    }
    
}

const deleteTask = async(req, res, next) => {

    try {
        await tarefaService.deleteTask(req.params.id);
        return res.status(204).end()
    } catch (error) {
        next(error);
    }
    
}

module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
    deleteTask
}