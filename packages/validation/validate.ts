import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

/**
 * Middleware function to validate request body against a Zod schema.
 * 
 * @param schema - Zod schema to validate the request body against.
 * @returns Express middleware function to handle validation.
 */
export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        next(result.error);
    } else {
        next();
    }
};
