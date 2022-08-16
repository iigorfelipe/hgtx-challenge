import { Request, Response } from 'express';
import UserModel from '../models/User';

class UserController {
  create = async (req: Request, res: Response) => {
    await UserModel
      .create(req.body)
      .then(() => res.status(200).json({ mensagem: 'Success' }))
      .catch(() => res.status(400).json({ mensagem: 'Failed' }));
  };
}

export default new UserController();
