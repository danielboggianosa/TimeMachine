import express from 'express';
import { Application } from 'express-serve-static-core';
import morgan from 'morgan';
import cors from 'cors';
import proyectosRoutes from './routes/proyecto.routes'
import estadosRoutes from './routes/estado.routes'
import usuariosRoutes from './routes/usuario.routes';
import equiposRoutes from './routes/equipo.routes';
import tareaRoutes from './routes/tarea.routes';
import db_setup from './database/setup';
import menusRoutes from './routes/menu.routes'
import authRoutes from './routes/auth.routes'

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.db_config();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({"extended": false}));
    }

    routes(): void {        
        this.app.use('/api/equipos', equiposRoutes);
        this.app.use('/api/estados', estadosRoutes);
        this.app.use('/api/proyectos', proyectosRoutes);
        this.app.use('/api/tareas', tareaRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
        this.app.use('/api/menus', menusRoutes);
        this.app.use('/api/auth', authRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto ', this.app.get('port'));
        })
    }

    db_config(): void{        
        db_setup;
    }

}

const server = new Server();
server.start();