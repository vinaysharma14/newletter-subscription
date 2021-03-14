import { StatusCodes } from 'http-status-codes';
import { Router, Request, Response } from 'express';

import { subscribe } from '../controllers';
import { validator, subscribeParamsValidation } from '../middlewares';

const router = Router();

router.post('/subscribe', subscribeParamsValidation(), validator, async (req: Request, res: Response) => {
  await subscribe(req, res);
});

router.get('/subscription-list', async (_, res) => {
  res.status(StatusCodes.OK).send('list of all subscriptions');
});

export const newsletterRoutes = router;
