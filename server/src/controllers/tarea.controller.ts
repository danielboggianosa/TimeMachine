import { Request, Response } from 'express';
import Tarea from '../models/tareas';

class TareasController {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await Tarea.create(req.body)
            .then((tarea:any) => {
            console.log("Tarea auto-generated ID:", tarea.id);
            res.json(tarea);
          });
    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await Tarea.findAll()
        .then(
            (tareas:any) => {
                console.log("All users:", JSON.stringify(tareas, null, 4));
                res.json(tareas);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Tarea.findOne({where:{id: id}})
        .then(
            (tarea:any) => {
                console.log("All users:", JSON.stringify(tarea, null, 4));
                res.json(tarea);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Tarea.update(
            body, {
            where: {
              id: id
            }
          }).then((tarea:any) => {
            console.log("Done");
            res.json(tarea);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Tarea.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const tareasController = new TareasController();
export default tareasController;