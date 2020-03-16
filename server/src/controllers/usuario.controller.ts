import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import bcrypt, { hash } from 'bcrypt'

class UsuariosController {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        
        await bcrypt.hash(req.body.password, 10, (err,hash)=>{
          if(hash){ 
            req.body.password = hash;
            Usuario.create(req.body)
              .then((usuario:any) => {
                console.log("Usuario creado con ID:", usuario.id);
                res.json({msg: 'Usuario creado exitosamente', data: usuario});
              })
              .catch((error:any)=>{
                console.log('Hubo un error al crear el registro');
                if(error.errors.type === "unique_violation"){
                  res.json({msg: 'Este correo ya se encuentra registrado'});
                }
                else{
                  res.json(error.errors.type);
                }
              });
          }
          if(err) throw err;
        })

    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await Usuario.findAll()
        .then(
            (usuarios:any) => {
                console.log("All users:", JSON.stringify(usuarios, null, 4));
                res.json(usuarios);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Usuario.findOne({where:{id: id}})
        .then(
            (usuario:any) => {
                console.log("All users:", JSON.stringify(usuario, null, 4));
                res.json(usuario);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Usuario.update(
            body, {
            where: {
              id: id
            }
          }).then((usuario:any) => {
            console.log("Done");
            res.json(usuario);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Usuario.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const usuariosController = new UsuariosController();
export default usuariosController;