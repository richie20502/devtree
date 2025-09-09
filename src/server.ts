import express from 'express'; // ESM Ecmascript modules

const app = express();

app.get('/', (request, response) => {
    response.send("hola mundo express / typescript");
});

export default app