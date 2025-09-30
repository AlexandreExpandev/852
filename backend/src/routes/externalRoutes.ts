import { Router } from 'express';
import * as contactController from '../api/external/public/contact/controller';
import * as testimonialController from '../api/external/public/testimonial/controller';
import * as serviceController from '../api/external/public/service/controller';
import * as projectController from '../api/external/public/project/controller';
import * as companyController from '../api/external/public/company/controller';
import { validationMiddleware } from '../middleware/validationMiddleware';

const router = Router();

// Contact form routes
router.post('/contact', validationMiddleware, contactController.postHandler);

// Public testimonials routes
router.get('/testimonials', testimonialController.getHandler);

// Public services routes
router.get('/services', serviceController.getHandler);
router.get('/services/:id', serviceController.getByIdHandler);

// Public projects/portfolio routes
router.get('/projects', projectController.getHandler);
router.get('/projects/:id', projectController.getByIdHandler);

// Company information routes
router.get('/company', companyController.getHandler);

export default router;
