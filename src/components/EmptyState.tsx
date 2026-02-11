import React from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="mb-4 p-4 rounded-full bg-[rgb(var(--color-surface))]">
        {icon || <Inbox className="w-12 h-12 text-[rgb(var(--color-text-tertiary))]" />}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[rgb(var(--color-text-primary))]">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-[rgb(var(--color-text-secondary))] max-w-xs mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
