import React, { useState } from 'react';
import { AppBar } from '../AppBar';
import { Button } from '../Button';
import { Moon, Bell, Globe, Lock, HelpCircle, LogOut, ChevronRight, User as UserIcon } from 'lucide-react';

interface ProfileScreenProps {
  onLogout: () => void;
}

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto pb-20">
      <AppBar title="Profile" showMore />

      <div className="flex-1 px-4 py-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 p-4 mb-6 bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)]">
          <div className="w-16 h-16 bg-[rgb(var(--color-primary))] rounded-full flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">John Doe</h2>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">john.doe@example.com</p>
          </div>
          <button className="p-2 hover:bg-[rgb(var(--color-surface))] rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-4 bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] text-center">
            <div className="text-2xl font-bold text-[rgb(var(--color-primary))] mb-1">24</div>
            <div className="text-xs text-[rgb(var(--color-text-secondary))]">Active</div>
          </div>
          <div className="p-4 bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] text-center">
            <div className="text-2xl font-bold text-[rgb(var(--color-accent))] mb-1">156</div>
            <div className="text-xs text-[rgb(var(--color-text-secondary))]">Completed</div>
          </div>
          <div className="p-4 bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] text-center">
            <div className="text-2xl font-bold text-[rgb(var(--color-warning))] mb-1">87%</div>
            <div className="text-xs text-[rgb(var(--color-text-secondary))]">Success</div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-[rgb(var(--color-text-tertiary))] mb-2 px-2">
            PREFERENCES
          </h3>
          <div className="bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] overflow-hidden">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-between p-4 hover:bg-[rgb(var(--color-surface))] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
                <span className="text-[rgb(var(--color-text-primary))]">Dark Mode</span>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  darkMode ? 'bg-[rgb(var(--color-primary))]' : 'bg-[rgb(var(--color-gray-300))]'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </div>
            </button>
            <div className="border-t border-[rgb(var(--color-border))]" />
            <button
              onClick={() => setNotifications(!notifications)}
              className="w-full flex items-center justify-between p-4 hover:bg-[rgb(var(--color-surface))] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
                <span className="text-[rgb(var(--color-text-primary))]">Notifications</span>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  notifications ? 'bg-[rgb(var(--color-primary))]' : 'bg-[rgb(var(--color-gray-300))]'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </div>
            </button>
            <div className="border-t border-[rgb(var(--color-border))]" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-[rgb(var(--color-surface))] transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
                <span className="text-[rgb(var(--color-text-primary))]">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[rgb(var(--color-text-secondary))]">English</span>
                <ChevronRight className="w-5 h-5 text-[rgb(var(--color-text-tertiary))]" />
              </div>
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-[rgb(var(--color-text-tertiary))] mb-2 px-2">
            ACCOUNT
          </h3>
          <div className="bg-[rgb(var(--color-surface-elevated))] rounded-[var(--radius-lg)] overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-[rgb(var(--color-surface))] transition-colors">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
                <span className="text-[rgb(var(--color-text-primary))]">Privacy & Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[rgb(var(--color-text-tertiary))]" />
            </button>
            <div className="border-t border-[rgb(var(--color-border))]" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-[rgb(var(--color-surface))] transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[rgb(var(--color-text-secondary))]" />
                <span className="text-[rgb(var(--color-text-primary))]">Help & Support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[rgb(var(--color-text-tertiary))]" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <Button
          variant="secondary"
          onClick={onLogout}
          className="w-full text-[rgb(var(--color-error))] border-[rgb(var(--color-error))]"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </Button>

        <div className="mt-6 text-center">
          <p className="text-xs text-[rgb(var(--color-text-tertiary))]">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
