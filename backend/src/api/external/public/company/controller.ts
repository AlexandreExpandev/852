import { Request, Response, NextFunction } from 'express';
import { companyGet } from '../../../../services/company';
import { successResponse } from '../../../../utils/responseFormatter';
import { ApiError } from '../../../../middleware/errorMiddleware';

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const company = await companyGet();
    res.json(successResponse(company));
  } catch (error) {
    next(error instanceof Error 
      ? new ApiError(error.message, 400, 'COMPANY_ERROR') 
      : error);
  }
}
