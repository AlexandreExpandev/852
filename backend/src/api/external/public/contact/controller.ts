import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { contactCreate } from '../../../../services/contact';
import { validate } from '../../../../middleware/validationMiddleware';
import { successResponse } from '../../../../utils/responseFormatter';
import { ApiError } from '../../../../middleware/errorMiddleware';

const contactSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().optional(),
    subject: z.string().min(2).max(200),
    message: z.string().min(10).max(2000)
  })
});

export const postHandler = [
  validate(contactSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      const contact = await contactCreate({
        name,
        email,
        phone,
        subject,
        message
      });
      
      res.status(201).json(successResponse(contact));
    } catch (error) {
      next(error instanceof Error 
        ? new ApiError(error.message, 400, 'CONTACT_ERROR') 
        : error);
    }
  }
];
