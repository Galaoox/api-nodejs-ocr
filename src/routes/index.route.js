import { Router } from  'express';
const router = Router();
import file from './file.route';

router.use('/file', file);

export default router;