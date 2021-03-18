import { Router } from 'express';
import { newsletterRoutes } from '../routes';

const router = Router();

router.use('/newsletter', newsletterRoutes);

export default router;
