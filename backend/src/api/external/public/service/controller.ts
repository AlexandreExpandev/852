import { Request, Response, NextFunction } from 'express';
import { serviceList, serviceGet } from '../../../../services/service';
import { successResponse } from '../../../../utils/responseFormatter';
import { ApiError } from '../../../../middleware/errorMiddleware';

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const services = await serviceList();
    res.json(successResponse(services));
  } catch (error) {
    next(error instanceof Error 
      ? new ApiError(error.message, 400, 'SERVICE_ERROR') 
      : error);
  }
}

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
