import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: 'modal' | 'bottomSheet';
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  variant = 'modal',
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (variant === 'bottomSheet') {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/40 z-40 animate-in fade-in duration-200"
          onClick={onClose}
        />
        <div className="fixed bottom-0 left-0 right-0 bg-[rgb(var(--color-surface-elevated))] rounded-t-[var(--radius-xl)] z-50 animate-in slide-in-from-bottom duration-300 max-w-md mx-auto">
          <div className="flex items-center justify-center pt-2 pb-3">
            <div className="w-10 h-1 bg-[rgb(var(--color-gray-300))] rounded-full" />
          </div>
          {title && (
            <div className="flex items-center justify-between px-6 pb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
              </button>
            </div>
          )}
          <div className="px-6 pb-6 max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)] max-w-md w-full animate-in zoom-in-95 duration-200">
          {title && (
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
              </button>
            </div>
          )}
          <div className="px-6 pb-6 max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
