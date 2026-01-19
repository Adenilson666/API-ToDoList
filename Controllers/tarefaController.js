const tarefasModel = require('../Model/tarefaModel');

const getAll = async(req, res) => {
    const tarefas = await tarefasModel.getAll();
    return res.status(200).json(tarefas);
}

const getById = async(req, res) => {

    const { id } = req.params;

    const tarefa = await tarefasModel.getById(id);

    if (!tarefa) {
        return res.status(404).json({ message: 'Tarefa não encontrada '});
    }

    return res.status(200).json(tarefa);
}

const createTask = async(req, res) => {
    const created = await tarefasModel.createTask(req.body);
    return res.status(201).json(created);
}

const updateTask = async(req, res) => {
    await tarefasModel.updateTask(req.params.id, req.body);
    return res.status(204).json();
}

const deleteTask = async(req, res) => {
    await tarefasModel.deleteTask(req.params.id);
    return res.status(204).end()
}

module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
    deleteTask
}