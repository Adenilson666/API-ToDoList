const AppError = require('../errors/AppError');

const tarefaMiddleware = (req, res, next) => {

    if (!req.body) {
        throw new AppError('Corpo da requisição está vazio.', 400);
    }

    const { tarefa } = req.body;
    tarefa = tarefa.trim();

    if (typeof tarefa !== 'string') {
        throw new AppError('O campo "tarefa" deve ser uma string.', 400);
    }

    if (tarefa === undefined) {
        throw new AppError('O campo "tarefa" é obrigatório.', 400);
    }

    if (tarefa.trim() === '') {
        throw new AppError('O campo "tarefa" não pode ser vazio.', 400);
    }

    if (tarefa.length < 3) {
        throw new AppError('O campo "tarefa" deve ter pelo menos 3 caracteres.', 400);
    }

    next();
};

module.exports = tarefaMiddleware;