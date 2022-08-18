import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private service = new UserService();

  create = async (req: Request, res: Response): Promise<Response> => {
    const user = await this
      .service
      .create(req.body)
      .then(() => res.status(200).json({ mensagem: 'Success' }))
      .catch(() => res.status(400).json({ mensagem: 'Failed' }));

    return user;
  };
}

export default new UserController();
