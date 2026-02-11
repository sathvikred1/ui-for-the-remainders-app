# Remainders - Mobile UI Framework

A modern, production-ready mobile UI framework for productivity and reminder applications. Built with React, TypeScript, and Tailwind CSS v4.

![Framework Preview](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80)

## 🎨 Features

- **Complete Design System** - 8px spacing, 4pt typography scale, comprehensive color palette
- **Dark Mode Ready** - Full dark theme support with CSS custom properties
- **Reusable Components** - 15+ production-ready components
- **8 Complete Screens** - Onboarding, Auth, Dashboard, Calendar, Profile, and more
- **Mobile-First** - Optimized for 375px-428px devices, responsive on larger screens
- **Developer Friendly** - Clean code, TypeScript support, easy to customize
- **Flutter Export Ready** - Follows patterns that translate well to Flutter

## 📦 What's Included

### Core Components
- **AppBar** - Navigation bar with action icons
- **BottomNav** - 4-tab bottom navigation
- **Button** - Primary, Secondary, Ghost variants
- **InputField** - With label, error states, and helper text
- **TextArea** - Multi-line text input
- **Select** - Dropdown select with custom styling
- **TaskCard** - Interactive task card with priority and due date
- **FAB** - Floating Action Button
- **Modal** - Modal dialog and bottom sheet variants
- **Badge** - Status badges with color variants
- **EmptyState** - Empty state placeholder
- **NotificationCard** - Reminder and notification cards

### Screens
1. **Onboarding** - 3-slide onboarding flow with skip option
2. **Authentication** - Login/Sign up with form validation
3. **Dashboard** - Today's tasks and upcoming items
4. **Task List** - Full task list with filtering
5. **Calendar** - Calendar view with date picker
6. **Task Detail** - Detailed task view with subtasks
7. **Add/Edit Task** - Complete task creation/editing form
8. **Profile** - User profile with stats and settings

### Component Showcase
Interactive showcase displaying all components with live examples of:
- Button variants and states
- Input fields and forms
- Badges and tags
- Task and notification cards
- Modals and sheets
- Typography scale
- Color palette
- Spacing system
- Border radius variants

## 🚀 Quick Start

The app starts with a **Screen Selector** that lets you navigate to any screen or the component showcase.

### Navigate the Framework

```tsx
// The app starts at the screen selector
// Click "Component Showcase" to see all components
// Click any screen name to preview that screen
```

### Using Components

```tsx
import { Button } from './components/Button';
import { TaskCard } from './components/TaskCard';

// Primary button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Task card
<TaskCard 
  title="Review project proposal"
  dueDate="Today, 2:00 PM"
  priority="high"
  completed={false}
  onToggle={handleToggle}
  onClick={handleClick}
/>
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (rgb(99 102 241))
- **Accent**: Soft Green (rgb(34 197 94))
- **Error**: Red (rgb(239 68 68))
- **Warning**: Orange (rgb(251 146 60))
- **Success**: Green (rgb(34 197 94))

### Spacing (8px base)
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px

### Typography (4pt scale)
- H1: 32px / Bold
- H2: 24px / Semibold
- H3: 20px / Semibold
- Body: 16px / Regular
- Caption: 14px / Regular

### Border Radius
- All cards and buttons: 16px
- Small elements: 8px
- Badges: Full rounded

## 🌙 Dark Mode

Toggle dark mode programmatically:

```tsx
// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');

// Toggle
document.documentElement.classList.toggle('dark');
```

The Profile screen includes a dark mode toggle in the settings.

## 📱 Responsive Design

The framework is mobile-first with a maximum width of 448px (md breakpoint) centered on larger screens. All components use flexbox and CSS Grid for auto-layout behavior.

## 🎯 Use Cases

Perfect for building:
- Task management apps
- Reminder applications
- Productivity tools
- To-do list apps
- Calendar applications
- Note-taking apps

## 📐 Auto Layout

All components follow auto-layout principles:
- Consistent padding and spacing
- Flexible layouts that adapt to content
- Proper use of flexbox and grid
- Clear component hierarchy

## 🔧 Customization

### Change Primary Color

Edit `/styles/globals.css`:

```css
:root {
  --color-primary: 99 102 241; /* Change this */
}
```

### Add New Components

Create new components in `/components/` following the existing patterns:
- Use CSS custom properties for colors
- Follow the 8px spacing system
- Use 16px border radius for consistency
- Support dark mode via CSS variables

## 📚 Documentation

See [FRAMEWORK.md](./FRAMEWORK.md) for complete documentation including:
- Detailed component APIs
- Design system specifications
- Best practices
- Flutter export guidelines

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **date-fns** - Date formatting

## 🎓 Learning Resources

This framework demonstrates:
- Modern React patterns
- Component composition
- Design system implementation
- Mobile-first responsive design
- Dark mode implementation
- TypeScript in React
- Tailwind CSS v4 usage

## 📄 License

This is a UI framework demo. Feel free to use it as a starting point for your projects.

## 🙏 Credits

Built with love for the developer community. Icons by [Lucide](https://lucide.dev/).
