import sequelize from '../database/connection';
import Sequelize from 'sequelize';

const Modelo = sequelize.define('modelo', {
    modelo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'modelo'
    }
  }, { tableName: 'modelos' });

  export default Modelo;
