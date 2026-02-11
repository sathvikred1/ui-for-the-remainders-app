import React, { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { AuthScreen } from './components/screens/AuthScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { TaskListScreen } from './components/screens/TaskListScreen';
import { CalendarScreen } from './components/screens/CalendarScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { TaskDetailScreen } from './components/screens/TaskDetailScreen';
import { AddEditTaskScreen } from './components/screens/AddEditTaskScreen';
import { ComponentShowcase } from './components/screens/ComponentShowcase';
import { Button } from './components/Button';
import { Eye } from 'lucide-react';
import './styles/globals.css';

type Screen =
  | 'screenSelector'
  | 'onboarding'
  | 'auth'
  | 'dashboard'
  | 'taskList'
  | 'calendar'
  | 'profile'
  | 'taskDetail'
  | 'addTask'
  | 'editTask'
  | 'showcase';

type Tab = 'home' | 'tasks' | 'calendar' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('screenSelector');
  const [activeTab, setActiveTab] = useState<Tab>('home');

  // Screen Selector Component
  const ScreenSelector = () => (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto p-6">
      <div className="mb-8">
        <h1 className="mb-2">Remainders Framework</h1>
        <p className="text-[rgb(var(--color-text-secondary))]">
          Select a screen to preview
        </p>
      </div>

      <div className="space-y-2 flex-1">
        <Button onClick={() => setCurrentScreen('showcase')} variant="primary" className="w-full justify-start">
          <Eye className="w-5 h-5" />
          Component Showcase
        </Button>
        
        <div className="pt-4 pb-2">
          <h3 className="text-sm font-medium text-[rgb(var(--color-text-tertiary))]">SCREENS</h3>
        </div>
        
        <Button onClick={() => setCurrentScreen('onboarding')} variant="secondary" className="w-full justify-start">
          Onboarding
        </Button>
        <Button onClick={() => setCurrentScreen('auth')} variant="secondary" className="w-full justify-start">
          Login / Sign Up
        </Button>
        <Button onClick={() => { setCurrentScreen('dashboard'); setActiveTab('home'); }} variant="secondary" className="w-full justify-start">
          Dashboard (Home)
        </Button>
        <Button onClick={() => { setCurrentScreen('taskList'); setActiveTab('tasks'); }} variant="secondary" className="w-full justify-start">
          Task List
        </Button>
        <Button onClick={() => { setCurrentScreen('calendar'); setActiveTab('calendar'); }} variant="secondary" className="w-full justify-start">
          Calendar View
        </Button>
        <Button onClick={() => setCurrentScreen('taskDetail')} variant="secondary" className="w-full justify-start">
          Task Detail
        </Button>
        <Button onClick={() => setCurrentScreen('addTask')} variant="secondary" className="w-full justify-start">
          Add Task
        </Button>
        <Button onClick={() => { setCurrentScreen('profile'); setActiveTab('profile'); }} variant="secondary" className="w-full justify-start">
          Profile / Settings
        </Button>
      </div>

      <div className="pt-4 border-t border-[rgb(var(--color-border))]">
        <p className="text-xs text-[rgb(var(--color-text-tertiary))] text-center">
          Mobile UI Framework • React + Tailwind CSS
        </p>
      </div>
    </div>
  );

  const handleOnboardingComplete = () => {
    setCurrentScreen('auth');
  };

  const handleLogin = () => {
    setCurrentScreen('dashboard');
    setActiveTab('home');
  };

  const handleLogout = () => {
    setCurrentScreen('auth');
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'home':
        setCurrentScreen('dashboard');
        break;
      case 'tasks':
        setCurrentScreen('taskList');
        break;
      case 'calendar':
        setCurrentScreen('calendar');
        break;
      case 'profile':
        setCurrentScreen('profile');
        break;
    }
  };

  const handleAddTask = () => {
    setCurrentScreen('addTask');
  };

  const handleTaskClick = (taskId: string) => {
    console.log('Task clicked:', taskId);
    setCurrentScreen('taskDetail');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setActiveTab('home');
  };

  const handleBackToTaskList = () => {
    setCurrentScreen('taskList');
    setActiveTab('tasks');
  };

  const handleEditTask = () => {
    setCurrentScreen('editTask');
  };

  const handleSaveTask = () => {
    setCurrentScreen('dashboard');
    setActiveTab('home');
  };

  const showBottomNav =
    currentScreen === 'dashboard' ||
    currentScreen === 'taskList' ||
    currentScreen === 'calendar' ||
    currentScreen === 'profile';

  return (
    <div className="relative min-h-screen">
      {currentScreen === 'screenSelector' && <ScreenSelector />}

      {currentScreen === 'onboarding' && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}

      {currentScreen === 'auth' && <AuthScreen onLogin={handleLogin} />}

      {currentScreen === 'dashboard' && (
        <DashboardScreen onAddTask={handleAddTask} onTaskClick={handleTaskClick} />
      )}

      {currentScreen === 'taskList' && (
        <TaskListScreen onAddTask={handleAddTask} onTaskClick={handleTaskClick} />
      )}

      {currentScreen === 'calendar' && <CalendarScreen onAddTask={handleAddTask} />}

      {currentScreen === 'profile' && <ProfileScreen onLogout={handleLogout} />}

      {currentScreen === 'taskDetail' && (
        <TaskDetailScreen onBack={handleBackToDashboard} onEdit={handleEditTask} />
      )}

      {currentScreen === 'addTask' && (
        <AddEditTaskScreen
          onBack={handleBackToDashboard}
          onSave={handleSaveTask}
          isEdit={false}
        />
      )}

      {currentScreen === 'editTask' && (
        <AddEditTaskScreen
          onBack={() => setCurrentScreen('taskDetail')}
          onSave={handleSaveTask}
          isEdit={true}
        />
      )}

      {currentScreen === 'showcase' && <ComponentShowcase onBack={() => setCurrentScreen('screenSelector')} />}

      {showBottomNav && <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
}