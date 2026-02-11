import React, { useState } from 'react';
import { Button } from '../Button';
import { CheckCircle2, Calendar, Bell } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: CheckCircle2,
    title: 'Stay Organized',
    description: 'Keep track of all your tasks and reminders in one beautiful place.',
    color: 'text-[rgb(var(--color-primary))]',
  },
  {
    icon: Calendar,
    title: 'Never Miss a Beat',
    description: 'Set reminders and get notified at just the right time.',
    color: 'text-[rgb(var(--color-accent))]',
  },
  {
    icon: Bell,
    title: 'Boost Productivity',
    description: 'Prioritize tasks and achieve your goals with ease.',
    color: 'text-[rgb(var(--color-warning))]',
  },
];

export function OnboardingScreen({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="flex flex-col h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto">
      <div className="flex justify-end p-4">
        {currentSlide < slides.length - 1 && (
          <button
            onClick={handleSkip}
            className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))] transition-colors"
          >
            Skip
          </button>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="mb-8 p-6 rounded-full bg-[rgb(var(--color-surface))]">
          <Icon className={`w-20 h-20 ${slide.color}`} />
        </div>
        <h1 className="mb-4">{slide.title}</h1>
        <p className="text-[rgb(var(--color-text-secondary))] text-lg max-w-sm">
          {slide.description}
        </p>
      </div>

      <div className="px-8 pb-12">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[rgb(var(--color-primary))]'
                  : 'w-2 bg-[rgb(var(--color-gray-300))]'
              }`}
            />
          ))}
        </div>
        <Button onClick={handleNext} className="w-full">
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
        </Button>
      </div>
    </div>
  );
}
