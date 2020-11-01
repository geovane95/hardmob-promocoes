import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";

import { User } from "../models/User";
import config from "../config/config";

class AuthenticateUserService {
	static login = async (req: Request, res: Response) => {
		console.log("[DEBUG]Executando serviço de autenticação.");
		//Check if username and password are set
		let { username, password } = req.body;
		if (!(username && password)) {
			res.status(400).send();
		}

		//Get user from database
		const userRepository = getRepository(User);
		let user: User;
		try {
			console.log("[DEBUG]Buscando usuário.");
			user = await userRepository.findOneOrFail({ where: { username } });
			console.log("[DEBUG]Usuário encontrado: " + user);
		} catch (error) {
			res.status(401).send();
		}

		//Check if encrypted password match
		if (!user.checkIfUnencryptedPasswordIsValid(password)) {
			res.status(401).send();
			return;
		}

		//Sing JWT, valid for 1 hour
		const token = jwt.sign(
			{ userId: user.id, username: user.username },
			config.jwtSecret,
			{ expiresIn: "1h" }
		);
		console.log("[DEBUG]Token criado.");

		//Send the jwt in the response
		console.log("[DEBUG]Retornando token gerado.");
		res.json({token: token}).send();
	};
}
export default AuthenticateUserService;