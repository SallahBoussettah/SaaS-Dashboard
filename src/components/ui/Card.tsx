import React from 'react';

/**
 * Card props interface
 */
export interface CardProps {
  /** Card title */
  title?: string;
  /** Card description or subtitle */
  description?: string;
  /** Additional content for the card header */
  headerContent?: React.ReactNode;
  /** Card content */
  children: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to disable the padding */
  noPadding?: boolean;
}

/**
 * Card component for displaying content in a container
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  headerContent,
  children,
  footer,
  className = '',
  noPadding = false,
}) => {
  // Base classes for the card
  const cardClasses = `bg-white rounded-lg shadow-md ${!noPadding ? 'p-0' : ''} ${className}`;
  
  // Whether to show the header
  const showHeader = title || description || headerContent;
  
  return (
    <div className={cardClasses}>
      {showHeader && (
        <div className="border-b border-gray-200 p-6">
          <div className="flex justify-between items-start">
            <div>
              {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
              {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
            </div>
            {headerContent && (
              <div>{headerContent}</div>
            )}
          </div>
        </div>
      )}
      
      <div className={!noPadding ? 'p-6' : ''}>{children}</div>
      
      {footer && (
        <div className="border-t border-gray-200 p-6">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 