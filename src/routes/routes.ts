import {Router} from 'express';

import promotionsRoutes from './promotions.routes';
import usersRoutes from './users.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use('/api/v1/', authRoutes)
routes.use('/api/v1/promotions',promotionsRoutes)
routes.use('/api/v1/user',usersRoutes)

console.log("[DEBUG]Finalizada construção de rotas.");
export default routes;