/**
 * @module project
 * @summary Manages the portfolio of projects, including fetching and displaying them.
 * @domain functional
 */

export * from './services/projectService';
export * from './types';

export const moduleMetadata = {
  name: 'project',
  domain: 'functional',
  version: '1.0.0',
} as const;
