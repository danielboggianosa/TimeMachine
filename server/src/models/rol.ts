import sequelize from '../database/connection';
import Sequelize from 'sequelize';

  const Rol = sequelize.define('rol', {
    rol: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'rol'
    }
  }, { tableName: 'roles' });

  export default Rol;
