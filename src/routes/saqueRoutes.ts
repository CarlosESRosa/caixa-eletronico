import { Router } from 'express';
import { SaqueController } from '../controllers/SaqueController';
import { errorMiddleware } from '../middlewares/errorMiddleware';

const router = Router();

router.post('/saque', SaqueController.handle);
router.use(errorMiddleware);

export default router;
