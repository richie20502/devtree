import type {Request, Response} from 'express'
import slug from 'slug'
import User from "../models/User";
import { hashPassword } from '../utils/auth';

export const createAccount =  async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const userExist = await User.findOne({email});
    if(userExist){
        const error = new Error('El usuario con ese mail ya esta registrado !!!');
        return response.status(409).json({error: error.message});
    }
    const handle = slug(request.body.handle,'');
    const handleExist = await User.findOne({handle});
    if(handleExist){
        const error = new Error('Nombre de usuario no disponible !!!');
        return response.status(409).json({error: error.message});
    }

    const user = new User(request.body);
    user.password = await hashPassword(password);
    user.handle = handle;
    console.log(slug(handle));
    await user.save();
    response.status(201).json({ msg: "Registro Creado Correctamente" });
    }
