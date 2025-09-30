import api from '@/core/lib/api';
import { TestimonialEntity } from '../types';

/**
 * @service testimonialService
 * @summary Provides methods for testimonial-related API operations.
 * @domain testimonial
 */
export const testimonialService = {
  /**
   * @method getTestimonials
   * @summary Fetches a list of all testimonials.
   */
  getTestimonials: async (): Promise<TestimonialEntity[]> => {
    const data = await api.get<TestimonialEntity[]>('/external/testimonials');
    return data;
  },
};
