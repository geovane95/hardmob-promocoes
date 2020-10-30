import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService'


const usuarioRoutes = Router();
const authenticateUserService = new AuthenticateUserService();

usuarioRoutes.post('/', (req, res) => {
	try {
		authenticateUserService.execute(req, res);
	} catch (err) {

		return res.status(401).json({ error:true,message: err.message });
	}

})



export default usuarioRoutes;