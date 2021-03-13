import { Request, Response } from 'express';

const subscribe = (req: Request, res: Response) => {
  res.sendStatus(200);
};

export { subscribe };
