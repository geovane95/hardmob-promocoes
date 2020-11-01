import {Router} from 'express';
import PromotionsController from '../controllers/PromotionsController';
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";


const promocoesRoutes = Router();


promocoesRoutes.get('/', [checkJwt, checkRole(["ADMIN"])], PromotionsController.getAllPromotions);


console.log("[DEBUG]Criado as rotas de promoções.");
export default promocoesRoutes;