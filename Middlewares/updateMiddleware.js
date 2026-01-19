const AppError = require('../errors/AppError');

const updateMiddleware = (req, res, next) => {

    const { tarefa, status } = req.body;

    if (!tarefa && !status) {
        throw new AppError('Pelo menos um dos campos "tarefa" ou "status" deve ser fornecido para atualização.', 400);
    }

    if (tarefa !== undefined) {
        if (tarefa.trim() === '') {
            throw new AppError('O campo "tarefa" não pode ser vazio.', 400);
        }
    }

    if (tarefa.length < 3) {
        throw new AppError('O campo "tarefa" deve ter pelo menos 3 caracteres.', 400);
    }

    const validStatuses = ['PENDENTE', 'FEITO'];

    if (!validStatuses.includes(status)) {
        throw new AppError('O campo "status" deve ser "PENDENTE" ou "FEITO".', 400);
    }

    next();
};

module.exports = updateMiddleware;