import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../store';
import { setThemeMode, toggleThemeMode } from '../store/slices/themeSlice';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

/**
 * Settings page component
 */
const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state: RootState) => state.theme);
  const { user } = useAppSelector((state: RootState) => state.auth);
  
  const [activeTab, setActiveTab] = useState('profile');
  
  // Toggle dark/light mode
  const handleToggleTheme = () => {
    dispatch(toggleThemeMode());
  };
  
  // Tab navigation items
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'account', label: 'Account' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing' },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 flex-shrink-0">
          <Card className="sticky top-6">
            <nav className="-mx-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </Card>
        </div>
        
        {/* Content Area */}
        <div className="flex-1">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <Card title="Profile Information" description="Update your profile information and picture">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-lg font-medium">
                        {user?.firstName?.charAt(0) || ''}{user?.lastName?.charAt(0) || ''}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 sm:mt-0">
                    <h3 className="text-base font-medium text-gray-900">Profile Photo</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Upload a new photo or remove your current one
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" size="sm">
                        Upload
                      </Button>
                      <Button variant="light" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    label="First Name"
                    defaultValue={user?.firstName || ''}
                    fullWidth
                  />
                  <Input
                    label="Last Name"
                    defaultValue={user?.lastName || ''}
                    fullWidth
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    defaultValue={user?.email || ''}
                    fullWidth
                    className="sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Write a few sentences about yourself"
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button variant="light" className="mr-2">
                    Cancel
                  </Button>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          )}
          
          {/* Account Settings */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              <Card title="Password" description="Update your password">
                <div className="space-y-6">
                  <Input
                    label="Current Password"
                    type="password"
                    fullWidth
                  />
                  <Input
                    label="New Password"
                    type="password"
                    fullWidth
                  />
                  <Input
                    label="Confirm Password"
                    type="password"
                    fullWidth
                  />
                  <div className="flex justify-end">
                    <Button variant="primary">
                      Update Password
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card title="Two-Factor Authentication" description="Add additional security to your account">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Two-factor authentication is disabled
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Two-factor authentication adds an additional layer of security to your account
                    </p>
                  </div>
                  <Button variant="secondary">
                    Enable
                  </Button>
                </div>
              </Card>
              
              <Card title="Delete Account" description="Permanently delete your account">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Delete your account and all of your data
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                  </div>
                  <Button variant="danger">
                    Delete Account
                  </Button>
                </div>
              </Card>
            </div>
          )}
          
          {/* Appearance Settings */}
          {activeTab === 'appearance' && (
            <Card title="Appearance" description="Customize the look and feel of the dashboard">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Theme
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div
                      className={`border rounded-lg p-4 cursor-pointer ${
                        mode === 'light' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                      onClick={() => dispatch(setThemeMode('light'))}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Light</span>
                        {mode === 'light' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="mt-2 h-20 bg-white border border-gray-200 rounded"></div>
                    </div>
                    
                    <div
                      className={`border rounded-lg p-4 cursor-pointer ${
                        mode === 'dark' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                      onClick={() => dispatch(setThemeMode('dark'))}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Dark</span>
                        {mode === 'dark' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="mt-2 h-20 bg-gray-800 border border-gray-700 rounded"></div>
                    </div>
                    
                    <div className="border rounded-lg p-4 cursor-pointer border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">System</span>
                      </div>
                      <div className="mt-2 h-20 bg-gradient-to-r from-white to-gray-800 border border-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Sidebar compact mode
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Use a more compact sidebar to save space
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className={`${
                          false
                            ? 'bg-primary-600'
                            : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                      >
                        <span className="sr-only">Enable compact mode</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            false ? 'translate-x-5' : 'translate-x-0'
                          } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
          
          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <Card title="Notification Settings" description="Manage how you receive notifications">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    Email Notifications
                  </h3>
                  {[
                    { id: 'comments', label: 'Comments', description: 'Receive emails when someone comments on your posts' },
                    { id: 'mentions', label: 'Mentions', description: 'Receive emails when you are mentioned' },
                    { id: 'updates', label: 'Product Updates', description: 'Receive emails about product updates and features' },
                    { id: 'marketing', label: 'Marketing', description: 'Receive emails about promotions and surveys' },
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-start py-4 border-t border-gray-200">
                      <div className="flex items-center h-5">
                        <input
                          id={`notification-${notification.id}`}
                          name={`notification-${notification.id}`}
                          type="checkbox"
                          defaultChecked={notification.id !== 'marketing'}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor={`notification-${notification.id}`}
                          className="font-medium text-gray-700"
                        >
                          {notification.label}
                        </label>
                        <p className="text-gray-500">{notification.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    Push Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="push-enabled"
                        name="push-notifications"
                        type="radio"
                        defaultChecked
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="push-enabled" className="ml-3 block text-sm font-medium text-gray-700">
                        Enabled
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-disabled"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="push-disabled" className="ml-3 block text-sm font-medium text-gray-700">
                        Disabled
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button variant="primary">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          )}
          
          {/* Billing Settings */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <Card title="Subscription Plan" description="Manage your subscription plan">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Pro Plan</h3>
                      <p className="text-sm text-gray-500 mt-1">$99/month, billed monthly</p>
                    </div>
                    <Button variant="secondary">
                      Change Plan
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    Plan Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Unlimited projects',
                      'Unlimited users',
                      'Advanced analytics',
                      'Priority support',
                      'Custom branding',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
              
              <Card title="Payment Method" description="Manage your payment methods">
                <div className="mb-4">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2H4V4zm16 4v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8h16zM6 16c0-.55.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          Visa ending in 4242
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Expires 12/2024
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <Button variant="light" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="light" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="secondary">
                  Add Payment Method
                </Button>
              </Card>
              
              <Card title="Billing History" description="View your billing history">
                <div className="overflow-x-auto -mx-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { date: 'May 1, 2023', amount: '$99.00', status: 'Paid' },
                        { date: 'Apr 1, 2023', amount: '$99.00', status: 'Paid' },
                        { date: 'Mar 1, 2023', amount: '$99.00', status: 'Paid' },
                      ].map((invoice, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {invoice.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {invoice.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {invoice.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-primary-600 hover:text-primary-900">
                              Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings; 