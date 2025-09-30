import api from '@/core/lib/api';
import { CompanyEntity } from '../types';

/**
 * @service companyService
 * @summary Provides methods for company-related API operations.
 * @domain company
 */
export const companyService = {
  /**
   * @method getCompanyInfo
   * @summary Fetches the main company information.
   */
  getCompanyInfo: async (): Promise<CompanyEntity> => {
    const data = await api.get<CompanyEntity>('/external/company');
    return data;
  },
};
