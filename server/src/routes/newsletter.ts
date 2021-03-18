import { Router, Request, Response } from 'express';

import { subscribe, getSubscribers } from '../controllers';
import { validator, subscribeParamsValidation } from '../middlewares';

const router = Router();

router.post('/subscribe', subscribeParamsValidation(), validator, async (req: Request, res: Response) => {
  await subscribe(req, res);
});

router.get('/get-subscribers', async (_, res) => {
  await getSubscribers(res);
});

export const newsletterRoutes = router;
