import { StatusCodes } from 'http-status-codes';
import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.mapped() });
  }

  next();
};

export { validator };
