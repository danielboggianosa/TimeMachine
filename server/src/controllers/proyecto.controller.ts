import { Request, Response } from 'express';
import Proyecto from '../models/proyecto';

class ProyectosController {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await Proyecto.create(req.body)
            .then((proyecto:any) => {
            console.log("Proyecto auto-generated ID:", proyecto.id);
            res.json(proyecto);
          });
    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await Proyecto.findAll()
        .then(
            (proyectos:any) => {
                console.log("All users:", JSON.stringify(proyectos, null, 4));
                res.json(proyectos);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Proyecto.findOne({where:{id: id}})
        .then(
            (proyecto:any) => {
                console.log("All users:", JSON.stringify(proyecto, null, 4));
                res.json(proyecto);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Proyecto.update(
            body, {
            where: {
              id: id
            }
          }).then((proyecto:any) => {
            console.log("Done");
            res.json(proyecto);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Proyecto.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const proyectosController = new ProyectosController();
export default proyectosController;