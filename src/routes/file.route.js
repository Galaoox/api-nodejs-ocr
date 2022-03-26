import { Router } from 'express';
import { readFile } from '../controllers/file.controller';
import { upload  } from '../tools/multer'; 

const router = Router();

router.get('',upload.single('image'), readFile);

export default router;