import server from "./server"

const port = Number(process.env.PORT) || 4000;


server.listen(port, () => {
    console.log("Servidor Funcionando en el puerto:", port);
});