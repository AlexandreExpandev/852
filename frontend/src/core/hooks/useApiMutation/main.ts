import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { ApiError } from '@/core/types/api';

interface ApiMutationOptions<TData, TVariables> {
  successMessage?: string;
  errorMessage?: string;
  onSuccess?: (data: TData, variables: TVariables, context: unknown) => void;
  onError?: (error: ApiError, variables: TVariables, context: unknown) => void;
}

/**
 * @hook useApiMutation
 * @summary A generic wrapper around TanStack Query's useMutation for consistent success/error handling.
 * @domain Core
 * @type utility-hook
 */
export const useApiMutation = <TData = unknown, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: ApiMutationOptions<TData, TVariables> & UseMutationOptions<TData, ApiError, TVariables> = {}
): UseMutationResult<TData, ApiError, TVariables> => {
  const { successMessage, errorMessage, ...restOptions } = options;

  return useMutation<TData, ApiError, TVariables>({
    mutationFn,
    onSuccess: (data, variables, context) => {
      if (successMessage) {
        toast.success(successMessage);
      }
      options.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      const message = errorMessage || error.response?.data?.error?.message || 'An unexpected error occurred.';
      toast.error(message);
      options.onError?.(error, variables, context);
    },
    ...restOptions,
  });
};
