import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMidlewares from '../middlewares/UserMidlewares';

const router = Router();

router.get(
  '/',
  UserMidlewares.findAll,
  UserController.findAll,
);

router.get(
  '/:id',
  UserMidlewares.findOne,
  UserController.findOne,
);

router.post(
  '/cadastro',
  UserMidlewares.create,
  UserController.create,
);

router.put(
  '/:id',
  UserMidlewares.update,
  UserController.update,
);

router.delete(
  '/:id',
  UserMidlewares.findAll,
  UserController.destroy,
);

export default router;
