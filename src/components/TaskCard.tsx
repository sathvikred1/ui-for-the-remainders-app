import React from 'react';
import { Calendar, Flag } from 'lucide-react';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
}

export function TaskCard({
  title,
  dueDate,
  priority,
  completed = false,
  onToggle,
  onClick,
}: TaskCardProps) {
  const priorityColors = {
    low: 'bg-[rgb(var(--color-gray-100))] text-[rgb(var(--color-gray-600))]',
    medium: 'bg-[rgb(var(--color-warning))]/10 text-[rgb(var(--color-warning))]',
    high: 'bg-[rgb(var(--color-error))]/10 text-[rgb(var(--color-error))]',
  };

  return (
    <div
      className="flex items-start gap-3 p-4 bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle?.();
        }}
        className="flex-shrink-0 mt-0.5"
        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            completed
              ? 'bg-[rgb(var(--color-accent))] border-[rgb(var(--color-accent))]'
              : 'border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]'
          }`}
        >
          {completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </div>
      </button>

      <div className="flex-1 min-w-0">
        <h3
          className={`text-base font-medium mb-2 ${
            completed
              ? 'text-[rgb(var(--color-text-tertiary))] line-through'
              : 'text-[rgb(var(--color-text-primary))]'
          }`}
        >
          {title}
        </h3>

        <div className="flex items-center gap-3 flex-wrap">
          {dueDate && (
            <div className="flex items-center gap-1.5 text-sm text-[rgb(var(--color-text-secondary))]">
              <Calendar className="w-4 h-4" />
              <span>{dueDate}</span>
            </div>
          )}
          {priority && (
            <div
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${priorityColors[priority]}`}
            >
              <Flag className="w-3 h-3" />
              <span className="capitalize">{priority}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
