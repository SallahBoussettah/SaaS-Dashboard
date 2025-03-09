import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import Card from '../ui/Card';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * Chart types
 */
export type ChartType = 'line' | 'bar';

/**
 * ChartCard props
 */
export interface ChartCardProps {
  /** Chart title */
  title: string;
  /** Chart description */
  description?: string;
  /** Chart type */
  type: ChartType;
  /** Chart data */
  data: ChartData;
  /** Chart options */
  options?: ChartOptions;
  /** Chart height */
  height?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ChartCard component for displaying charts in a card
 */
const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  type,
  data,
  options,
  height = 300,
  className = '',
}) => {
  // Default chart options
  const defaultOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  // Merge default options with provided options
  const chartOptions = { ...defaultOptions, ...options };
  
  return (
    <Card
      title={title}
      description={description}
      className={className}
    >
      <div style={{ height: `${height}px` }}>
        {type === 'line' && <Line data={data as ChartData<'line'>} options={chartOptions as ChartOptions<'line'>} />}
        {type === 'bar' && <Bar data={data as ChartData<'bar'>} options={chartOptions as ChartOptions<'bar'>} />}
      </div>
    </Card>
  );
};

export default ChartCard; 