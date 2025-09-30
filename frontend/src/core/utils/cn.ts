import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary A utility function to merge Tailwind CSS classes without conflicts.
 * @domain Core
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
