import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/User';
import { JwtPayload } from '../types/JwtPayload';
import Token from './Token';

class Authorization {
  private token = new Token();

  authentication = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { authorization } = req.headers;

    const key = authorization?.split(' ')[1];

    if (!key) {
      res.status(401).json({ message: 'unauthorized access' });
    }

    const { id } = this.token.decodeToken(key as string) as JwtPayload;

    const user = UserModel.findOne({ where: { id } });

    if (!user) {
      res.status(401).json({ message: 'unauthorized access' });
    }

    next();
  };
}

export default new Authorization();
