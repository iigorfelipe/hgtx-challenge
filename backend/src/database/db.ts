import { Sequelize, Options } from 'sequelize';

const connection: Options = {
  database: process.env.DB_BASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

export default new Sequelize(connection);
