import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private service = new UserService();

  create = async (req: Request, res: Response): Promise<Response> => {
    const newUser = await this
      .service
      .create(req.body)
      .then(() => res.status(200).json({ mensagem: 'Success' }))
      .catch(() => res.status(400).json({ mensagem: 'Failed' }));

    return newUser;
  };

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this
      .service
      .findAll()
      .then(() => res.status(200).json({ mensagem: 'Success' }))
      .catch(() => res.status(400).json({ mensagem: 'Failed' }));

    return users;
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const updateUser = await this
      .service
      .update(id, req.body)
      .then(() => res.status(200).json({ mensagem: 'Success' }))
      .catch(() => res.status(400).json({ mensagem: 'Failed' }));

    return updateUser;
  };
}

export default new UserController();
