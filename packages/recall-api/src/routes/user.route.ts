import  { Request, Response, NextFunction, Router } from 'express';
import { userValidation } from '../../../validation';
import { validate } from '../../../validation/validate'
import { zodErrorHandler } from '../../../middleware/zodErrorValidation';


const router = Router();

router.post('/register', validate(userValidation), zodErrorHandler, (req: Request, res: Response, next: NextFunction) => {
  // Registration logic
  res.status(201).json({ message: 'User registered successfully' });
});

export default router;
