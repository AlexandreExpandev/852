/**
 * @module contact
 * @summary Manages the contact form submission and related logic.
 * @domain functional
 */

export * from './services/contactService';
export * from './types';

export const moduleMetadata = {
  name: 'contact',
  domain: 'functional',
  version: '1.0.0',
} as const;
