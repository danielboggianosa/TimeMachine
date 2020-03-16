import sequelize from '../database/connection';
import Sequelize from 'sequelize';

  const Permiso = sequelize.define('permiso', {
    nivel: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rol:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    modelo:{
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, { tableName: 'permisos' });

  export default Permiso;
