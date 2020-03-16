import { Router } from 'express';
import proyectosController from '../controllers/proyecto.controller';

class ProyectosRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/', proyectosController.list);
        this.router.get('/:id', proyectosController.getOne);
        this.router.post('/', proyectosController.create);
        this.router.delete('/:id', proyectosController.delete);
        this.router.put('/:id', proyectosController.update);
    }
}

const proyectosRoutes = new ProyectosRoutes();
export default proyectosRoutes.router;