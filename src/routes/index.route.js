import { Router } from  'express';
const router = Router();
import foodRoutes from './food.route';

router.use('/file', foodRoutes);

export default router;