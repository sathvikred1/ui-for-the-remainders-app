import React, { useState } from 'react';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { CheckCircle2 } from 'lucide-react';

interface AuthScreenProps {
  onLogin: () => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto">
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[rgb(var(--color-primary))] rounded-full">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2">Remainders</h1>
          <p className="text-[rgb(var(--color-text-secondary))]">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <InputField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isLogin && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[rgb(var(--color-primary))] hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <Button type="submit" className="w-full mt-6">
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-[rgb(var(--color-text-secondary))]"
          >
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <span className="text-[rgb(var(--color-primary))] hover:underline">
              {isLogin ? 'Sign up' : 'Sign in'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
