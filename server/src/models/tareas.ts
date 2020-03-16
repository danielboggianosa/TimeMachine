import Sequelize from 'sequelize';
import sequelize from '../database/connection';

const Tarea = sequelize.define('tarea',{ 
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descripcion:{
      type: Sequelize.TEXT,
    },
    inicio:{
      type: Sequelize.DATE
    },
    final:{
      type: Sequelize.DATE
    },
    tiempo:{
      type: Sequelize.TIME
    },
    duracion:{
      type: Sequelize.TIME
    },
    proyecto:{
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  },{ tableName: 'tareas' });

  export default Tarea;