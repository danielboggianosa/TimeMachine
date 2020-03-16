import { Request, Response } from 'express';
import Estado from '../models/estado';

class EstadosController {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        // console.log('Por ahora ya no se pueden crear más estados');
        // res.json('Por ahora ya no se pueden crear más estados');
        await Estado.create(req.body)
            .then((estado:any) => {
            console.log("Estado auto-generated ID:", estado.id);
            res.json({msg: 'Estado creado correctamente',data:estado});
          });
    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await Estado.findAll()
        .then(
            (estados:any) => {
                console.log("All users:", JSON.stringify(estados, null, 4));
                res.json(estados);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Estado.findOne({where:{id: id}})
        .then(
            (estado:any) => {
                console.log("All users:", JSON.stringify(estado, null, 4));
                res.json(estado);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Estado.update(
            body, {
            where: {
              id: id
            }
          }).then((estado:any) => {
            console.log("Done");
            res.json(estado);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Estado.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const estadosController = new EstadosController();
export default estadosController;