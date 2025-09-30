import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ApiError } from './errorMiddleware';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(new ApiError('Validation failed', 422, 'VALIDATION_ERROR', error.format()));
      } else {
        next(error);
      }
    }
  };
};

export const validationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // This is a placeholder middleware that will be replaced with specific schema validation
  // in actual implementation using the validate function above
  next();
};
