import MenuGrupo from '../models/menu-grupo';
import Menu from '../models/menu';
import Rol from '../models/rol';
import Modelo from '../models/modelo';
import Permiso from '../models/permiso';
import Usuario from '../models/usuario'
import sequelize from './connection';
import Estado from '../models/estado'
import Equipo from '../models/equipo';
import Proyecto from '../models/proyecto';
import Tarea from '../models/tareas';

// CONFIGURACIÓN DE ASOCIACIONES
/* Crea un campo llamado 'grupo' en la tabla MENU y su referencia para
realizar un join es 'menus. En esta caso MenuGrupo tiene muchos Menu */
MenuGrupo.hasMany(Menu, {
  foreignKey: 'grupo',
  as: 'menus'
});

/* Crea una tabla MENU_SUBMENUS que relaciona los menu con sus respectivos submenus
Para realizar una consulta con join se usará el alias 'submenus' */
Menu.belongsToMany(Menu, {
  through: 'menu_submenus',
  foreignKey: 'menu',
  otherKey: 'submenu',
  as: 'submenus'
});

/* Crea una tabla ROLES_MENU para relaciona los menus disponibles para determinado rol
Para realizar una consulta con join se usará el alias 'mRoles' */
Rol.belongsToMany(Menu, {
  through: 'roles_menus',
  foreignKey: 'rol',
  otherKey: 'menu',
  as: 'Menus'
});

Permiso.belongsTo(Rol, {
  foreignKey: 'rol',
  as: 'Rol'
})

/* Crea el campo 'modelo' en la tabla PERMISOS con referencia el 'id' de MODELO
Para realizar una consulta con join se usará el alias 'modelos' */
Permiso.belongsTo(Modelo, {
  foreignKey: 'modelo',
  as: 'Modelo'
});

/* Crea el campo 'rol' en la tabla PERMISOS con referencia el 'id' de ROLES
Para realizar una consulta con join se usará el alias 'uRol'.  */
Rol.hasOne(Usuario, {
  foreignKey: 'rol',
  as: 'uRol'
});

Estado.belongsToMany(Proyecto, {
  through: 'estados_proyectos',
  foreignKey: 'estado',
  otherKey: 'proyecto',
  as: 'pEstados'
});

Estado.belongsToMany(Tarea, {
  through: 'estados_tareas',
  foreignKey: 'estado',
  otherKey: 'tarea',
  as: 'tEstados'
})

/* Crea una tabla EQUIPO_USUARIOS para relacionar los usuarios que pertenecen a determinado equipo
Para realizar una consulta con join se usará el alias 'uEquipos' */
Equipo.belongsToMany(Usuario, {
  through: 'equipos_usuarios',
  foreignKey: 'equipo',
  otherKey: 'usuario',
  as: 'Usuarios'
})

/* De esta forma se asocia el campo lider en Equipo a el usuario que corresponde por su ID*/
// Equipo.hasOne(Usuario, {
//   foreignKey: 'id'
// });

Usuario.hasMany(Proyecto, {
  foreignKey: 'responsable',
  as:'responsable'
});

Usuario.hasMany(Tarea, {
  foreignKey: 'creador',
  as: 'uTareas'
})

Equipo.hasOne(Proyecto, {
  foreignKey: 'equipo',
  as:'eProyectos',
});

/* Muchas tareas pertenecen a un mismo proyecto o un poyecto tiene muchas tareas
usar 'tareas. En la tabla Tarea se creará un campo llamado proyecto que hace referencia
al ID del proyecto, para hacer una consulta con join se debe utlizar el alias 'pTareas' */
Proyecto.hasMany(Tarea, {
  foreignKey: 'proyecto',
  as: 'pTareas',
});


Tarea.belongsToMany(Tarea, {
  through: 'tareas_subtareas', 
  foreignKey: 'tarea', 
  otherKey: 'subtarea',
  as: 'subtareas'
});

// CREACIÓN DE LA BASE DE DATOS
const db_setup = sequelize.sync(
  // Creación forzada: eliminará tablas existentes y creará nuevas
  // {force:true}
).
then(
  ()=>console.log('Base de datos configurada')
)
.catch(
  (err:any)=>console.error(err)
)

export default db_setup;
