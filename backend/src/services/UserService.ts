import UserModel from '../models/User';
import { IUser } from '../types/UserTypes';

class UserService {
  create = async (obj: IUser): Promise<UserModel> => {
    const user = await UserModel.create(obj);

    return user;
  };

  findAll = async (): Promise<UserModel[]> => {
    const users = await UserModel.findAll();

    return users;
  };
}

export default UserService;
