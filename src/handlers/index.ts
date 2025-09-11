import type {Request, Response} from 'express'
import User from "../models/User";

export const createAccount =  async (request: Request, response: Response) => {
    const user = new User(request.body);
    await user.save();
    response.json({ msg: "Registro Creado Correctamente" });
    }
