import UserModel from '../models/User';
import { IUser } from '../interfaces/UserTypes';

class UserService {
  create = async (obj: IUser): Promise<UserModel> => {
    const user = await UserModel.create({ obj });

    return user;
  };
}

export default UserService;
