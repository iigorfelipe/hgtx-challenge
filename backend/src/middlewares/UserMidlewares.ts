import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

class UserMiddlewares {
  private service = new UserService();

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const {
      name, email, password, phone, cpf,
    } = req.body;

    if (!name) res.status(400).json({ message: '"name" is required' });

    if (!email) res.status(400).json({ message: '"email" is required' });

    if (!password) res.status(400).json({ message: '"password" is required' });

    if (!phone) res.status(400).json({ message: '"phone" is required' });

    if (!cpf) res.status(400).json({ message: '"cpf" is required' });

    next();
  };

  findAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const users = await this.service.findAll();

    if (!users) res.status(400).json({ message: 'users not found' });

    next();
  };

  findOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    const user = await this.service.findOne(id);

    if (!user) res.status(400).json({ message: 'user not found' });

    next();
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    const updateUser = await this.service.update(id, req.body);

    if (!updateUser) res.status(400).json({ message: 'Failed update' });

    next();
  };
}

export default new UserMiddlewares();
