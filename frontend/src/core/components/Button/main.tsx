import React from 'react';
import { tv } from 'tailwind-variants';
import { buttonVariants } from './variants';
import type { ButtonProps } from './types';
import { cn } from '@/core/utils/cn';

/**
 * @component Button
 * @summary A versatile button component with multiple variants and sizes.
 * @domain Core
 * @type ui-component
 * @category action
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
