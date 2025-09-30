import api from '@/core/lib/api';
import { ServiceEntity } from '../types';

/**
 * @service service
 * @summary Provides methods for service-related API operations.
 * @domain service
 */
export const service = {
  /**
   * @method getServices
   * @summary Fetches a list of all services.
   */
  getServices: async (): Promise<ServiceEntity[]> => {
    const data = await api.get<ServiceEntity[]>('/external/services');
    return data;
  },

  /**
   * @method getServiceById
   * @summary Fetches a single service by its ID.
   */
  getServiceById: async (id: number): Promise<ServiceEntity> => {
    const data = await api.get<ServiceEntity>(`/external/services/${id}`);
    return data;
  },
};
