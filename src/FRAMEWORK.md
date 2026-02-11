# Remainders UI Framework

A modern, mobile-first UI framework for productivity and reminder applications built with React and Tailwind CSS.

## Design System

### Color Palette

#### Light Theme
- **Primary**: Indigo-500 (`rgb(99 102 241)`)
- **Accent**: Green-500 (`rgb(34 197 94)`)
- **Background**: White
- **Surface**: Gray-50
- **Text Primary**: Gray-900
- **Text Secondary**: Gray-500

#### Dark Theme
- **Primary**: Indigo-400 (`rgb(129 140 248)`)
- **Accent**: Green-400 (`rgb(74 222 128)`)
- **Background**: Gray-900
- **Surface**: Gray-800
- **Text Primary**: Gray-50
- **Text Secondary**: Gray-400

### Spacing System (8px base)

```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 40px
--spacing-3xl: 48px
```

### Typography Scale (4pt)

- **H1**: 32px / 40px (2rem / 2.5rem)
- **H2**: 24px / 32px (1.5rem / 2rem)
- **H3**: 20px / 28px (1.25rem / 1.75rem)
- **Body**: 16px / 24px (1rem / 1.5rem)
- **Caption**: 14px / 20px (0.875rem / 1.25rem)
- **Small**: 12px / 16px (0.75rem / 1rem)

### Border Radius

- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px
- **Extra Large**: 24px
- **Full**: 9999px

### Shadows

- **Small**: Subtle shadow for cards
- **Medium**: Standard elevation
- **Large**: Prominent elements
- **Extra Large**: Modals and overlays

## Components

### Core Components

#### AppBar
Navigation bar for screen headers with optional action icons.

```tsx
import { AppBar } from './components/AppBar';

<AppBar 
  title="Dashboard" 
  showNotification 
  showSearch 
  showMore
  onNotificationClick={() => {}}
  onSearchClick={() => {}}
  onMoreClick={() => {}}
/>
```

**Props:**
- `title` (string): Screen title
- `showNotification` (boolean): Show notification icon
- `showSearch` (boolean): Show search icon
- `showMore` (boolean): Show more options icon
- Callback handlers for each action

#### BottomNav
Bottom navigation bar with 4 tabs.

```tsx
import { BottomNav } from './components/BottomNav';

<BottomNav 
  activeTab="home" 
  onTabChange={(tab) => console.log(tab)} 
/>
```

**Props:**
- `activeTab`: 'home' | 'tasks' | 'calendar' | 'profile'
- `onTabChange`: Callback function

#### Button
Flexible button component with variants.

```tsx
import { Button } from './components/Button';

<Button variant="primary" size="md" loading={false}>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- Standard button HTML attributes

#### InputField
Form input with label, error state, and helper text.

```tsx
import { InputField } from './components/InputField';

<InputField 
  label="Email"
  placeholder="you@example.com"
  error="Invalid email"
  helperText="We'll never share your email"
/>
```

**Props:**
- `label`: Optional label text
- `error`: Error message (shows error state)
- `helperText`: Helper text below input
- Standard input HTML attributes

#### TaskCard
Card component for displaying task information.

```tsx
import { TaskCard } from './components/TaskCard';

<TaskCard 
  title="Review project proposal"
  dueDate="Today, 2:00 PM"
  priority="high"
  completed={false}
  onToggle={() => {}}
  onClick={() => {}}
/>
```

**Props:**
- `title`: Task title
- `dueDate`: Due date string
- `priority`: 'low' | 'medium' | 'high'
- `completed`: boolean
- `onToggle`: Checkbox callback
- `onClick`: Card click callback

#### FAB (Floating Action Button)
Floating action button for primary actions.

```tsx
import { FAB } from './components/FAB';

<FAB onClick={() => {}} label="Add Task" />
```

**Props:**
- `onClick`: Click handler
- `icon`: Custom icon (optional)
- `label`: Accessibility label

#### Modal
Modal dialog with two variants.

```tsx
import { Modal } from './components/Modal';

