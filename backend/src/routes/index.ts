import { Router } from 'express';
import Authorization from '../token/Authorization';
import UserMidlewares from '../middlewares/UserMidlewares';
import UserController from '../controllers/UserController';
import LoginMidleware from '../middlewares/LoginMidleware';
import LoginController from '../controllers/LoginController';

const router = Router();

router.get(
  '/',
  Authorization.authentication,
  UserMidlewares.findAll,
  UserController.findAll,
);

router.get(
  '/:id',
  Authorization.authentication,
  UserMidlewares.findOne,
  UserController.findOne,
);

router.post(
  '/register',
  UserMidlewares.create,
  UserController.create,
);

router.post(
  '/login',
  LoginMidleware.login,
  LoginController.login,
);

router.put(
  '/:id',
  Authorization.authentication,
  UserMidlewares.update,
  UserController.update,
);

router.delete(
  '/:id',
  Authorization.authentication,
  UserMidlewares.findAll,
  UserController.destroy,
);

export default router;
