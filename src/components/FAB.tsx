import React from 'react';
import { Plus } from 'lucide-react';

interface FABProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  label?: string;
}

export function FAB({ onClick, icon, label = 'Add' }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-6 w-14 h-14 bg-[rgb(var(--color-primary))] text-white rounded-full shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center z-40"
      aria-label={label}
    >
      {icon || <Plus className="w-6 h-6" />}
    </button>
  );
}
