import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';


/**
 * Middleware function to validate incoming request data against a Zod schema.
 * If validation passes, it proceeds to the next middleware; otherwise, it responds with a 400 status and validation error details.
 * @param schema - A Zod schema object to validate the request data against.
 */
export const validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync(req.body);
    return next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: err.errors,
      });
    }
    next(err);
  }
};
