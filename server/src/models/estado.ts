import sequelize from '../database/connection';
import Sequelize from 'sequelize'

const Estado = sequelize.define('estado', {
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { tableName: 'estados' });

export default Estado;
