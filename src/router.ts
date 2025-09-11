import { Router }  from 'express'
import User from './models/User';

const router = Router();

/** Autenticacion y Registro **/

router.post('/auth/register', async (request, response) => {
    const user = new User(request.body);
    await user.save();
});

export default router;