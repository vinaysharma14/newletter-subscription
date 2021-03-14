import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { subscriptions } from '../schema';

const subscribe = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const subscription = new subscriptions({ email });
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

export { subscribe };
