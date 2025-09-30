import { Router } from 'express';
import * as testimonialController from '../api/internal/testimonial/controller';
import * as serviceController from '../api/internal/service/controller';
import * as projectController from '../api/internal/project/controller';
import * as companyController from '../api/internal/company/controller';
import * as contactController from '../api/internal/contact/controller';
import { validationMiddleware } from '../middleware/validationMiddleware';

const router = Router();

// Testimonial management routes
router.get('/testimonials', testimonialController.getHandler);
router.post('/testimonials', validationMiddleware, testimonialController.postHandler);
router.get('/testimonials/:id', testimonialController.getByIdHandler);
router.put('/testimonials/:id', validationMiddleware, testimonialController.putHandler);
router.delete('/testimonials/:id', testimonialController.deleteHandler);

// Service management routes
router.get('/services', serviceController.getHandler);
router.post('/services', validationMiddleware, serviceController.postHandler);
router.get('/services/:id', serviceController.getByIdHandler);
router.put('/services/:id', validationMiddleware, serviceController.putHandler);
router.delete('/services/:id', serviceController.deleteHandler);

// Project/portfolio management routes
router.get('/projects', projectController.getHandler);
router.post('/projects', validationMiddleware, projectController.postHandler);
router.get('/projects/:id', projectController.getByIdHandler);
router.put('/projects/:id', validationMiddleware, projectController.putHandler);
router.delete('/projects/:id', projectController.deleteHandler);

// Company information management routes
router.get('/company', companyController.getHandler);
router.put('/company', validationMiddleware, companyController.putHandler);

// Contact form submissions management
router.get('/contacts', contactController.getHandler);
router.get('/contacts/:id', contactController.getByIdHandler);
router.put('/contacts/:id', validationMiddleware, contactController.putHandler);
router.delete('/contacts/:id', contactController.deleteHandler);

export default router;
