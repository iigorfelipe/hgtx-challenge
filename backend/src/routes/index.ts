import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.findAll);
router.post('/cadastro', UserController.create);
// router.put('/', UserController.update);
// router.delete('/', UserController.destroy);

export default router;
