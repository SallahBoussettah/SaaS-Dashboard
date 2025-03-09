import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

// Documentation categories and topics
const documentationData = {
  "Getting Started": [
    { 
      id: "introduction", 
      title: "Introduction to SaaS Dashboard",
      description: "Learn about the core features and capabilities of SaaS Dashboard."
    },
    { 
      id: "installation", 
      title: "Installation & Setup",
      description: "Step-by-step guide to setting up your SaaS Dashboard instance."
    },
    { 
      id: "quickstart", 
      title: "Quickstart Guide",
      description: "Get up and running with SaaS Dashboard in under 10 minutes."
    },
    { 
      id: "dashboard-overview", 
      title: "Dashboard Overview",
      description: "Understand the different components of the SaaS Dashboard interface."
    }
  ],
  "Data Management": [
    { 
      id: "data-sources", 
      title: "Connecting Data Sources",
      description: "Learn how to connect your existing data sources to SaaS Dashboard."
    },
    { 
      id: "data-models", 
      title: "Data Models",
      description: "Create and manage data models for your analytics."
    },
    { 
      id: "queries", 
      title: "Writing Queries",
      description: "Build powerful queries to extract insights from your data."
    },
    { 
      id: "transformations", 
      title: "Data Transformations",
      description: "Transform your raw data into a format suitable for analysis."
    }
  ],
  "Visualization": [
    { 
      id: "charts", 
      title: "Charts & Graphs",
      description: "Create various types of visualizations for your data."
    },
    { 
      id: "dashboards", 
      title: "Building Dashboards",
      description: "Combine multiple visualizations into comprehensive dashboards."
    },
    { 
      id: "theming", 
      title: "Customizing Themes",
      description: "Apply custom themes to match your brand identity."
    },
    { 
      id: "interactivity", 
      title: "Adding Interactivity",
      description: "Make your dashboards interactive with filters and drill-downs."
    }
  ],
  "Administration": [
    { 
      id: "user-management", 
      title: "User Management",
      description: "Add and manage users, roles, and permissions."
    },
    { 
      id: "security", 
      title: "Security Settings",
      description: "Configure security settings to protect your data."
    },
    { 
      id: "backups", 
      title: "Backups & Recovery",
      description: "Set up automated backups and learn recovery procedures."
    },
    { 
      id: "audit-logs", 
      title: "Audit Logs",
      description: "Track user activities and changes to your instance."
    }
  ],
  "Integrations": [
    { 
      id: "api-overview", 
      title: "API Overview",
      description: "Introduction to the SaaS Dashboard API."
    },
    { 
      id: "third-party", 
      title: "Third-party Integrations",
      description: "Connect with popular tools and services."
    },
    { 
      id: "webhooks", 
      title: "Webhooks",
      description: "Set up webhooks to automate workflows."
    },
    { 
      id: "custom-scripts", 
      title: "Custom Scripts",
      description: "Extend functionality with custom scripts and plugins."
    }
  ],
  "Troubleshooting": [
    { 
      id: "common-issues", 
      title: "Common Issues",
      description: "Solutions to frequently encountered problems."
    },
    { 
      id: "performance", 
      title: "Performance Optimization",
      description: "Tips for improving dashboard performance."
    },
    { 
      id: "error-messages", 
      title: "Error Messages",
      description: "Detailed explanations of error messages and how to resolve them."
    },
    { 
      id: "support", 
      title: "Getting Support",
      description: "How to contact support and get help with issues."
    }
  ]
};

const DocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Getting Started');
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Filter documentation topics based on search query
  const filteredTopics = Object.entries(documentationData).reduce((acc, [category, topics]) => {
    const filtered = topics.filter(topic => 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    
    return acc;
  }, {} as Record<string, typeof documentationData[keyof typeof documentationData]>);
  
  // Display all categories if no search query, otherwise show filtered results
  const displayData = searchQuery ? filteredTopics : documentationData;
  
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to know about using SaaS Dashboard effectively.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-12"
                />
                <div className="absolute right-4 top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Content */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h2>
                <nav className="space-y-1">
                  {Object.keys(documentationData).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeCategory === category
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Need Help?</h3>
                  <div className="space-y-3">
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Community Forum
                    </a>
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Contact Support
                    </a>
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* If search query exists, show search results */}
              {searchQuery ? (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Results for "{searchQuery}"</h2>
                  
                  {Object.keys(displayData).length === 0 ? (
                    <div className="bg-gray-50 rounded-xl p-8 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                      <p className="text-gray-600">
                        Try adjusting your search query or browse the documentation categories.
                      </p>
                    </div>
                  ) : (
                    Object.entries(displayData).map(([category, topics]) => (
                      <div key={category} className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {topics.map((topic) => (
                            <a
                              key={topic.id}
                              href={`#${topic.id}`}
                              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h4>
                              <p className="text-gray-600">{topic.description}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                // Show active category content
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{activeCategory}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {documentationData[activeCategory as keyof typeof documentationData].map((topic) => (
                      <a
                        key={topic.id}
                        href={`#${topic.id}`}
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                        <p className="text-gray-600">{topic.description}</p>
                      </a>
                    ))}
                  </div>
                  
                  {/* Sample Documentation Article */}
                  {activeCategory === 'Getting Started' && (
                    <div className="mt-12 pt-12 border-t border-gray-200">
                      <article className="prose prose-indigo max-w-none">
                        <h2 id="introduction">Introduction to SaaS Dashboard</h2>
                        <p>
                          SaaS Dashboard is a comprehensive analytics platform designed to help businesses of all sizes make data-driven decisions. Our platform combines powerful data processing capabilities with intuitive visualization tools to transform complex data into actionable insights.
                        </p>
                        
                        <h3>Core Features</h3>
                        <ul>
                          <li><strong>Real-time Analytics:</strong> Monitor your key metrics in real-time to stay up-to-date on your business performance.</li>
                          <li><strong>Custom Dashboards:</strong> Create personalized dashboards tailored to your specific business needs.</li>
                          <li><strong>Data Integration:</strong> Connect to over 100+ data sources to bring all your data together in one place.</li>
                          <li><strong>Collaboration:</strong> Share insights with your team and collaborate on dashboards and reports.</li>
                          <li><strong>Advanced Security:</strong> Enterprise-grade security features to protect your sensitive data.</li>
                        </ul>
                        
                        <h3>Use Cases</h3>
                        <p>
                          SaaS Dashboard is used by companies across various industries for different purposes:
                        </p>
                        <ul>
                          <li><strong>Marketing Teams:</strong> Track campaign performance, ROI, and customer acquisition costs.</li>
                          <li><strong>Sales Teams:</strong> Monitor sales pipeline, conversion rates, and revenue forecasts.</li>
                          <li><strong>Product Teams:</strong> Analyze user engagement, feature usage, and customer feedback.</li>
                          <li><strong>Executive Teams:</strong> Get a high-level overview of business performance and KPIs.</li>
                        </ul>
                        
                        <h3>Next Steps</h3>
                        <p>
                          Ready to get started with SaaS Dashboard? Check out the following resources:
                        </p>
                        <ul>
                          <li><a href="#installation" className="text-primary-600 hover:text-primary-700">Installation & Setup</a></li>
                          <li><a href="#quickstart" className="text-primary-600 hover:text-primary-700">Quickstart Guide</a></li>
                          <li><a href="#dashboard-overview" className="text-primary-600 hover:text-primary-700">Dashboard Overview</a></li>
                        </ul>
                      </article>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our support team is here to help you with any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Contact Support
            </Link>
            <a 
              href="#" 
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Join Community Forum
            </a>
          </div>
        </div>
      </section>
      
      <PublicFooter />
    </div>
  );
};

export default DocumentationPage; 