const express = require('express')
const app = express()
const router = require('./Routes/rotas.js');

app.use(express.json());

app.use(router);

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})

module.exports = app;