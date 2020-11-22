import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Promotion } from "../models/Promotion";

class PromotionController {
    static getAllPromotions = async (req: Request, res: Response) => {
        console.log("[DEBUG]Buscando todas as promoções.");

        //Get the promotions from database
        const promotionRepository = getRepository(Promotion);
        try {
            const promotions = await promotionRepository
            .createQueryBuilder("promotion") 
            .getMany();

            return res.status(200).json(promotions);
        } catch (error) {
            console.log("[ERRO]Falha na busca de usuário por id.");
            res.status(404).send("Usuário não encontrado.");
        }
    };
};

export default PromotionController;