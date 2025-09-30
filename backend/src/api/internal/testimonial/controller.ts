import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { testimonialList, testimonialGet, testimonialCreate, testimonialUpdate, testimonialDelete } from '../../../services/testimonial';
import { validate } from '../../../middleware/validationMiddleware';
import { successResponse } from '../../../utils/responseFormatter';
import { ApiError } from '../../../middleware/errorMiddleware';

const testimonialSchema = z.object({
  body: z.object({
    clientName: z.string().min(2).max(100),
    company: z.string().min(2).max(100),
    position: z.string().min(2).max(100),
    testimonial: z.string().min(10).max(1000),
    rating: z.number().min(1).max(5).optional(),
    imageUrl: z.string().url().optional()
  })
});

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const testimonials = await testimonialList();
    res.json(successResponse(testimonials));
  } catch (error) {
    next(error);
  }
}

export const postHandler = [
  validate(testimonialSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const testimonial = await testimonialCreate(req.body);
      res.status(201).json(successResponse(testimonial));
    } catch (error) {
      next(error);
    }
  }
];

export async function getByIdHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid testimonial ID', 400, 'INVALID_ID');
    }
    
    const testimonial = await testimonialGet(id);
    
    if (!testimonial) {
      throw new ApiError('Testimonial not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse(testimonial));
  } catch (error) {
    next(error);
  }
}

export const putHandler = [
  validate(testimonialSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw new ApiError('Invalid testimonial ID', 400, 'INVALID_ID');
      }
      
      const testimonial = await testimonialUpdate(id, req.body);
      
      if (!testimonial) {
        throw new ApiError('Testimonial not found', 404, 'NOT_FOUND');
      }
      
      res.json(successResponse(testimonial));
    } catch (error) {
      next(error);
    }
  }
];

export async function deleteHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid testimonial ID', 400, 'INVALID_ID');
    }
    
    const success = await testimonialDelete(id);
    
    if (!success) {
      throw new ApiError('Testimonial not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse({ message: 'Testimonial deleted successfully' }));
  } catch (error) {
    next(error);
  }
}
