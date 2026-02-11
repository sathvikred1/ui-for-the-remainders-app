import React from 'react';
import { Bell, Clock, AlertCircle } from 'lucide-react';

interface NotificationCardProps {
  title: string;
  message: string;
  time: string;
  type?: 'reminder' | 'warning' | 'info';
  onDismiss?: () => void;
}

export function NotificationCard({
  title,
  message,
  time,
  type = 'reminder',
  onDismiss,
}: NotificationCardProps) {
  const typeConfig = {
    reminder: {
      icon: Bell,
      color: 'text-[rgb(var(--color-primary))]',
      bg: 'bg-[rgb(var(--color-primary))]/10',
    },
    warning: {
      icon: AlertCircle,
      color: 'text-[rgb(var(--color-warning))]',
      bg: 'bg-[rgb(var(--color-warning))]/10',
    },
    info: {
      icon: Clock,
      color: 'text-[rgb(var(--color-accent))]',
      bg: 'bg-[rgb(var(--color-accent))]/10',
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-3 p-4 bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-[rgb(var(--color-border))]">
      <div className={`p-2 rounded-full ${config.bg} flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="text-sm font-semibold text-[rgb(var(--color-text-primary))]">
            {title}
          </h4>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-secondary))] transition-colors text-xs"
            >
              ✕
            </button>
          )}
        </div>
        <p className="text-sm text-[rgb(var(--color-text-secondary))] mb-2">
          {message}
        </p>
        <span className="text-xs text-[rgb(var(--color-text-tertiary))]">{time}</span>
      </div>
    </div>
  );
}
