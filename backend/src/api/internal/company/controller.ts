import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { companyGet, companyUpdate } from '../../../services/company';
import { validate } from '../../../middleware/validationMiddleware';
import { successResponse } from '../../../utils/responseFormatter';
import { ApiError } from '../../../middleware/errorMiddleware';

const companySchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    mission: z.string().min(10).max(1000),
    vision: z.string().min(10).max(1000),
    values: z.array(z.string()).min(1),
    about: z.string().min(10).max(2000),
    history: z.string().min(10).max(2000).optional(),
    logoUrl: z.string().url().optional(),
    team: z.array(z.object({
      name: z.string().min(2).max(100),
      position: z.string().min(2).max(100),
      bio: z.string().min(10).max(500),
      imageUrl: z.string().url().optional()
    })).optional()
  })
});

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const company = await companyGet();
    res.json(successResponse(company));
  } catch (error) {
    next(error);
  }
}

export const putHandler = [
  validate(companySchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const company = await companyUpdate(req.body);
      res.json(successResponse(company));
    } catch (error) {
      next(error);
    }
  }
];
