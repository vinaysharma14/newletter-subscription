import { Router, Request, Response } from 'express';

import { subscribe, getSubscriptionsList } from '../controllers';
import { validator, subscribeParamsValidation } from '../middlewares';

const router = Router();

router.post('/subscribe', subscribeParamsValidation(), validator, async (req: Request, res: Response) => {
  await subscribe(req, res);
});

router.get('/subscription-list', async (_, res) => {
  await getSubscriptionsList(res);
});

export const newsletterRoutes = router;
