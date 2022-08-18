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

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this
      .service
      .findAll()
      .then(() => res.status(200).json({ mensagem: 'Success' }))
      .catch(() => res.status(400).json({ mensagem: 'Failed' }));

    return users;
  };
}

export default new UserController();
