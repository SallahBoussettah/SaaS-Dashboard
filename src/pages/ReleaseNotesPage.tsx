import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

// Mock release notes data
const releaseNotes = [
  {
    version: "4.2.0",
    date: "August 15, 2023",
    type: "Major Release",
    description: "This release introduces AI-powered insights and several performance improvements.",
    highlights: [
      "Added AI-powered anomaly detection",
      "Improved dashboard loading speed by 40%",
      "New data visualization options",
      "Enhanced user permissions system"
    ],
    details: {
      "New Features": [
        "AI-powered anomaly detection automatically identifies unusual patterns in your data",
        "Advanced forecasting with multiple prediction models",
        "Custom alert thresholds for metrics",
        "Dashboard sharing with external stakeholders (limited access)"
      ],
      "Improvements": [
        "40% faster dashboard loading through optimized caching",
        "Redesigned visualization library with 12 new chart types",
        "Enhanced filter UI for better usability",
        "Improved mobile responsiveness for dashboards"
      ],
      "Bug Fixes": [
        "Fixed issue with date range filters in quarterly reports",
        "Resolved data refresh problem in real-time dashboards",
        "Fixed export functionality for large datasets",
        "Addressed inconsistent display of currency values"
      ]
    }
  },
  {
    version: "4.1.2",
    date: "July 3, 2023",
    type: "Maintenance Release",
    description: "This release focuses on bug fixes and security improvements.",
    highlights: [
      "Security enhancements",
      "Multiple bug fixes",
      "Updated third-party dependencies",
      "Improved error handling"
    ],
    details: {
      "Security": [
        "Enhanced password policies and account security",
        "Updated encryption standards for data at rest",
        "Improved CSRF protection",
        "Added detailed security audit logs"
      ],
      "Bug Fixes": [
        "Fixed data connection issue with MySQL databases",
        "Resolved intermittent login failures",
        "Fixed dashboard filter persistence",
        "Corrected timezone handling for scheduled reports"
      ],
      "Other Changes": [
        "Updated third-party libraries to latest versions",
        "Improved error messages for better troubleshooting",
        "Enhanced logging for background processes",
        "Optimized database queries for large datasets"
      ]
    }
  },
  {
    version: "4.1.0",
    date: "May 18, 2023",
    type: "Feature Release",
    description: "This release adds several new integrations and enhances existing features.",
    highlights: [
      "5 new data source integrations",
      "Enhanced custom formulas",
      "Improved dashboard sharing options",
      "New template gallery"
    ],
    details: {
      "New Integrations": [
        "Shopify connector for e-commerce analytics",
        "HubSpot integration for marketing data",
        "Zendesk connector for support metrics",
        "GitHub integration for development insights",
        "Stripe connector for payment analytics"
      ],
      "Feature Enhancements": [
        "Custom formula builder with advanced functions",
        "Expanded dashboard sharing with granular permissions",
        "Dashboard template gallery with 20+ pre-built templates",
        "Improved data transformation capabilities"
      ],
      "Bug Fixes": [
        "Fixed issues with CSV imports containing special characters",
        "Resolved dashboard loading issues on Safari browsers",
        "Fixed search functionality in the data explorer",
        "Addressed notification delivery delays"
      ]
    }
  },
  {
    version: "4.0.0",
    date: "March 22, 2023",
    type: "Major Release",
    description: "A complete platform overhaul with a new UI, improved performance, and new features.",
    highlights: [
      "Complete UI redesign",
      "New data processing engine",
      "Enhanced security features",
      "Expanded API capabilities"
    ],
    details: {
      "New Platform": [
        "Completely redesigned user interface for better usability",
        "New data processing engine with 5x better performance",
        "Enhanced security with role-based access control",
        "Expanded API with 30+ new endpoints"
      ],
      "Key Features": [
        "Real-time dashboard updating",
        "Advanced data modeling capabilities",
        "Multi-factor authentication",
        "White-labeling options for agencies and enterprises"
      ],
      "Improvements": [
        "Modern, responsive design that works on all devices",
        "Streamlined workflow for creating dashboards and reports",
        "Improved onboarding experience for new users",
        "Better integration with existing business tools"
      ]
    }
  }
];

const ReleaseNotesPage: React.FC = () => {
  const [expandedVersion, setExpandedVersion] = useState<string | null>("4.2.0");
  const [filterType, setFilterType] = useState<string | null>(null);
  
  // Toggle expanded version
  const toggleVersion = (version: string) => {
    setExpandedVersion(expandedVersion === version ? null : version);
  };
  
  // Filter releases by type
  const filteredReleases = filterType 
    ? releaseNotes.filter(release => release.type === filterType)
    : releaseNotes;
  
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-primary-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Release Notes</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest improvements, new features, and bug fixes for SaaS Dashboard.
            </p>
          </div>
        </div>
      </section>
      
      {/* Release Notes Content */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilterType(null)}
              className={`px-4 py-2 rounded-full ${
                filterType === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              All Releases
            </button>
            <button
              onClick={() => setFilterType('Major Release')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'Major Release'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Major Releases
            </button>
            <button
              onClick={() => setFilterType('Feature Release')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'Feature Release'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Feature Releases
            </button>
            <button
              onClick={() => setFilterType('Maintenance Release')}
              className={`px-4 py-2 rounded-full ${
                filterType === 'Maintenance Release'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Maintenance Releases
            </button>
          </div>
          
          {/* Releases Timeline */}
          <div className="space-y-8">
            {filteredReleases.map((release) => (
              <div key={release.version} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {/* Release Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleVersion(release.version)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-900">Version {release.version}</h2>
                        <div className="flex items-center mt-1">
                          <span className="text-gray-500 mr-4">{release.date}</span>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                            release.type === 'Major Release' 
                              ? 'bg-purple-100 text-purple-800' 
                              : release.type === 'Feature Release'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {release.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 text-gray-400 transform transition-transform ${expandedVersion === release.version ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{release.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {release.highlights.map((highlight, index) => (
                      <span key={index} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Release Details */}
                {expandedVersion === release.version && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    {Object.entries(release.details).map(([category, items]) => (
                      <div key={category} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
                        <ul className="space-y-2">
                          {items.map((item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {/* Documentation Links */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Resources</h3>
                      <div className="flex flex-wrap gap-4">
                        <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Documentation
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Tutorial Video
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Migration Guide
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Older Releases */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Looking for older releases?</h3>
            <p className="text-gray-600 mb-6">
              We maintain an archive of all previous releases for reference.
            </p>
            <a href="#" className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              View Release Archive
            </a>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:p-12 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to receive updates about new features, bug fixes, and improvements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex-grow"
                  />
                  <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <div className="hidden md:block md:w-1/3 bg-gray-800">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-lg font-medium mb-2">Product Roadmap</h3>
                    <p className="text-gray-300 text-sm">
                      Check out what features we're working on next
                    </p>
                    <a href="#" className="mt-4 inline-block text-sm text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                      View Roadmap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PublicFooter />
    </div>
  );
};

export default ReleaseNotesPage; 