import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { projectList, projectGet, projectCreate, projectUpdate, projectDelete } from '../../../services/project';
import { validate } from '../../../middleware/validationMiddleware';
import { successResponse } from '../../../utils/responseFormatter';
import { ApiError } from '../../../middleware/errorMiddleware';

const projectSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(100),
    clientName: z.string().min(2).max(100),
    description: z.string().min(10).max(2000),
    challenge: z.string().min(10).max(1000),
    solution: z.string().min(10).max(1000),
    results: z.string().min(10).max(1000),
    imageUrl: z.string().url().optional(),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    completionDate: z.string().optional()
  })
});

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const projects = await projectList();
    res.json(successResponse(projects));
  } catch (error) {
    next(error);
  }
}

export const postHandler = [
  validate(projectSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const project = await projectCreate(req.body);
      res.status(201).json(successResponse(project));
    } catch (error) {
      next(error);
    }
  }
];

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

export const putHandler = [
  validate(projectSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw new ApiError('Invalid project ID', 400, 'INVALID_ID');
      }
      
      const project = await projectUpdate(id, req.body);
      
      if (!project) {
        throw new ApiError('Project not found', 404, 'NOT_FOUND');
      }
      
      res.json(successResponse(project));
    } catch (error) {
      next(error);
    }
  }
];

export async function deleteHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid project ID', 400, 'INVALID_ID');
    }
    
    const success = await projectDelete(id);
    
    if (!success) {
      throw new ApiError('Project not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse({ message: 'Project deleted successfully' }));
  } catch (error) {
    next(error);
  }
}
