const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send("hola mundo express");
});

app.get('/ecommerce', (request, response) => {
    response.send("hola mundo ecommerce");
});

app.listen(4000, () => {
    console.log("Servidor Funcionando");
});