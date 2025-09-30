import { Request, Response } from 'express';
import { errorResponse } from './errorMiddleware';

export const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(404).json(errorResponse('Resource not found', 'NOT_FOUND'));
};
