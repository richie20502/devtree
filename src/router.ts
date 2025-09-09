import { Router }  from 'express'

const router = Router();

/** Autenticacion y Registro **/
router.post('/auth/register', (request, response) => {
    console.log("desde el resgistro")
});

export default router;