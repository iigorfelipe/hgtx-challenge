import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private service = new UserService();

  create = async (req: Request, res: Response): Promise<Response> => {
    const {
      name, email, password, phone, cpf, birthDate,
    } = req.body;

    const obj = {
      name, email, password, phone, cpf, birthDate,
    };

    const newUser = await this.service.create(obj);

    return res.status(200).json(newUser);
  };

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.service.findAll();

    return res.status(200).json(users);
  };

  findOne = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const users = await this.service.findOne(id);

    return res.status(200).json(users);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const {
      name, email, password, phone, cpf, birthDate,
    } = req.body;

    const obj = {
      name, email, password, phone, cpf, birthDate,
    };

    const updateUser = await this.service.update(id, obj);

    return res.status(200).json(updateUser);
  };

  destroy = async (req: Request): Promise<void> => {
    const { id } = req.params;

    await this.service.destroy(id);
  };
}

export default new UserController();