<Modal 
  isOpen={true}
  onClose={() => {}}
  title="Modal Title"
  variant="modal" // or "bottomSheet"
>
  <p>Modal content</p>
</Modal>
```

**Props:**
- `isOpen`: boolean
- `onClose`: Close handler
- `title`: Optional title
- `variant`: 'modal' | 'bottomSheet'
- `children`: Modal content

#### EmptyState
Empty state component with icon and action.

```tsx
import { EmptyState } from './components/EmptyState';
import { Inbox } from 'lucide-react';

<EmptyState 
  icon={<Inbox className="w-12 h-12" />}
  title="No tasks yet"
  description="Create your first task to get started"
  action={<Button>Add Task</Button>}
/>
```

**Props:**
- `icon`: Custom icon component
- `title`: Main heading
- `description`: Supporting text
- `action`: Action button/element

#### NotificationCard
Card for displaying notifications and reminders.

```tsx
import { NotificationCard } from './components/NotificationCard';

<NotificationCard 
  title="Task Due Soon"
  message="Review project proposal is due in 30 minutes"
  time="2 mins ago"
  type="reminder"
  onDismiss={() => {}}
/>
```

**Props:**
- `title`: Notification title
- `message`: Notification message
- `time`: Time string
- `type`: 'reminder' | 'warning' | 'info'
- `onDismiss`: Dismiss handler

## Screens

### OnboardingScreen
3-slide onboarding flow with skip option.

### AuthScreen
Login/Signup screen with form validation.

### DashboardScreen
Main dashboard showing today's tasks and upcoming items.

### TaskListScreen
Full task list with filtering (All, Active, Completed).

### CalendarScreen
Calendar view with date picker and task list for selected date.

### TaskDetailScreen
Detailed view of a single task with subtasks.

### AddEditTaskScreen
Form for creating/editing tasks with all fields.

### ProfileScreen
User profile with stats, settings, and preferences.

## Dark Mode

Toggle dark mode programmatically:

```tsx
// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');

// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

All colors are CSS custom properties that automatically switch based on the `.dark` class on the root element.

## Responsive Design

The framework is mobile-first with a max-width of 448px (md breakpoint) centered on larger screens. All components use flexbox and CSS Grid for auto-layout behavior.

## Icons

The framework uses [Lucide React](https://lucide.dev/) for icons. Import and use:

```tsx
import { Calendar, Bell, Settings } from 'lucide-react';

<Calendar className="w-5 h-5 text-[rgb(var(--color-primary))]" />
```

## Flutter Export Considerations

The framework follows mobile design patterns that translate well to Flutter:

1. **Auto Layout**: All components use flexbox (Flutter's Column/Row)
2. **Spacing System**: 8px grid aligns with Flutter's spacing
3. **Component Structure**: Clear component hierarchy
4. **State Management**: Simple state patterns easy to convert
5. **Design Tokens**: CSS variables map to Flutter theme constants

## Best Practices

1. **Use Design Tokens**: Always use CSS custom properties for colors
2. **Maintain Spacing**: Follow the 8px spacing system
3. **Consistent Borders**: Use 16px (`--radius-lg`) for cards and buttons
4. **Accessibility**: Include proper ARIA labels and keyboard navigation
5. **Mobile First**: Design for 375px-428px width devices
6. **Performance**: Minimize re-renders with proper state management

## Component Composition

Build complex UIs by composing simple components:

```tsx
<div className="space-y-4">
  <AppBar title="My Screen" showSearch />
  
  <div className="px-4">
    <TaskCard {...taskProps} />
    <TaskCard {...taskProps} />
  </div>
  
  <FAB onClick={handleAdd} />
  <BottomNav activeTab="home" onTabChange={handleTabChange} />
</div>
```

## Next Steps

- Add animations with Framer Motion
- Implement gesture controls (swipe, drag)
- Add more component variants
- Build theme customization
- Add unit tests
- Create Storybook documentation
