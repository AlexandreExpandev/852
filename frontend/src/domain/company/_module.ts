/**
 * @module company
 * @summary Handles fetching and displaying company information.
 * @domain functional
 */

export * from './services/companyService';
export * from './types';

export const moduleMetadata = {
  name: 'company',
  domain: 'functional',
  version: '1.0.0',
} as const;
