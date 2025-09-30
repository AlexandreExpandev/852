import React from 'react';
import { QueryClientProvider } from './QueryClientProvider';
import { Toaster } from 'react-hot-toast';

/**
 * @component AppProviders
 * @summary A single component to wrap the entire application with all necessary context providers.
 * @domain Core
 */
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider>
      {children}
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
};
