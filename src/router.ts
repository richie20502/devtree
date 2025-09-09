import { Router }  from 'express'

const router = Router();

//Routing
router.get('/', (request, response) => {
    response.send("hola mundo express / typescript");
});
router.get('/blog', (request, response) => {
    response.send("hola mundo blog / typescript");
});
router.get('/nosotros', (request, response) => {
    response.send("hola mundo nosotros / typescript");
});

export default router;