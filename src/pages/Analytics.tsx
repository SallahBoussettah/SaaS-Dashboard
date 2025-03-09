import React from 'react';
import Card from '../components/ui/Card';
import ChartCard from '../components/dashboard/ChartCard';
import { ChartData, ChartOptions } from 'chart.js';

/**
 * Analytics page component
 */
const Analytics: React.FC = () => {
  // Sales by channel data
  const salesByChannelData: ChartData = {
    labels: ['Direct', 'Affiliate', 'Email', 'Social', 'Search'],
    datasets: [
      {
        label: 'Sales by Channel',
        data: [35, 20, 15, 18, 12],
        backgroundColor: [
          'rgba(14, 165, 233, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(239, 68, 68, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Sales by channel options
  const salesByChannelOptions: ChartOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  // Monthly revenue data
  const monthlyRevenueData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'This Year',
        data: [18000, 22000, 24000, 26000, 28000, 32000, 34000, 36000, 38000, 40000, 42000, 44000],
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Last Year',
        data: [12000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000],
        borderColor: 'rgb(156, 163, 175)',
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Monthly active users data
  const activeUsersData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Mobile',
        data: [3500, 4000, 4200, 4800, 5200, 5800],
        backgroundColor: 'rgba(14, 165, 233, 0.7)',
      },
      {
        label: 'Desktop',
        data: [4200, 4800, 5000, 5400, 5800, 6200],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
      },
      {
        label: 'Tablet',
        data: [1200, 1400, 1600, 1800, 2000, 2200],
        backgroundColor: 'rgba(249, 115, 22, 0.7)',
      },
    ],
  };

  // Key metrics
  const metrics = [
    { label: 'Conversion Rate', value: '3.42%', change: '+0.8%', color: 'text-green-600' },
    { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', color: 'text-green-600' },
    { label: 'Avg. Session Duration', value: '3m 27s', change: '+12s', color: 'text-green-600' },
    { label: 'Pages per Session', value: '3.8', change: '+0.3', color: 'text-green-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Detailed insights about your business performance
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500">{metric.label}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{metric.value}</p>
              <p className={`mt-2 text-sm ${metric.color}`}>{metric.change} from last period</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard
          title="Monthly Revenue"
          description="Comparison with previous year"
          type="line"
          data={monthlyRevenueData}
          height={300}
        />

        <ChartCard
          title="Sales by Channel"
          description="Distribution of sales by marketing channel"
          type="bar"
          data={salesByChannelData}
          options={salesByChannelOptions}
          height={300}
        />
      </div>

      {/* Active Users */}
      <ChartCard
        title="Active Users by Device"
        description="Monthly active users segmented by device type"
        type="bar"
        data={activeUsersData}
        height={300}
      />

      {/* Traffic Sources Table */}
      <Card
        title="Traffic Sources"
        description="Top sources driving traffic to your website"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  New Users
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sessions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bounce Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Session
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { source: 'Google', users: '5,428', newUsers: '3,812', sessions: '7,642', bounceRate: '38.2%', avgSession: '3m 12s' },
                { source: 'Direct', users: '3,256', newUsers: '1,824', sessions: '4,128', bounceRate: '42.1%', avgSession: '3m 45s' },
                { source: 'Facebook', users: '2,845', newUsers: '1,938', sessions: '3,642', bounceRate: '46.8%', avgSession: '2m 32s' },
                { source: 'Twitter', users: '1,438', newUsers: '862', sessions: '1,782', bounceRate: '52.3%', avgSession: '1m 48s' },
                { source: 'LinkedIn', users: '982', newUsers: '624', sessions: '1,254', bounceRate: '41.7%', avgSession: '2m 56s' },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.users}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.newUsers}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.sessions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.bounceRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.avgSession}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Analytics; 