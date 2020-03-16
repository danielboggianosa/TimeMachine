import { Router } from 'express';
import menusController from '../controllers/menu.controller';

class MenusRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/crearMenu', menusController.create);
        this.router.post('/crearGrupo', menusController.createGrupo);
        this.router.post('/crearPermiso', menusController.createPermiso);
        this.router.post('/crearRol', menusController.createRol);
        this.router.post('/crearModelo', menusController.createModelo);
        this.router.get('/', menusController.list);
        this.router.get('/rol/:rol/:modelo', menusController.listPermiso);
        this.router.get('/:id', menusController.getOne);
        this.router.delete('/:id', menusController.delete);
        this.router.put('/:id', menusController.update);
    }
}

const menusRoutes = new MenusRoutes();
export default menusRoutes.router;