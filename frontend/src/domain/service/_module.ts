/**
 * @module service
 * @summary Manages the company's service offerings.
 * @domain functional
 * @dependencies @tanstack/react-query, @/core/lib/api
 * @version 1.0.0
 */

// Domain public exports - Services
export * from './services/service';

// Domain public exports - Hooks
export * from './hooks/useServiceList';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'service',
  domain: 'functional',
  version: '1.0.0',
  publicServices: ['service'],
  publicHooks: ['useServiceList'],
  dependencies: {
    internal: ['@/core/lib/api'],
    external: ['@tanstack/react-query'],
  },
} as const;
