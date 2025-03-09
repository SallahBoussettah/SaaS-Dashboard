import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import ChartCard from '../components/dashboard/ChartCard';
import Card from '../components/ui/Card';
import { ChartData } from 'chart.js';

/**
 * Dashboard page component
 */
const Dashboard: React.FC = () => {
  // Stats data
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,567',
      change: 12.5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'New Customers',
      value: '1,423',
      change: 8.2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Active Users',
      value: '8,942',
      change: 5.3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Conversion Rate',
      value: '3.42%',
      change: -1.8,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
      ),
    },
  ];
  
  // Chart data - Monthly Revenue
  const revenueData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 22000, 18000, 24000, 25000, 27000, 24000, 23000, 25000, 28000],
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
        tension: 0.4,
      },
    ],
  };
  
  // Chart data - User Growth
  const userGrowthData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [500, 800, 1200, 1000, 1500, 1800],
        backgroundColor: 'rgba(14, 165, 233, 0.7)',
      },
      {
        label: 'Active Users',
        data: [1200, 1500, 2000, 2500, 3000, 3500],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
      },
    ],
  };
  
  // Recent activities
  const recentActivities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'created a new project',
      project: 'Website Redesign',
      time: '2 hours ago',
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'completed task',
      project: 'Mobile App Development',
      time: '4 hours ago',
    },
    {
      id: 3,
      user: 'Robert Johnson',
      action: 'added new comment',
      project: 'E-commerce Platform',
      time: '6 hours ago',
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'updated status',
      project: 'CRM Integration',
      time: '8 hours ago',
    },
    {
      id: 5,
      user: 'Michael Wilson',
      action: 'uploaded files',
      project: 'Marketing Campaign',
      time: '10 hours ago',
    },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's an overview of your business performance.
        </p>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard
          title="Monthly Revenue"
          description="Revenue trends over the past year"
          type="line"
          data={revenueData}
          height={300}
        />
        
        <ChartCard
          title="User Growth"
          description="New and active users over the past 6 months"
          type="bar"
          data={userGrowthData}
          height={300}
        />
      </div>
      
      {/* Recent Activity */}
      <Card
        title="Recent Activity"
        description="Latest actions across your projects"
        className="overflow-hidden"
      >
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center py-4">
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                {activity.user.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  {activity.user} <span className="font-normal">{activity.action}</span>
                </p>
                <p className="text-sm text-gray-500">
                  {activity.project} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard; 