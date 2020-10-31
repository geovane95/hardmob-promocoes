import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../models/User";

class UserController {

    static getOneById = async (req: Request, res: Response) => {
        console.log("[DEBUG]Buscando usuário unico por id.");
        //Get the ID from the url
        const id: number = req.params.id;

        //Get the user from database
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail(id, {
                select: ["id", "username", "role"] //We dont want to send the password on response
            });
        } catch (error) {
            console.log("[ERRO]Falha na busca de usuário por id.");
            res.status(404).send("Usuário não encontrado.");
        }
    };
};

export default UserController;