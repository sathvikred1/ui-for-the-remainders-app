import React, { useState } from 'react';
import { AppBar } from '../AppBar';
import { TaskCard } from '../TaskCard';
import { FAB } from '../FAB';
import { EmptyState } from '../EmptyState';
import { Button } from '../Button';
import { Filter, CheckCircle2 } from 'lucide-react';

interface TaskListScreenProps {
  onAddTask: () => void;
  onTaskClick: (taskId: string) => void;
}

const allTasks = [
  {
    id: '1',
    title: 'Review project proposal',
    dueDate: 'Today, 2:00 PM',
    priority: 'high' as const,
    completed: false,
  },
  {
    id: '2',
    title: 'Team meeting preparation',
    dueDate: 'Today, 4:00 PM',
    priority: 'medium' as const,
    completed: false,
  },
  {
    id: '3',
    title: 'Send weekly report',
    dueDate: 'Today, 5:30 PM',
    priority: 'low' as const,
    completed: true,
  },
  {
    id: '4',
    title: 'Dentist appointment',
    dueDate: 'Tomorrow, 10:00 AM',
    priority: 'medium' as const,
    completed: false,
  },
  {
    id: '5',
    title: 'Client presentation',
    dueDate: 'Dec 15, 2:00 PM',
    priority: 'high' as const,
    completed: false,
  },
  {
    id: '6',
    title: 'Update documentation',
    dueDate: 'Dec 16, 9:00 AM',
    priority: 'low' as const,
    completed: false,
  },
];

export function TaskListScreen({ onAddTask, onTaskClick }: TaskListScreenProps) {
  const [tasks, setTasks] = useState(allTasks);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleToggle = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto pb-20">
      <AppBar title="All Tasks" showSearch showMore />

      <div className="flex gap-2 px-4 py-4 border-b border-[rgb(var(--color-border))] overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-[rgb(var(--color-primary))] text-white'
              : 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))]'
          }`}
        >
          All ({tasks.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'active'
              ? 'bg-[rgb(var(--color-primary))] text-white'
              : 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))]'
          }`}
        >
          Active ({tasks.filter((t) => !t.completed).length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'completed'
              ? 'bg-[rgb(var(--color-primary))] text-white'
              : 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))]'
          }`}
        >
          Completed ({tasks.filter((t) => t.completed).length})
        </button>
        <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))] flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="flex-1 px-4 py-4">
        {filteredTasks.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="w-12 h-12 text-[rgb(var(--color-text-tertiary))]" />}
            title="No tasks found"
            description="Create a new task to get started with your productivity journey."
            action={
              <Button onClick={onAddTask} variant="primary">
                Add Task
              </Button>
            }
          />
        ) : (
          <div className="space-y-3">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onToggle={() => handleToggle(task.id)}
                onClick={() => onTaskClick(task.id)}
              />
            ))}
          </div>
        )}
      </div>

      <FAB onClick={onAddTask} />
    </div>
  );
}
