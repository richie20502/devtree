const express = require("express")

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

app.listen(4000, () => {
    console.log("Servidro fucnionando ");
})
