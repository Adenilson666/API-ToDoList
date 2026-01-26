const tarefasModel = require('../Model/tarefaModel');
const AppError = require('../errors/AppError');

const getAll = async () => {
    return tarefasModel.getAll();
};                  

const getById = async (id) => {

    const tarefa = await tarefasModel.getById(id);

    if (!tarefa) {
        throw new AppError('Tarefa não encontrada', 404);
    }

    return tarefa;
};

const createTask = async (data) => {
    const tarefa = data.tarefa.trim();
    console.log(tarefa);
    return tarefasModel.createTask({ tarefa });
};

const updateTask = async (id, data) => {
    const tarefa = await tarefasModel.getById(id);

    if (!tarefa) {
        throw new AppError('Tarefa não encontrada', 404);
    }

    const updated = await tarefasModel.updateTask(id, data);

    if (updated.affectedRows === 0) {
        throw new AppError('Nenhum campo foi atualizado', 400);
    }

    return updated;
};

const deleteTask = async (id) => {
    const tarefa = await tarefasModel.getById(id);

    if (!tarefa) {
        throw new AppError('Tarefa não encontrada', 404);
    }

    return tarefasModel.deleteTask(id);
};

module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
    deleteTask,
};