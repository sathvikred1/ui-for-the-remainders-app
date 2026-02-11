import React, { useState } from 'react';
import { AppBar } from '../AppBar';
import { FAB } from '../FAB';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';

interface CalendarScreenProps {
  onAddTask: () => void;
}

const tasksData = [
  { id: '1', date: new Date(), count: 3, priority: 'high' },
  { id: '2', date: new Date(new Date().setDate(new Date().getDate() + 1)), count: 2, priority: 'medium' },
  { id: '3', date: new Date(new Date().setDate(new Date().getDate() + 5)), count: 1, priority: 'low' },
];

export function CalendarScreen({ onAddTask }: CalendarScreenProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDayOfWeek = monthStart.getDay();
  const emptyDays = Array.from({ length: firstDayOfWeek }, (_, i) => i);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getTasksForDate = (date: Date) => {
    return tasksData.find((task) => isSameDay(task.date, date));
  };

  const selectedDateTasks = [
    { id: '1', title: 'Review project proposal', time: '2:00 PM', priority: 'high' as const },
    { id: '2', title: 'Team meeting preparation', time: '4:00 PM', priority: 'medium' as const },
    { id: '3', title: 'Send weekly report', time: '5:30 PM', priority: 'low' as const },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto pb-20">
      <AppBar title="Calendar" showSearch showMore />

      <div className="px-4 py-4">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-[rgb(var(--color-text-tertiary))] py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {emptyDays.map((i) => (
            <div key={`empty-${i}`} />
          ))}
          {daysInMonth.map((day) => {
            const taskInfo = getTasksForDate(day);
            const isSelected = isSameDay(day, selectedDate);
            const isCurrent = isToday(day);

            return (
              <button
                key={day.toString()}
                onClick={() => setSelectedDate(day)}
                className={`
                  relative aspect-square rounded-lg flex flex-col items-center justify-center text-sm
                  transition-all duration-200
                  ${!isSameMonth(day, currentDate) ? 'opacity-30' : ''}
                  ${isSelected ? 'bg-[rgb(var(--color-primary))] text-white' : 'hover:bg-[rgb(var(--color-surface))]'}
                  ${isCurrent && !isSelected ? 'border-2 border-[rgb(var(--color-primary))]' : ''}
                `}
              >
                <span className={isSelected ? 'font-semibold' : ''}>
                  {format(day, 'd')}
                </span>
                {taskInfo && (
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: Math.min(taskInfo.count, 3) }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 rounded-full ${
                          isSelected ? 'bg-white' : 'bg-[rgb(var(--color-primary))]'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Tasks for Selected Date */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            {format(selectedDate, 'EEEE, MMMM d')}
          </h3>
          <div className="space-y-2">
            {selectedDateTasks.map((task) => {
              const priorityColors = {
                low: 'border-l-[rgb(var(--color-gray-400))]',
                medium: 'border-l-[rgb(var(--color-warning))]',
                high: 'border-l-[rgb(var(--color-error))]',
              };

              return (
                <div
                  key={task.id}
                  className={`p-3 bg-[rgb(var(--color-surface-elevated))] rounded-lg border-l-4 ${priorityColors[task.priority]}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{task.title}</h4>
                    <span className="text-xs text-[rgb(var(--color-text-secondary))]">
                      {task.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FAB onClick={onAddTask} />
    </div>
  );
}
