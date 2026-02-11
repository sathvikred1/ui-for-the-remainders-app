import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, className = '', children, ...props }, ref) => {
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-[rgb(var(--color-text-primary))]">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-2.5 
              bg-[rgb(var(--color-surface))] 
              border rounded-[var(--radius-lg)]
              text-[rgb(var(--color-text-primary))]
              appearance-none
              cursor-pointer
              transition-all duration-200
              focus:outline-none focus:ring-2
              ${
                hasError
                  ? 'border-[rgb(var(--color-error))] focus:ring-[rgb(var(--color-error))]/20'
                  : 'border-[rgb(var(--color-border))] focus:border-[rgb(var(--color-border-focus))] focus:ring-[rgb(var(--color-primary))]/20'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-text-tertiary))] pointer-events-none" />
        </div>
        {error && (
          <p className="text-sm text-[rgb(var(--color-error))]">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-[rgb(var(--color-text-secondary))]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
