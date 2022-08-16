import { DataTypes } from 'sequelize';
import db from '../database/db';

const UserModel = db.define('user', {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  birthDate: {
    allowNull: true,
    type: DataTypes.STRING,
  },
});

export default UserModel;
