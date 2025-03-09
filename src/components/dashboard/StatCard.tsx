import React from 'react';
import Card from '../ui/Card';

/**
 * StatCard props
 */
export interface StatCardProps {
  /** Title of the stat */
  title: string;
  /** Value of the stat */
  value: string | number;
  /** Change percentage (positive or negative) */
  change?: number;
  /** Icon for the stat */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StatCard component for displaying statistics in a card
 */
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  className = '',
}) => {
  // Determine if the change is positive, negative, or neutral
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  // Change text and color
  const changeText = change
    ? `${isPositive ? '+' : ''}${change.toFixed(1)}%`
    : null;
  const changeColorClass = isPositive
    ? 'text-green-600'
    : isNegative
    ? 'text-red-600'
    : 'text-gray-500';
  
  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          {changeText && (
            <div className="mt-1 flex items-center text-sm">
              <span className={changeColorClass}>{changeText}</span>
              <span className="text-gray-500 ml-1">from previous period</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard; 