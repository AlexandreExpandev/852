import { useQuery } from '@tanstack/react-query';
import { service } from '../services/service';

/**
 * @hook useServiceList
 * @summary Fetches the list of services using React Query.
 * @domain service
 * @type data-hook
 */
export const useServiceList = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: service.getServices,
  });
};
