import sequelize from '../database/connection';
import Sequelize from 'sequelize';

const Proyecto = sequelize.define('proyecto',{
    titulo: {
    type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING
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
    fecha:{ // Fecha de Entrega estimada según cálculos
        type: Sequelize.DATE    
    },
    horas:{ //Horas de producción diarias
        type: Sequelize.INTEGER
    }
}, { tableName: 'proyectos' });

export default Proyecto;