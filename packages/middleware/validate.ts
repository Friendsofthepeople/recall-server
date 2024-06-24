import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

/**
 * Middleware function for Express.js that validates the request body against a given Zod schema.
 * If the validation fails, it responds with a 400 status code and the validation errors.
 * If the validation succeeds, it passes control to the next middleware.
 * @param schema A Zod schema object used to validate the request body.
 */
export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body);
  if (!result.success) return next(result.error);
  next();
};
