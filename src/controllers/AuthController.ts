import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

class AuthController {
    static login = async (req: Request, res: Response) => {
        console.log("[DEBUG]Chamando serviço de autenticação.");
        AuthenticateUserService.login(req,res);
    };
}
export default AuthController;