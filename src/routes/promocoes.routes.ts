import {Router} from 'express';
import promocoesDB from '../data/promocoes'


const promocoesRoutes = Router();


promocoesRoutes.get('/',(req,res)=>{

  return res.status(200).json(promocoesDB);

})



export default promocoesRoutes;