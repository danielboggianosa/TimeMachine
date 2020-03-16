import { Router } from 'express';
import usuariosController from '../controllers/usuario.controller';

class UsuariosRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', usuariosController.create);
        this.router.get('/', usuariosController.list);
        this.router.get('/:id', usuariosController.getOne);
        this.router.delete('/:id', usuariosController.delete);
        this.router.put('/:id', usuariosController.update);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;