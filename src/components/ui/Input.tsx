import React, { InputHTMLAttributes, forwardRef } from 'react';

/**
 * Input sizes
 */
export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Input props interface
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Input helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Input size */
  size?: InputSize;
  /** Start icon */
  startIcon?: React.ReactNode;
  /** End icon */
  endIcon?: React.ReactNode;
  /** Full width input */
  fullWidth?: boolean;
}

/**
 * Input component for form controls
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error,
  size = 'md',
  startIcon,
  endIcon,
  fullWidth = false,
  className = '',
  id,
  disabled,
  ...props
}, ref) => {
  // Generate a unique ID for the input if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  // Base classes for the input wrapper
  const wrapperClasses = `${fullWidth ? 'w-full' : ''}`;
  
  // Base classes for the input
  const baseClasses = 'block border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors';
  
  // Size classes
  const sizeClasses = {
    sm: 'py-1.5 text-sm',
    md: 'py-2 text-base',
    lg: 'py-3 text-lg',
  };
  
  // Width classes for the input
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Padding classes based on icons
  const paddingClasses = {
    left: startIcon ? 'pl-10' : 'pl-3',
    right: endIcon ? 'pr-10' : 'pr-3',
  };
  
  // State classes (error, disabled)
  const stateClasses = error
    ? 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500'
    : 'border-gray-300 text-gray-900 placeholder-gray-400';
  
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : 'bg-white';
  
  // Combine all classes
  const inputClasses = `${baseClasses} ${sizeClasses[size]} ${widthClasses} ${paddingClasses.left} ${paddingClasses.right} ${stateClasses} ${disabledClasses} ${className}`;
  
  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          id={inputId}
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText || error ? `${inputId}-description` : undefined}
          {...props}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
      {(helperText || error) && (
        <p
          id={`${inputId}-description`}
          className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 