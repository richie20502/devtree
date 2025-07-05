import express from "express"

const app = express();

app.get('/', (req, res) => { 
    res.send("Hola mundo con express");
})

app.get('/eccommerce', (req, res) => { 
    res.send("E-Commers con express");
})

app.get('/blog', (req, res) => { 
    res.send("Blog con express");
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Servidor funcionando en el puerto", port);
})
