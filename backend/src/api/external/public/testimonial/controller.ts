import { Request, Response, NextFunction } from 'express';
import { testimonialList } from '../../../../services/testimonial';
import { successResponse } from '../../../../utils/responseFormatter';
import { ApiError } from '../../../../middleware/errorMiddleware';

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const testimonials = await testimonialList();
    res.json(successResponse(testimonials));
  } catch (error) {
    next(error instanceof Error 
      ? new ApiError(error.message, 400, 'TESTIMONIAL_ERROR') 
      : error);
  }
}
