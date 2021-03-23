import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { subscriptions } from '../schema';

const subscribe = async (req: Request, res: Response) => {
  const { email, age } = req.body;

  try {
    // wait for mongo for index creation else
    // unique constraint would fail silently
    await subscriptions.init();

    const subscription = new subscriptions({ email, age });
    await subscription.save();
  } catch ({ code, message }) {
    let error;
    let statusCode;

    switch (code) {
      case 11000:
        statusCode = StatusCodes.CONFLICT;
        error = 'email already subscribed';
        break;

      default:
        error = message;
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        break;
    }

    return res.status(statusCode).json({ error });
  }

  return res.status(StatusCodes.OK).json({ success: 'email subscribed successfully' });
};

const getSubscribers = async (res: Response) => {
  try {
    const subscribers = await subscriptions.find();

    return res.status(StatusCodes.OK).json({ subscribers });
  } catch ({ message }) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: message });
  }
};

export { subscribe, getSubscribers };
