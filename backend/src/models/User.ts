import { DataTypes, DateDataType, Model } from 'sequelize';
import db from '../database/db';

class UserModel extends Model {
  id: number;

  name: string;

  email: string;

  password: string;

  phone: number;

  cpf: number;

  birthDate?: string;

  creationDate: DateDataType;
}

UserModel.init({
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
  cpf: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  birthDate: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  creationDate: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  modelName: 'user',
  sequelize: db,
  timestamps: false,
});

export default UserModel;
