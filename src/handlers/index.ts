import type {Request, Response} from 'express'
import User from "../models/User";

export const createAccount =  async (request: Request, response: Response) => {
    const { email } = request.body;
    const userExist = await User.findOne({email});
    if(userExist){
        const error = new Error('El Usuario ya esta registrado !!!');
        return response.status(409).json({error: error.message});
    }

    const user = new User(request.body);
    await user.save();
    response.status(201).json({ msg: "Registro Creado Correctamente" });
    }
