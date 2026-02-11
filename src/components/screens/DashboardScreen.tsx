import React, { useState } from 'react';
import { AppBar } from '../AppBar';
import { TaskCard } from '../TaskCard';
import { FAB } from '../FAB';
import { format } from 'date-fns';
import { ChevronRight } from 'lucide-react';

interface DashboardScreenProps {
  onAddTask: () => void;
  onTaskClick: (taskId: string) => void;
}

const mockTasks = [
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
];

const upcomingTasks = [
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
];

export function DashboardScreen({ onAddTask, onTaskClick }: DashboardScreenProps) {
  const [tasks, setTasks] = useState(mockTasks);
  const [upcoming, setUpcoming] = useState(upcomingTasks);

  const handleToggle = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    setUpcoming(
      upcoming.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const todayDate = format(new Date(), 'EEEE, MMMM d');

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto pb-20">
      <AppBar title="Remainders" showNotification showSearch />

      <div className="flex-1 px-4 py-6">
        <div className="mb-6">
          <h3 className="text-sm font-medium text-[rgb(var(--color-text-secondary))] mb-2">
            {todayDate}
          </h3>
          <h1 className="mb-1">Today's Tasks</h1>
          <p className="text-[rgb(var(--color-text-secondary))]">
            {tasks.filter((t) => !t.completed).length} tasks remaining
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              {...task}
              onToggle={() => handleToggle(task.id)}
              onClick={() => onTaskClick(task.id)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">Upcoming</h2>
          <button className="flex items-center gap-1 text-sm text-[rgb(var(--color-primary))] hover:gap-2 transition-all">
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {upcoming.map((task) => (
            <TaskCard
              key={task.id}
              {...task}
              onToggle={() => handleToggle(task.id)}
              onClick={() => onTaskClick(task.id)}
            />
          ))}
        </div>
      </div>

      <FAB onClick={onAddTask} />
    </div>
  );
}
