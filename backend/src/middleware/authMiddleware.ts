import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { ApiError } from './errorMiddleware';

export interface UserPayload {
  id: number;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new ApiError('Authentication required', 401, 'UNAUTHORIZED');
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      throw new ApiError('Invalid token format', 401, 'UNAUTHORIZED');
    }
    
    try {
      const decoded = jwt.verify(token, config.security.jwtSecret) as UserPayload;
      req.user = decoded;
      next();
    } catch (error) {
      throw new ApiError('Invalid or expired token', 401, 'UNAUTHORIZED');
    }
  } catch (error) {
    next(error);
  }
};
