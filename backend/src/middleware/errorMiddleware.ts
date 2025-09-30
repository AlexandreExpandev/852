import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

export class ApiError extends Error {
  statusCode: number;
  code: string;
  details?: any;

  constructor(message: string, statusCode: number, code: string, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.name = 'ApiError';
  }
}

export const errorResponse = (message: string, code: string = 'INTERNAL_ERROR', details?: any): ErrorResponse => {
  return {
    success: false,
    error: {
      code,
      message,
      details
    },
    timestamp: new Date().toISOString()
  };
};

export const errorMiddleware = (err: Error | ApiError, req: Request, res: Response, next: NextFunction): void => {
  const isApiError = err instanceof ApiError;
  const statusCode = isApiError ? err.statusCode : 500;
  const errorCode = isApiError ? err.code : 'INTERNAL_ERROR';
  const message = err.message || 'Internal Server Error';
  const details = isApiError ? err.details : undefined;

  // Log error
  logger.error(`${statusCode} - ${message}`, {
    path: req.path,
    method: req.method,
    error: err.stack,
    details
  });

  // Send error response
  res.status(statusCode).json(errorResponse(message, errorCode, details));
};
