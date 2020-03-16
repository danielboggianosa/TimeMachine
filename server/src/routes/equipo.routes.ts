import { Router } from 'express';
import equiposController from '../controllers/equipo.controller';

class EquiposRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', equiposController.create);
        this.router.post('/createEquipo/', equiposController.createEquipo);
        this.router.get('/', equiposController.list);
        this.router.get('/getEquipo/', equiposController.getEquipo);
        this.router.get('/:id', equiposController.getOne);
        this.router.put('/:id', equiposController.update);
        this.router.delete('/:id', equiposController.delete);
    }
}

const equiposRoutes = new EquiposRoutes();
export default equiposRoutes.router;