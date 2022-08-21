import UserModel from '../models/User';

class LoginService {
  findEmail = async (email: string) => {
    const user = await UserModel.findOne({ where: { email } });

    return user;
  };
}

export default LoginService;
