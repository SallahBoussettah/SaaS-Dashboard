# SaaS Dashboard

A modern dashboard template for SaaS applications with a focus on analytics, user management, and feature-rich components. Includes a complete landing page with multiple public pages.

## Features

- Modern and clean design using Tailwind CSS
- Responsive layout for all devices
- Authentication system (login, register) with persistent login state
- Dashboard with statistics, charts, and activity feed
- User management with filtering and search
- Analytics visualization with different chart types
- Settings page with multiple tabs
- Public pages: Landing, About, Careers, Blog, Press, Contact
- Documentation, Integrations, and Release Notes pages
- Social media integration
- State management with Redux Toolkit
- Dark/Light mode support
- Comprehensive component library

## Live Demo

Visit the live demo at [https://saas-dashboard-demo.netlify.app](https://saas-dashboard-demo.netlify.app)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
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
<<<<<<< HEAD
git clone https://github.com/SallahBoussettah/SaaS-Dashboard.git
=======
git clone https://github.com/SallahBoussettah/SaaS-Dashboard
>>>>>>> de7de9d4a7048295f67323f106e63715967b04ad
```

2. Navigate to the project directory
```bash
cd SaaS-Dashboard/saas-dashboard
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
│   │   ├── Register.tsx     # Registration page
│   │   ├── LandingPage.tsx  # Landing page
│   │   ├── AboutPage.tsx    # About page
│   │   ├── CareersPage.tsx  # Careers page
│   │   ├── BlogPage.tsx     # Blog page
│   │   ├── PressPage.tsx    # Press page
│   │   ├── ContactPage.tsx  # Contact page
│   │   ├── IntegrationsPage.tsx # Integrations page
│   │   ├── DocumentationPage.tsx # Documentation page
│   │   └── ReleaseNotesPage.tsx # Release notes page
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

## State Management

The application uses Redux Toolkit for state management with the following slices:

- **Auth Slice**: Manages authentication state, user login and registration with localStorage persistence
- **User Slice**: Handles user data and management operations
- **Theme Slice**: Controls theme preferences (light/dark mode)

## Pages

### Dashboard Area (Authenticated)
1. **Dashboard**: Overview with statistics, charts, and recent activity
2. **Analytics**: Detailed data visualization with various chart types
3. **Users**: User management with filtering, search, and CRUD operations
4. **Settings**: User preferences with multiple tabs (Profile, Account, Appearance, Notifications, Billing)

### Public Pages
1. **Landing Page**: Showcase of features, pricing, and call-to-action sections
2. **About**: Company information, mission, vision, and team
3. **Careers**: Job listings and company culture
4. **Blog**: Articles and news
5. **Press**: Press releases and media coverage
6. **Contact**: Contact form and location information
7. **Integrations**: Available integrations with filtering by category
8. **Documentation**: Comprehensive user guide with search functionality
9. **Release Notes**: Version history with detailed changes

## Deployment

### Deploying to Netlify

1. Fork or clone this repository
2. Sign up or log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - Build command: `cd saas-dashboard && npm install && npm run build`
   - Publish directory: `saas-dashboard/build`
6. Click "Deploy site"

The application includes a `netlify.toml` file that configures redirects for the SPA routing.

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
