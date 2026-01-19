const AppError = require('../errors/AppError');

const idMiddleware = (req, res, next) => {
    const { id } = req.params;

    if (isNaN(id)) {
        throw new AppError('ID inválido.', 400);
    }

    next();
};

module.exports = idMiddleware;