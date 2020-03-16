import { Request, Response } from 'express';
import Menu from '../models/menu';
import MenuGrupo from '../models/menu-grupo';
import Permiso from '../models/permiso';
import Rol from '../models/rol';
import Modelo from '../models/modelo';

class MenusController {
    
    //CREATE Menu
    public async create (req: Request, res: Response): Promise<void> {
        // console.log('Por ahora ya no se pueden crear más menus');
        // res.json('Por ahora ya no se pueden crear más menus');
        await Menu.bulkCreate(req.body, {include:[{model: Menu, as: 'submenus'}]})
            .then((menu:any) => {
            // console.log("Menu auto-generated ID:", menu.id);
            res.json({msg: 'Menu creado correctamente',data:menu});
          });
    }
    
    //CREATE Grupo
    public async createGrupo (req: Request, res: Response): Promise<void> {
        // console.log('Por ahora ya no se pueden crear más menus');
        // res.json('Por ahora ya no se pueden crear más menus');
        await MenuGrupo.create(req.body, {
          include:[{model: Menu, as:'menus', include:[{model:Menu, as:'submenus'}]} ]
        })
            .then((menu:any) => {
            // console.log("Menu auto-generated ID:", menu.id);
            res.json({msg: 'Grupo creado correctamente',data:menu});
          });
    }
    
    //CREATE Permiso
    public async createPermiso (req: Request, res: Response): Promise<void> {
        // console.log('Por ahora ya no se pueden crear más menus');
        // res.json('Por ahora ya no se pueden crear más menus');
        await Permiso.bulkCreate(req.body)
            .then((menu:any) => {
            // console.log("Menu auto-generated ID:", menu.id);
            res.json({msg: 'Permiso creado correctamente',data:menu});
          });
    }
    
    //CREATE ROL
    public async createRol (req: Request, res: Response): Promise<void> {
        await Rol.bulkCreate(req.body)
            .then((menu:any) => {
            res.json({msg: 'Rol creado correctamente',data:menu});
          });
    }
    
    //CREATE MODELO
    public async createModelo (req: Request, res: Response): Promise<void> {
        await Modelo.bulkCreate(req.body)
            .then((modelo:any) => {
            res.json({msg: 'Modelo creado correctamente',data:modelo});
          });
    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await MenuGrupo.findAll({
            // where:{rol: 1},
            include:[{model: Menu, as:'menus', include:[{model:Menu, as:'submenus'}]} ]
        })
        .then(
            (menus:any) => {
                // console.log("All users:", JSON.stringify(menus, null, 4));
                res.json({success:true, data:menus});
            }
        );
    }

    //READ ALL ROL PERMISO MODELO
    public async listPermiso (req: Request, res: Response): Promise<any> {
        const {rol,modelo} = req.params;
        await Permiso.findOne({
            attributes: ['nivel'],
            where:{rol, modelo},
            include:[
              {model: Modelo, as:'Modelo', attributes: ['modelo']},
              {model: Rol, as:'Rol', attributes: ['rol']}
            ]
        })
        .then(
            (rol:any) => {
                // console.log("All users:", JSON.stringify(menus, null, 4));
                let rolando = { 
                  nivel: rol.nivel, 
                  modelo: rol.Modelo.modelo, 
                  rol: rol.Rol.rol 
                }
                res.json(rolando);
            }
        );
    }

    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Menu.findOne({where:{id: id}})
        .then(
            (menu:any) => {
                // console.log("All users:", JSON.stringify(menu, null, 4));
                res.json(menu);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Menu.update(
            body, {
            where: {
              id: id
            }
          }).then((menu:any) => {
            console.log("Done");
            res.json(menu);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Menu.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const menusController = new MenusController();
export default menusController;