import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import Logger from '@recall-server/common/logger';

export const zodErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    Logger.error('---Zod Validation Error--->', false, err);
    return res.status(400).json(err.format());
  }
  next(err);
};
