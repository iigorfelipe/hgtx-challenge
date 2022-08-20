import UserModel from '../models/User';
import { IUser } from '../types/UserTypes';

class UserService {
  create = async (obj: IUser): Promise<UserModel> => {
    const newUser = await UserModel.create(obj);

    return newUser;
  };

  findAll = async (): Promise<UserModel[]> => {
    const users = await UserModel.findAll();

    return users;
  };

  findOne = async (id: string): Promise<UserModel | null> => {
    const user = await UserModel.findOne({ where: { id } });

    return user;
  };

  update = async (id: string, obj: IUser): Promise<UserModel | null > => {
    const user = await UserModel.findOne({ where: { id } });

    const updateUser = user ? await user.update({ obj }) : null;

    return updateUser;
  };

  destroy = async (id: string): Promise<void> => {
    await UserModel.destroy({ where: { id } });
  };
}

export default UserService;
