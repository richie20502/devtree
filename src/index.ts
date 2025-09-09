//const express = require('express'); // CJS Common JS 
import express from 'express'; // ESM Ecmascript modules

const app = express();


app.get('/', (request, response) => {
    response.send("hola mundo express / typescript");
});


const port = Number(process.env.PORT) || 4000;


app.listen(port, () => {
    console.log("Servidor Funcionando en el puerto:", port);
});