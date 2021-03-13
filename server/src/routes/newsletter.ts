import { Router } from 'express';

const router = Router();

router.post('/subscribe', async (_, res) => {
  res.sendStatus(200);
});

router.get('/subscription-list', async (_, res) => {
  res.status(200).send('list of all subscriptions');
});

export const newsletterRoutes = router;
