const conexao = require('./Conexao.js');

const getAll = async() => {
    const [tarefas] = await conexao.execute('SELECT * FROM tarefas ORDER BY created_at DESC');

    return tarefas;
}

const getById = async(id) => {
    const [rows] = await conexao.execute('SELECT * FROM tarefas WHERE id = ?', [id]);

    return rows[0];
}

const createTask = async(tarefas) => {

    const {tarefa} = tarefas;

    const query = 'INSERT INTO tarefas (tarefa, status) VALUES (?, ?)';

    const [created_task] = await conexao.execute(query, [tarefa, 'PENDENTE']);

    return { insertId: created_task.insertId };

};

const updateTask = async(id, tarefas) => {

    const fields = [];
    const values = [];

    if (tarefas.tarefa  !== undefined) {
        fields.push('tarefa = ?');
        values.push(tarefas.tarefa);
    }

    if (tarefas.status !== undefined) {
        fields.push('status = ?');
        values.push(tarefas.status);
    }

    if (fields.length === 0) {
        return { affectedRows: 0 };
    }

    const query = `UPDATE tarefas SET ${fields.join(', ')} WHERE id = ?`;
    values.push(id);

    const [ updatedTask ] = await conexao.execute(query, values);

    return updatedTask;
} 

const deleteTask = async(id) => {
    
    const [deletedTask] = await conexao.execute('DELETE FROM tarefas WHERE id = ?', [id]);

    return deletedTask;
}

module.exports = {
    getAll, 
    getById,
    createTask,
    updateTask,
    deleteTask
}