import {Router} from 'express';

import promocoesRoutes from './promocoes.routes';
import userRoutes from './usuario.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use('/api/v1/login', authRoutes)
routes.use('/api/v1/promocoes',promocoesRoutes)
routes.use('/api/v1/user',userRoutes)

export default routes;