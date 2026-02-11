import React, { useState } from 'react';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { ChevronLeft, Calendar, Flag, Bell, Plus, X } from 'lucide-react';

interface AddEditTaskScreenProps {
  onBack: () => void;
  onSave: () => void;
  isEdit?: boolean;
}

export function AddEditTaskScreen({ onBack, onSave, isEdit = false }: AddEditTaskScreenProps) {
  const [title, setTitle] = useState(isEdit ? 'Review project proposal' : '');
  const [description, setDescription] = useState(
    isEdit ? 'Review the Q4 project proposal document...' : ''
  );
  const [dueDate, setDueDate] = useState('2024-12-12');
  const [dueTime, setDueTime] = useState('14:00');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [reminder, setReminder] = useState('30min');
  const [subtasks, setSubtasks] = useState<string[]>(
    isEdit ? ['Read through document', 'Check budget allocation'] : []
  );
  const [newSubtask, setNewSubtask] = useState('');

  const handleAddSubtask = () => {
    if (newSubtask.trim()) {
      setSubtasks([...subtasks, newSubtask]);
      setNewSubtask('');
    }
  };

  const handleRemoveSubtask = (index: number) => {
    setSubtasks(subtasks.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto">
      <div className="flex items-center gap-3 px-4 py-3 bg-[rgb(var(--color-surface-elevated))]">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">{isEdit ? 'Edit Task' : 'New Task'}</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 px-4 py-6">
        <div className="space-y-5">
          <InputField
            label="Title"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div>
            <label className="text-sm font-medium text-[rgb(var(--color-text-primary))] mb-1.5 block">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-[var(--radius-lg)] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] transition-all duration-200 focus:outline-none focus:ring-2 focus:border-[rgb(var(--color-border-focus))] focus:ring-[rgb(var(--color-primary))]/20 min-h-[100px] resize-none"
              placeholder="Add details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-[var(--radius-lg)] text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:border-[rgb(var(--color-border-focus))] focus:ring-[rgb(var(--color-primary))]/20"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[rgb(var(--color-text-primary))] mb-1.5 block">
                Time
              </label>
              <input
                type="time"
                className="w-full px-3 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-[var(--radius-lg)] text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:border-[rgb(var(--color-border-focus))] focus:ring-[rgb(var(--color-primary))]/20"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-2">
              <Flag className="w-4 h-4" />
              Priority
            </label>
            <div className="flex gap-2">
              {(['low', 'medium', 'high'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${
                    priority === p
                      ? p === 'high'
                        ? 'bg-[rgb(var(--color-error))] text-white'
                        : p === 'medium'
                        ? 'bg-[rgb(var(--color-warning))] text-white'
                        : 'bg-[rgb(var(--color-accent))] text-white'
                      : 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))] border border-[rgb(var(--color-border))]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Reminder
            </label>
            <select
              className="w-full px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-[var(--radius-lg)] text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:border-[rgb(var(--color-border-focus))] focus:ring-[rgb(var(--color-primary))]/20"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
            >
              <option value="none">No reminder</option>
              <option value="15min">15 minutes before</option>
              <option value="30min">30 minutes before</option>
              <option value="1hour">1 hour before</option>
              <option value="1day">1 day before</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-[rgb(var(--color-text-primary))] mb-1.5 block">
              Subtasks
            </label>
            <div className="space-y-2 mb-2">
              {subtasks.map((subtask, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-[rgb(var(--color-surface))] rounded-lg"
                >
                  <span className="flex-1 text-sm text-[rgb(var(--color-text-primary))]">
                    {subtask}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSubtask(index)}
                    className="p-1 rounded hover:bg-[rgb(var(--color-background))] text-[rgb(var(--color-text-tertiary))]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-[var(--radius-lg)] text-sm text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:border-[rgb(var(--color-border-focus))] focus:ring-[rgb(var(--color-primary))]/20"
                placeholder="Add a subtask..."
                value={newSubtask}
                onChange={(e) => setNewSubtask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSubtask())}
              />
              <button
                type="button"
                onClick={handleAddSubtask}
                className="p-2 bg-[rgb(var(--color-primary))] text-white rounded-lg hover:bg-[rgb(var(--color-primary-dark))]"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="px-4 py-4 border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-elevated))] space-y-2">
        <Button type="submit" onClick={handleSubmit} className="w-full">
          {isEdit ? 'Save Changes' : 'Create Task'}
        </Button>
        <Button variant="ghost" onClick={onBack} className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  );
}
