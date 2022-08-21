import { compareSync } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginMidleware {
  private service = new LoginService();

  login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { email, password } = req.body;

    const user = await this.service.findEmail(email);

    const verifyPassword = user
      ? compareSync(password, user.password)
      : res.status(401).json({ message: 'Incorrect email or password' });

    if (!verifyPassword) {
      res.status(401).json({ message: 'Incorrect email or password' });
    }

    next();
  };
}

export default new LoginMidleware();
