import {Router} from 'express';
import promocoesDB from '../data/promotions'


const promocoesRoutes = Router();


promocoesRoutes.get('/',(req,res)=>{

  return res.status(200).json(promocoesDB);

})

console.log("[DEBUG]Criado as rotas de promoções.");
export default promocoesRoutes;