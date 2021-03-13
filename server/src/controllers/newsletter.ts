import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const subscribe = (req: Request, res: Response) => {
  res.sendStatus(StatusCodes.OK);
};

export { subscribe };
