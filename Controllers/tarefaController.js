const tarefasModel = require('../Model/tarefaModel');
const AppError = require('../errors/AppError');

const getAll = async(req, res) => {
    try {
        const tarefas = await tarefasModel.getAll();
        return res.status(200).json(tarefas);
    } catch (error) {
        next(error);
    }
}

const getById = async(req, res) => {

    try {
        const { id } = req.params;

        const tarefa = await tarefasModel.getById(id);

        if (!tarefa) {
            return res.status(404).json({ message: 'Tarefa não encontrada '});
        }

            return res.status(200).json(tarefa);
    } catch (error) {
        next(error);
    }
    
}

const createTask = async(req, res) => {

    try {
        const created = await tarefasModel.createTask(req.body);
        return res.status(201).json(created);
    } catch (error) {
        next(error);
    }   
}

const updateTask = async(req, res) => {

    try {
        await tarefasModel.updateTask(req.params.id, req.body);
        return res.status(204).json();
    } catch (error) {
        next(error);
    }
    
}

const deleteTask = async(req, res) => {

    try {
        await tarefasModel.deleteTask(req.params.id);
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