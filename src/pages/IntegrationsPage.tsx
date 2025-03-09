import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

// Mock integration data
const integrations = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: '🌩️',
    category: 'CRM',
    description: 'Connect your Salesforce data to create comprehensive dashboards combining CRM and other business metrics.',
    features: [
      'Automatic data syncing every hour',
      'Custom field mapping',
      'Historical data import',
      'Real-time activity monitoring'
    ]
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: '💬',
    category: 'Communication',
    description: 'Send automated reports and alerts directly to your team\'s Slack channels.',
    features: [
      'Scheduled report delivery',
      'Custom alert notifications',
      'Interactive dashboard sharing',
      'Command-based data queries'
    ]
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: '💳',
    category: 'Payment',
    description: 'Visualize your payment and subscription data alongside your other business metrics.',
    features: [
      'Revenue dashboards',
      'Subscription analytics',
      'Payment failure monitoring',
      'Customer lifetime value tracking'
    ]
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    icon: '📊',
    category: 'Analytics',
    description: 'Combine website analytics with your business data for a complete picture of your online performance.',
    features: [
      'Traffic analysis',
      'Conversion tracking',
      'Campaign performance',
      'User behavior insights'
    ]
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: '🔄',
    category: 'Marketing',
    description: 'Connect your HubSpot marketing data to track campaign performance and lead generation.',
    features: [
      'Marketing campaign tracking',
      'Lead funnel visualization',
      'Email performance metrics',
      'Contact growth analytics'
    ]
  },
  {
    id: 'shopify',
    name: 'Shopify',
    icon: '🛒',
    category: 'E-commerce',
    description: 'Track your store\'s performance with detailed sales, inventory, and customer analytics.',
    features: [
      'Sales dashboard',
      'Inventory management',
      'Customer behavior analysis',
      'Product performance tracking'
    ]
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '🐙',
    category: 'Development',
    description: 'Track your development metrics alongside your business KPIs.',
    features: [
      'Pull request analytics',
      'Issue tracking metrics',
      'Code velocity dashboard',
      'Team productivity insights'
    ]
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    icon: '🎧',
    category: 'Support',
    description: 'Monitor your customer support performance and integrate it with other business data.',
    features: [
      'Ticket volume tracking',
      'Response time analytics',
      'Customer satisfaction metrics',
      'Agent performance dashboard'
    ]
  }
];

// Group integrations by category
const groupedIntegrations = integrations.reduce((acc, integration) => {
  if (!acc[integration.category]) {
    acc[integration.category] = [];
  }
  acc[integration.category].push(integration);
  return acc;
}, {} as Record<string, typeof integrations>);

const IntegrationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Filter integrations based on selected category
  const filteredIntegrations = activeCategory === 'All' 
    ? groupedIntegrations 
    : { [activeCategory]: groupedIntegrations[activeCategory] || [] };
  
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Connect Your Favorite Tools</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SaaS Dashboard integrates with the tools you already use. Bring all your data together for a complete picture of your business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Integration Search & Overview */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for an integration..."
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-12"
              />
              <div className="absolute right-4 top-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {['All', 'CRM', 'Analytics', 'Marketing', 'E-commerce'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Integration Categories */}
          {Object.entries(filteredIntegrations).map(([category, categoryIntegrations]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category} Integrations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryIntegrations.map((integration) => (
                  <div key={integration.id} className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow p-6">
                    <div className="flex items-start mb-4">
                      <div className="text-4xl mr-4">{integration.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{integration.name}</h3>
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {integration.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{integration.description}</p>
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="mb-4 space-y-1">
                      {integration.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
                      View Integration
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Integration Process */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Integration Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting your tools to SaaS Dashboard is simple and secure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Connect",
                description: "Choose from our library of integrations and authorize the connection with a few clicks.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                  </svg>
                )
              },
              {
                title: "Configure",
                description: "Set up data syncing options, field mappings, and customize how your data is processed.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Visualize",
                description: "Create beautiful dashboards that combine data from multiple sources in one place.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-24 h-24 rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom integration?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't see the tool you need? Our team can build custom integrations to connect with any system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="https://developers.saasdashboard.com" 
              className="px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              API Documentation
            </a>
          </div>
        </div>
      </section>
      
      <PublicFooter />
    </div>
  );
};

export default IntegrationsPage; 