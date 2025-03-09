# SaaS Dashboard

A modern dashboard template for SaaS applications with a focus on analytics, user management, and feature-rich components.

## Features

- Modern and clean design using Tailwind CSS
- Responsive layout for all devices
- Authentication system (login, register)
- Dashboard with statistics, charts, and activity feed
- User management with filtering and search
- Analytics visualization with different chart types
- Settings page with multiple tabs
- State management with Redux Toolkit
- Dark/Light mode support
- Comprehensive component library

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 3.3.0
- React Router DOM
- Redux Toolkit
- Chart.js
- React Hook Form

## Getting Started

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/SallahBoussettah/SaaS-Dashboard
```

2. Navigate to the project directory
```bash
cd saas-dashboard
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
saas-dashboard/
├── public/                  # Public assets
├── src/                     # Source code
│   ├── components/          # Reusable components
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Dashboard components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Application pages
│   │   ├── Dashboard.tsx    # Dashboard page
│   │   ├── Analytics.tsx    # Analytics page
│   │   ├── Users.tsx        # User management page
│   │   ├── Settings.tsx     # Settings page
│   │   ├── Login.tsx        # Login page
│   │   └── Register.tsx     # Registration page
│   ├── services/            # API services
│   ├── store/               # Redux store
│   │   ├── index.ts         # Store configuration
│   │   └── slices/          # Redux slices
│   │       ├── authSlice.ts # Authentication slice
│   │       ├── userSlice.ts # User management slice
│   │       └── themeSlice.ts# Theme settings slice
│   ├── types/               # TypeScript types
│   └── utils/               # Utility functions
├── package.json             # Dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs tests
- `npm eject` - Ejects from Create React App

## State Management

The application uses Redux Toolkit for state management with the following slices:

- **Auth Slice**: Manages authentication state, user login and registration
- **User Slice**: Handles user data and management operations
- **Theme Slice**: Controls theme preferences (light/dark mode)

## Pages

1. **Dashboard**: Overview with statistics, charts, and recent activity
2. **Analytics**: Detailed data visualization with various chart types
3. **Users**: User management with filtering, search, and CRUD operations
4. **Settings**: User preferences with multiple tabs (Profile, Account, Appearance, Notifications, Billing)
5. **Login/Register**: Authentication pages with form validation

## Customization

### Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file:

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Primary color palette
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ...
        },
        secondary: {
          // Secondary color palette
          50: '#f8fafc',
          100: '#f1f5f9',
          // ...
        },
      },
      // Add other customizations
    },
  },
  plugins: [],
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Chart.js](https://www.chartjs.org/)
- [Heroicons](https://heroicons.com/)
