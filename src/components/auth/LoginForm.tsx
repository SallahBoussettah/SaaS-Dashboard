import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { LoginCredentials } from '../../types/auth';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { login } from '../../store/slices/authSlice';
import { RootState } from '../../store';

/**
 * Login form component for user authentication
 */
const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginCredentials>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const rememberMe = watch('rememberMe');
  
  // Get auth state from Redux store
  const { isLoading, isAuthenticated, error } = useAppSelector((state: RootState) => state.auth);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  // Handle form submission
  const onSubmit = async (data: LoginCredentials) => {
    dispatch(login({...data, rememberMe: !!data.rememberMe}));
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">Welcome back</h1>
        <p className="text-secondary-600">Sign in to access your dashboard</p>
      </div>
      
      {error && (
        <div className="mb-6 p-4 text-sm text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            label="Email address"
            type="email"
            error={errors.email?.message}
            fullWidth
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>
        
        <div>
          <Input
            label="Password"
            type="password"
            error={errors.password?.message}
            fullWidth
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              {...register('rememberMe')}
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-500">
            Forgot your password?
          </Link>
        </div>
        
        <div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isLoading}
          >
            Sign in
          </Button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-secondary-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 