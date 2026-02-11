import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]',
    success: 'bg-[rgb(var(--color-success))]/10 text-[rgb(var(--color-success))]',
    warning: 'bg-[rgb(var(--color-warning))]/10 text-[rgb(var(--color-warning))]',
    error: 'bg-[rgb(var(--color-error))]/10 text-[rgb(var(--color-error))]',
    neutral: 'bg-[rgb(var(--color-gray-100))] text-[rgb(var(--color-gray-600))]',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}
