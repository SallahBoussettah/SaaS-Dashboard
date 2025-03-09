import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { RegisterCredentials } from '../../types/auth';

/**
 * Registration form component for new user signup
 */
const RegisterForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<RegisterCredentials>();
  
  // Get the password value for confirm password validation
  const password = watch('password');
  
  // Handle form submission
  const onSubmit = async (data: RegisterCredentials) => {
    try {
      // This is where you would make an API call to register the user
      console.log('Registration data:', data);
      
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Handle successful registration (e.g., redirect to login)
      console.log('Registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">Create your account</h1>
        <p className="text-secondary-600">Start your 30-day free trial today</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Input
              label="First name"
              error={errors.firstName?.message}
              fullWidth
              {...register('firstName', {
                required: 'First name is required',
              })}
            />
          </div>
          
          <div>
            <Input
              label="Last name"
              error={errors.lastName?.message}
              fullWidth
              {...register('lastName', {
                required: 'Last name is required',
              })}
            />
          </div>
        </div>
        
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
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
              },
            })}
          />
        </div>
        
        <div>
          <Input
            label="Confirm password"
            type="password"
            error={errors.confirmPassword?.message}
            fullWidth
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === password || 'The passwords do not match',
            })}
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="accept-terms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            required
          />
          <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-700">
            I accept the{' '}
            <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isSubmitting}
          >
            Create account
          </Button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-secondary-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm; 