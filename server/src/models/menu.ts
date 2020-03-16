import sequelize from '../database/connection';
import Sequelize from 'sequelize';

const Menu = sequelize.define('menu', {
    titulo: {
      type: Sequelize.STRING,
      field: 'titulo'
    },
    icono: {
      type: Sequelize.STRING,
      field: 'icono'
    },
    link: {
      type: Sequelize.STRING,
      field: 'link'
    },
    subtitulo: {
      type: Sequelize.STRING,
      field: 'subtitulo'
    }
  }, { tableName: 'menus' });

export default Menu;