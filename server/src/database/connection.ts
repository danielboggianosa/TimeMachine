import db from './config';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.name,db.user,db.pass,db.connection);
export default sequelize;