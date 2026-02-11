import React, { useState } from 'react';
import { AppBar } from '../AppBar';
import { Button } from '../Button';
import { ChevronLeft, Calendar, Flag, Bell, Trash2 } from 'lucide-react';

interface TaskDetailScreenProps {
  onBack: () => void;
  onEdit: () => void;
}

export function TaskDetailScreen({ onBack, onEdit }: TaskDetailScreenProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto">
      <div className="flex items-center justify-between px-4 py-3 bg-[rgb(var(--color-surface-elevated))]">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">Task Details</h2>
        <button className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors">
          <Trash2 className="w-5 h-5 text-[rgb(var(--color-error))]" />
        </button>
      </div>

      <div className="flex-1 px-4 py-6">
        <div className="flex items-start gap-3 mb-6">
          <button
            onClick={() => setCompleted(!completed)}
            className="flex-shrink-0 mt-1"
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                completed
                  ? 'bg-[rgb(var(--color-accent))] border-[rgb(var(--color-accent))]'
                  : 'border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]'
              }`}
            >
              {completed && (
                <svg
                  className="w-4 h-4 text-white"
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
          <h1
            className={`${
              completed ? 'text-[rgb(var(--color-text-tertiary))] line-through' : ''
            }`}
          >
            Review project proposal
          </h1>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-4 bg-[rgb(var(--color-surface))] rounded-[var(--radius-lg)]">
            <div className="flex items-center gap-3 text-[rgb(var(--color-text-secondary))]">
              <Calendar className="w-5 h-5" />
              <div>
                <div className="text-xs text-[rgb(var(--color-text-tertiary))] mb-0.5">
                  Due Date
                </div>
                <div className="text-sm font-medium text-[rgb(var(--color-text-primary))]">
                  Today, December 12 at 2:00 PM
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[rgb(var(--color-surface))] rounded-[var(--radius-lg)]">
            <div className="flex items-center gap-3 text-[rgb(var(--color-text-secondary))]">
              <Flag className="w-5 h-5" />
              <div>
                <div className="text-xs text-[rgb(var(--color-text-tertiary))] mb-0.5">
                  Priority
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-[rgb(var(--color-error))]/10 text-[rgb(var(--color-error))]">
                    <Flag className="w-3 h-3" />
                    High
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[rgb(var(--color-surface))] rounded-[var(--radius-lg)]">
            <div className="flex items-center gap-3 text-[rgb(var(--color-text-secondary))]">
              <Bell className="w-5 h-5" />
              <div>
                <div className="text-xs text-[rgb(var(--color-text-tertiary))] mb-0.5">
                  Reminder
                </div>
                <div className="text-sm font-medium text-[rgb(var(--color-text-primary))]">
                  30 minutes before
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-medium text-[rgb(var(--color-text-tertiary))] mb-2">
            DESCRIPTION
          </h3>
          <div className="p-4 bg-[rgb(var(--color-surface))] rounded-[var(--radius-lg)]">
            <p className="text-[rgb(var(--color-text-secondary))]">
              Review the Q4 project proposal document and provide feedback on the
              timeline, budget allocation, and resource requirements. Pay special
              attention to the technical specifications section.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[rgb(var(--color-text-tertiary))] mb-2">
            SUBTASKS
          </h3>
          <div className="space-y-2">
            {[
              { id: 1, title: 'Read through document', completed: true },
              { id: 2, title: 'Check budget allocation', completed: false },
              { id: 3, title: 'Provide written feedback', completed: false },
            ].map((subtask) => (
              <div
                key={subtask.id}
                className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface))] rounded-lg"
              >
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                    subtask.completed
                      ? 'bg-[rgb(var(--color-accent))] border-[rgb(var(--color-accent))]'
                      : 'border-[rgb(var(--color-border))]'
                  }`}
                >
                  {subtask.completed && (
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
                <span
                  className={`text-sm ${
                    subtask.completed
                      ? 'text-[rgb(var(--color-text-tertiary))] line-through'
                      : 'text-[rgb(var(--color-text-primary))]'
                  }`}
                >
                  {subtask.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4 border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-elevated))]">
        <Button onClick={onEdit} className="w-full">
          Edit Task
        </Button>
      </div>
    </div>
  );
}
