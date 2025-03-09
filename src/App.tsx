import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useAppDispatch';
import { RootState } from './store';
import { setCredentials } from './store/slices/authSlice';
import { UserRole } from './types/auth';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import PressPage from './pages/PressPage';
import ContactPage from './pages/ContactPage';
import IntegrationsPage from './pages/IntegrationsPage';
import DocumentationPage from './pages/DocumentationPage';
import ReleaseNotesPage from './pages/ReleaseNotesPage';

/**
 * Main App component - defines the routing structure
 */
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  
  // Get auth state from Redux store
  const { isAuthenticated, user } = useAppSelector((state: RootState) => state.auth);
  
  // Check for saved auth data in localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(setCredentials({
          user: parsedUser,
          token: storedToken
        }));
      } catch (error) {
        // If parsing fails, clear localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, [dispatch]); // Only run once on component mount
  
  // You can uncomment this effect if you want automatic login for testing purposes
  // but it will prevent the logout function from working properly
  /*
  useEffect(() => {
    if (!isAuthenticated) {
      // This is a mock user for demonstration purposes
      const mockUser = {
        id: '1',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        role: UserRole.ADMIN,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      // Set mock credentials
      dispatch(setCredentials({
        user: mockUser,
        token: 'mock-token'
      }));
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'mock-token');
    }
  }, [dispatch, isAuthenticated]);
  */
  
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Company pages (accessible to all users) */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/release-notes" element={<ReleaseNotesPage />} />
        
        {/* Public routes (accessible to all users) */}
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} 
        />
        <Route 
          path="/register" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} 
        />
        
        {/* Protected routes (only accessible to authenticated users) */}
        <Route 
          path="/" 
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          
          {/* Catch all route for protected area */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
        
        {/* Catch all route - redirect to landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
