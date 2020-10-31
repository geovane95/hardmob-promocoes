import { Router } from 'express';
import UserController from '../controllers/UserController';
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";


const usersRoutes = Router();

usersRoutes.get('/:id[0-9]+', [checkJwt, checkRole(["ADMIN"])], UserController.getOneById);

console.log("[DEBUG]Criado as rotas de Usuários.");
export default usersRoutes;