/**
 * @module testimonial
 * @summary Manages client testimonials.
 * @domain functional
 */

export * from './services/testimonialService';
export * from './types';

export const moduleMetadata = {
  name: 'testimonial',
  domain: 'functional',
  version: '1.0.0',
} as const;
