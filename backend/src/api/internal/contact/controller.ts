import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { contactList, contactGet, contactUpdate, contactDelete } from '../../../services/contact';
import { validate } from '../../../middleware/validationMiddleware';
import { successResponse } from '../../../utils/responseFormatter';
import { ApiError } from '../../../middleware/errorMiddleware';

const contactUpdateSchema = z.object({
  body: z.object({
    status: z.enum(['new', 'in-progress', 'completed', 'archived']),
    notes: z.string().max(2000).optional()
  })
});

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const contacts = await contactList();
    res.json(successResponse(contacts));
  } catch (error) {
    next(error);
  }
}

export async function getByIdHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid contact ID', 400, 'INVALID_ID');
    }
    
    const contact = await contactGet(id);
    
    if (!contact) {
      throw new ApiError('Contact not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse(contact));
  } catch (error) {
    next(error);
  }
}

export const putHandler = [
  validate(contactUpdateSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        throw new ApiError('Invalid contact ID', 400, 'INVALID_ID');
      }
      
      const contact = await contactUpdate(id, req.body);
      
      if (!contact) {
        throw new ApiError('Contact not found', 404, 'NOT_FOUND');
      }
      
      res.json(successResponse(contact));
    } catch (error) {
      next(error);
    }
  }
];

export async function deleteHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      throw new ApiError('Invalid contact ID', 400, 'INVALID_ID');
    }
    
    const success = await contactDelete(id);
    
    if (!success) {
      throw new ApiError('Contact not found', 404, 'NOT_FOUND');
    }
    
    res.json(successResponse({ message: 'Contact deleted successfully' }));
  } catch (error) {
    next(error);
  }
}
