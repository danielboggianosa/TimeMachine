import { Router } from 'express';
import authController from '../controllers/auth.controller';

class AuthRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/login', authController.authenticate);
        this.router.post('/register', authController.register);
        this.router.post('/recover', authController.recover);
        this.router.post('/reset', authController.reset);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;