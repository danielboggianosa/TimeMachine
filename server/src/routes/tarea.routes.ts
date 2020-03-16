import { Router } from 'express';
import tareasController from '../controllers/tarea.controller';

class TareasRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', tareasController.create);
        this.router.get('/', tareasController.list);
        this.router.get('/:id', tareasController.getOne);
        this.router.delete('/:id', tareasController.delete);
        this.router.put('/:id', tareasController.update);
    }
}

const tareasRoutes = new TareasRoutes();
export default tareasRoutes.router;