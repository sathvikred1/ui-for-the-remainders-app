import React from 'react';
import { Bell, Search, MoreVertical } from 'lucide-react';

interface AppBarProps {
  title: string;
  showNotification?: boolean;
  showSearch?: boolean;
  showMore?: boolean;
  onNotificationClick?: () => void;
  onSearchClick?: () => void;
  onMoreClick?: () => void;
}

export function AppBar({
  title,
  showNotification = false,
  showSearch = false,
  showMore = false,
  onNotificationClick,
  onSearchClick,
  onMoreClick,
}: AppBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[rgb(var(--color-surface-elevated))]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-2">
        {showSearch && (
          <button
            onClick={onSearchClick}
            className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
          </button>
        )}
        {showNotification && (
          <button
            onClick={onNotificationClick}
            className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[rgb(var(--color-error))] rounded-full"></span>
          </button>
        )}
        {showMore && (
          <button
            onClick={onMoreClick}
            className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
            aria-label="More options"
          >
            <MoreVertical className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
          </button>
        )}
      </div>
    </div>
  );
}
