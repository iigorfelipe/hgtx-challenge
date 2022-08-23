import { DateDataType } from 'sequelize/types';

export type IUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  cpf: number;
  birthDate?: string;
  creationDate?: DateDataType;
};
