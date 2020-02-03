const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://thiago:251205@cluster0-9krks.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
 
// MÉTODOS HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: req.query (Filtros, Ordenação, Paginação, ...)
// Route Params: req.params (Identificar um Recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)



app.listen(3333);
