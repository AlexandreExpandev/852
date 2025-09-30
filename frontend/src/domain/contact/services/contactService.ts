import api from '@/core/lib/api';
import { ContactEntity, ContactCreateInput } from '../types';

/**
 * @service contactService
 * @summary Provides methods for contact form submissions.
 * @domain contact
 */
export const contactService = {
  /**
   * @method submitContactForm
   * @summary Submits a new contact form entry.
   */
  submitContactForm: async (formData: ContactCreateInput): Promise<ContactEntity> => {
    const data = await api.post<ContactEntity>('/external/contact', formData);
    return data;
  },
};
