import sequelize from '../database/connection';
import Sequelize from 'sequelize'
import Usuario from './usuario';

const Equipo = sequelize.define('equipo', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
    descripcion:{
        type: Sequelize.TEXT,
    },
    imagen:{
        type: Sequelize.TEXT,
    },
    // lider:{
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references:{
    //     model: Usuario
    //   }
    // }
}, { tableName: 'equipos' });

export default Equipo;