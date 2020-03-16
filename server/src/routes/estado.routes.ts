import { Router } from 'express';
import estadosController from '../controllers/estado.controller';

class EstadosRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', estadosController.create);
        this.router.get('/', estadosController.list);
        this.router.get('/:id', estadosController.getOne);
        this.router.delete('/:id', estadosController.delete);
        this.router.put('/:id', estadosController.update);
    }
}

const estadosRoutes = new EstadosRoutes();
export default estadosRoutes.router;