import { Router } from "express";
import AuthController from "../services/AuthenticateUserService";
import { checkJwt } from "../middlewares/checkJwt";

const AuthRoutes = Router();

//Login route
AuthRoutes.post("/login", AuthController.login);

//Change my password
AuthRoutes.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;