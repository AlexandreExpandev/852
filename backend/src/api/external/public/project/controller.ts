import { Request, Response, NextFunction } from 'express';
import { projectList, projectGet } from '../../../../services/project';
import { successResponse } from '../../../../utils/responseFormatter';
import { ApiError } from '../../../../middleware/errorMiddleware';

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const projects = await projectList();
    res.json(successResponse(projects));
  } catch (error) {
    next(error instanceof Error 
      ? new ApiError(error.message, 400, 'PROJECT_ERROR') 
      : error);
  }
}

export async function getByIdHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid project ID', 400, 'INVALID_ID');
    }
    
    const project = await projectGet(id);
    
    if (!project) {
      throw new ApiError('Project not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse(project));
  } catch (error) {
    next(error);
  }
}
