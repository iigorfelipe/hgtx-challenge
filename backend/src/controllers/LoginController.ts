import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import Token from '../token/Token';

class LoginController {
  private token = new Token();

  private service = new LoginService();

  login = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { email, password } = req.body;

    const user = await this.service.findEmail(email);

    const id = user?.id;

    const token = this.token.createToken({ id, password });

    return res.status(200).json({ user: { id, email }, token });
  };
}

export default new LoginController();
