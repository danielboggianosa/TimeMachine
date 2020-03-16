import Sequelize from 'sequelize';
import sequelize from '../database/connection'

const MenuGrupo = sequelize.define('menuGrupo', {
  titulo: {
    type: Sequelize.STRING,
    unique: true,
    field: 'titulo'
  }
}, { tableName: 'menu_grupos' });

export default MenuGrupo;