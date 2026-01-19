const express = require('express')
const app = express()
const router = require('./Routes/rotas.js');
const errorMiddleware = require('./Middlewares/errorMiddleware.js');

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})

module.exports = app;