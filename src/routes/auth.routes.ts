import { Router } from "express";
import AuthController from "../controllers/AuthController";

const AuthRoutes = Router();

//Login route
AuthRoutes.post("/login", AuthController.login);

console.log("[DEBUG]Criado rotas de Autenticação.");
export default AuthRoutes;