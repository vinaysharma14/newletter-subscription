import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { subscriptions } from '../schema';

const subscribe = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const subscription = new subscriptions({ email });
    await subscription.save();
  } catch ({ code, message }) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ code, message });
  }

  res.sendStatus(StatusCodes.OK);
};

export { subscribe };
