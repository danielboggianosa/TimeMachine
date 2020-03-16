import { Request, Response } from 'express';
import Equipo from '../models/equipo';
import Usuario from '../models/usuario';

class EquiposController {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await Equipo.create(req.body)
            .then((equipo:any) => {
            console.log("Equipo auto-generated ID:", equipo.id);
            res.json(equipo);
          });
    }

    public async createEquipo(req: Request, res: Response):Promise<void>{
      await Equipo.create(req.body, {include:[{model: Usuario, as:'Usuarios'}]})
      .then((equipo:any)=>res.json({data:equipo}))
      .catch((err:any)=>res.json({err:err}));
    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await Equipo.findAll()
        .then(
            (equipos:any) => {
                console.log("All equipos:", JSON.stringify(equipos, null, 4));
                res.json(equipos);
            }
        );
    }
    //READ WITH Users
    public async getEquipo (req: Request, res: Response): Promise<any> {
        await Equipo.findAll({include:[{model: Usuario, as:'lider'}]})
        .then(
            (equipos:any) => {
                // console.log("All equipos:", JSON.stringify(equipos, null, 4));
                res.json({success:true, data: equipos});
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Equipo.findOne({where:{id: id}})
        .then(
            (equipo:any) => {
                console.log("Equipo:", JSON.stringify(equipo, null, 4));
                res.json(equipo);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Equipo.update(
            body, {
            where: {
              id: id
            }
          }).then((equipo:any) => {
            console.log("Done");
            res.json(equipo);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Equipo.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

    // LISTAS DE USUARIOS:
    public async listas(req: Request, res: Response): Promise<void>{
      Equipo.findAll({
        include: [{ all: true }]
      }).then((users:any) => {
        console.log(JSON.stringify(users));
        res.json(users)
      });
    }
}

const equiposController = new EquiposController();
export default equiposController;