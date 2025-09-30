import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { serviceList, serviceGet, serviceCreate, serviceUpdate, serviceDelete } from '../../../services/service';
import { validate } from '../../../middleware/validationMiddleware';
import { successResponse } from '../../../utils/responseFormatter';
import { ApiError } from '../../../middleware/errorMiddleware';

const serviceSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(2000),
    shortDescription: z.string().min(10).max(200),
    imageUrl: z.string().url().optional(),
    benefits: z.array(z.string()).optional(),
    methodologies: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    order: z.number().optional()
  })
});

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const services = await serviceList();
    res.json(successResponse(services));
  } catch (error) {
    next(error);
  }
}

export const postHandler = [
  validate(serviceSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const service = await serviceCreate(req.body);
      res.status(201).json(successResponse(service));
    } catch (error) {
      next(error);
    }
  }
];

export async function getByIdHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid service ID', 400, 'INVALID_ID');
    }
    
    const service = await serviceGet(id);
    
    if (!service) {
      throw new ApiError('Service not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse(service));
  } catch (error) {
    next(error);
  }
}

export const putHandler = [
  validate(serviceSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw new ApiError('Invalid service ID', 400, 'INVALID_ID');
      }
      
      const service = await serviceUpdate(id, req.body);
      
      if (!service) {
        throw new ApiError('Service not found', 404, 'NOT_FOUND');
      }
      
      res.json(successResponse(service));
    } catch (error) {
      next(error);
    }
  }
];

export async function deleteHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid service ID', 400, 'INVALID_ID');
    }
    
    const success = await serviceDelete(id);
    
    if (!success) {
      throw new ApiError('Service not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse({ message: 'Service deleted successfully' }));
  } catch (error) {
    next(error);
  }
}
