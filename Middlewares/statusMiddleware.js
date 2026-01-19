const AppError = require('../errors/AppError');

const statusMiddleware = (req, res, next) => {

    const { status } = req.body;

    if (status === undefined) {
        return next();
    }

    const validStatuses = ['PENDENTE', 'FEITO'];

    if (!validStatuses.includes(status)) {
        throw new AppError('O campo "status" deve ser "PENDENTE" ou "FEITO".', 400);
    }

    next();
};

module.exports = statusMiddleware;