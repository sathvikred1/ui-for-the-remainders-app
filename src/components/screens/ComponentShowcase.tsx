import React, { useState } from 'react';
import { AppBar } from '../AppBar';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { TextArea } from '../TextArea';
import { Select } from '../Select';
import { Badge } from '../Badge';
import { TaskCard } from '../TaskCard';
import { NotificationCard } from '../NotificationCard';
import { EmptyState } from '../EmptyState';
import { Modal } from '../Modal';
import { FAB } from '../FAB';
import { CheckCircle2, Plus, ChevronLeft } from 'lucide-react';

interface ComponentShowcaseProps {
  onBack?: () => void;
}

export function ComponentShowcase({ onBack }: ComponentShowcaseProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))] max-w-md mx-auto pb-20">
      <div className="flex items-center gap-3 px-4 py-3 bg-[rgb(var(--color-surface-elevated))]">
        {onBack && (
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-[rgb(var(--color-surface))] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <h2 className="text-lg font-semibold">Component Showcase</h2>
      </div>

      <div className="flex-1 px-4 py-6 space-y-8">
        {/* Buttons Section */}
        <section>
          <h3 className="mb-3">Buttons</h3>
          <div className="space-y-2">
            <Button variant="primary" className="w-full">
              Primary Button
            </Button>
            <Button variant="secondary" className="w-full">
              Secondary Button
            </Button>
            <Button variant="ghost" className="w-full">
              Ghost Button
            </Button>
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" loading>
              Loading Button
            </Button>
          </div>
        </section>

        {/* Input Fields Section */}
        <section>
          <h3 className="mb-3">Input Fields</h3>
          <div className="space-y-3">
            <InputField
              label="Default Input"
              placeholder="Enter text..."
              helperText="This is helper text"
            />
            <InputField
              label="Error State"
              placeholder="Enter text..."
              error="This field is required"
            />
            <TextArea
              label="Text Area"
              placeholder="Enter description..."
              rows={4}
            />
            <Select label="Select Option">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Select>
          </div>
        </section>

        {/* Badges Section */}
        <section>
          <h3 className="mb-3">Badges</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="primary" size="sm">
              Small Badge
            </Badge>
          </div>
        </section>

        {/* Task Cards Section */}
        <section>
          <h3 className="mb-3">Task Cards</h3>
          <div className="space-y-3">
            <TaskCard
              title="High Priority Task"
              dueDate="Today, 2:00 PM"
              priority="high"
              completed={false}
            />
            <TaskCard
              title="Medium Priority Task"
              dueDate="Tomorrow, 10:00 AM"
              priority="medium"
              completed={false}
            />
            <TaskCard
              title="Completed Task"
              dueDate="Yesterday"
              priority="low"
              completed={true}
            />
          </div>
        </section>

        {/* Notification Cards Section */}
        <section>
          <h3 className="mb-3">Notification Cards</h3>
          <div className="space-y-3">
            <NotificationCard
              title="Task Reminder"
              message="Review project proposal is due in 30 minutes"
              time="2 mins ago"
              type="reminder"
            />
            <NotificationCard
              title="Warning"
              message="You have 3 overdue tasks"
              time="1 hour ago"
              type="warning"
            />
            <NotificationCard
              title="Info"
              message="New feature available: Calendar sync"
              time="3 hours ago"
              type="info"
            />
          </div>
        </section>

        {/* Empty State Section */}
        <section>
          <h3 className="mb-3">Empty State</h3>
          <div className="bg-[rgb(var(--color-surface))] rounded-[var(--radius-lg)] p-4">
            <EmptyState
              icon={<CheckCircle2 className="w-12 h-12 text-[rgb(var(--color-text-tertiary))]" />}
              title="No items found"
              description="Start by creating your first item"
              action={
                <Button variant="primary" size="sm">
                  Create Item
                </Button>
              }
            />
          </div>
        </section>

        {/* Modals Section */}
        <section>
          <h3 className="mb-3">Modals</h3>
          <div className="space-y-2">
            <Button onClick={() => setModalOpen(true)} className="w-full">
              Open Modal
            </Button>
            <Button onClick={() => setBottomSheetOpen(true)} className="w-full" variant="secondary">
              Open Bottom Sheet
            </Button>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h3 className="mb-3">Typography</h3>
          <div className="space-y-3">
            <div>
              <h1>Heading 1</h1>
              <p className="caption">32px / 40px, Bold</p>
            </div>
            <div>
              <h2>Heading 2</h2>
              <p className="caption">24px / 32px, Semibold</p>
            </div>
            <div>
              <h3>Heading 3</h3>
              <p className="caption">20px / 28px, Semibold</p>
            </div>
            <div>
              <p>Body Text - This is regular body text at 16px with 24px line height.</p>
              <p className="caption mt-1">14px / 20px, Regular</p>
            </div>
            <div>
              <p className="caption">Caption Text</p>
              <p className="small mt-1">12px / 16px, Regular</p>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <h3 className="mb-3">Colors</h3>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="w-full h-16 bg-[rgb(var(--color-primary))] rounded-lg mb-1"></div>
              <p className="small text-center">Primary</p>
            </div>
            <div>
              <div className="w-full h-16 bg-[rgb(var(--color-accent))] rounded-lg mb-1"></div>
              <p className="small text-center">Accent</p>
            </div>
            <div>
              <div className="w-full h-16 bg-[rgb(var(--color-error))] rounded-lg mb-1"></div>
              <p className="small text-center">Error</p>
            </div>
            <div>
              <div className="w-full h-16 bg-[rgb(var(--color-warning))] rounded-lg mb-1"></div>
              <p className="small text-center">Warning</p>
            </div>
            <div>
              <div className="w-full h-16 bg-[rgb(var(--color-success))] rounded-lg mb-1"></div>
              <p className="small text-center">Success</p>
            </div>
            <div>
              <div className="w-full h-16 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg mb-1"></div>
              <p className="small text-center">Surface</p>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section>
          <h3 className="mb-3">Spacing System (8px base)</h3>
          <div className="space-y-2">
            {[
              { name: 'XS (4px)', size: '0.5rem' },
              { name: 'SM (8px)', size: '1rem' },
              { name: 'MD (16px)', size: '2rem' },
              { name: 'LG (24px)', size: '3rem' },
              { name: 'XL (32px)', size: '4rem' },
            ].map(({ name, size }) => (
              <div key={name} className="flex items-center gap-3">
                <div
                  className="bg-[rgb(var(--color-primary))] h-8"
                  style={{ width: size }}
                ></div>
                <p className="caption">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section>
          <h3 className="mb-3">Border Radius</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] p-4 rounded-[var(--radius-sm)]">
              <p className="caption">Small (8px)</p>
            </div>
            <div className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] p-4 rounded-[var(--radius-md)]">
              <p className="caption">Medium (12px)</p>
            </div>
            <div className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] p-4 rounded-[var(--radius-lg)]">
              <p className="caption">Large (16px)</p>
            </div>
            <div className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] p-4 rounded-[var(--radius-xl)]">
              <p className="caption">XL (24px)</p>
            </div>
          </div>
        </section>
      </div>

      <FAB onClick={() => console.log('FAB clicked')} icon={<Plus className="w-6 h-6" />} />

      {/* Modal Examples */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Modal Dialog">
        <div className="space-y-4">
          <p>This is a centered modal dialog with a backdrop.</p>
          <InputField label="Sample Input" placeholder="Enter something..." />
          <div className="flex gap-2 pt-2">
            <Button variant="primary" onClick={() => setModalOpen(false)} className="flex-1">
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={bottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
        title="Bottom Sheet"
        variant="bottomSheet"
      >
        <div className="space-y-4">
          <p>This is a bottom sheet that slides up from the bottom of the screen.</p>
          <div className="space-y-2">
            <Button variant="primary" className="w-full">
              Primary Action
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => setBottomSheetOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}