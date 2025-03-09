import React from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

// Mock press release data
const pressReleases = [
  {
    id: 1,
    title: "SaaS Dashboard Raises $15M in Series A Funding",
    date: "July 12, 2023",
    excerpt: "Funding will accelerate product development and international expansion for the growing analytics platform.",
    image: "https://images.unsplash.com/photo-1579170053380-58064b2dee67?auto=format&fit=crop&w=800",
    category: "Funding"
  },
  {
    id: 2,
    title: "SaaS Dashboard Announces Strategic Partnership with Salesforce",
    date: "June 5, 2023",
    excerpt: "New integration brings enhanced analytics capabilities to Salesforce users worldwide.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800",
    category: "Partnership"
  },
  {
    id: 3,
    title: "SaaS Dashboard Launches New AI-Powered Analytics Features",
    date: "May 18, 2023",
    excerpt: "Revolutionary machine learning algorithms help businesses uncover deeper insights from their data.",
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800",
    category: "Product"
  }
];

// Mock media coverage data
const mediaCoverage = [
  {
    id: 1,
    title: "How SaaS Dashboard is Revolutionizing Business Intelligence",
    publication: "TechCrunch",
    date: "June 28, 2023",
    excerpt: "The fast-growing analytics platform is changing how businesses approach data visualization and decision-making.",
    image: "https://via.placeholder.com/150x50/2c3e50/ffffff?text=TechCrunch",
    link: "#"
  },
  {
    id: 2,
    title: "SaaS Dashboard Named in Top 10 Analytics Startups to Watch",
    publication: "Forbes",
    date: "May 30, 2023",
    excerpt: "The innovative data platform joins elite company in annual ranking of promising tech startups.",
    image: "https://via.placeholder.com/150x50/2c3e50/ffffff?text=Forbes",
    link: "#"
  },
  {
    id: 3,
    title: "Interview: SaaS Dashboard CEO on the Future of Data Analytics",
    publication: "Wired",
    date: "April 15, 2023",
    excerpt: "Sarah Johnson discusses how AI and machine learning are transforming the business intelligence landscape.",
    image: "https://via.placeholder.com/150x50/2c3e50/ffffff?text=Wired",
    link: "#"
  },
  {
    id: 4,
    title: "SaaS Dashboard's Platform Simplifies Complex Data for Non-Technical Users",
    publication: "Business Insider",
    date: "March 22, 2023",
    excerpt: "How the growing startup is making data analytics accessible to everyone in an organization.",
    image: "https://via.placeholder.com/150x50/2c3e50/ffffff?text=Business+Insider",
    link: "#"
  }
];

const PressPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-gray-900 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Latest news, press releases, and media coverage about SaaS Dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#press-releases" 
                className="px-6 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Press Releases
              </Link>
              <Link 
                to="#media-coverage" 
                className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-primary-800 transition-colors"
              >
                Media Coverage
              </Link>
              <Link 
                to="#media-kit" 
                className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-primary-800 transition-colors"
              >
                Media Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Press Releases Section */}
      <section id="press-releases" className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Releases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official announcements from SaaS Dashboard.
            </p>
          </div>
          
          <div className="space-y-12">
            {pressReleases.map((release) => (
              <div key={release.id} className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-12">
                <div className="md:col-span-1">
                  <img 
                    src={release.image} 
                    alt={release.title} 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {release.category}
                    </span>
                    <span className="text-gray-500">
                      {release.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    <Link to={`/press/${release.id}`} className="hover:text-primary-600 transition-colors">
                      {release.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6">{release.excerpt}</p>
                  <Link 
                    to={`/press/${release.id}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Read Full Release
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/press/all" 
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors inline-block"
            >
              View All Press Releases
            </Link>
          </div>
        </div>
      </section>
      
      {/* Media Coverage Section */}
      <section id="media-coverage" className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SaaS Dashboard in the news.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mediaCoverage.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={article.image} 
                      alt={article.publication} 
                      className="h-8 mr-3"
                    />
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <a href={article.link} className="hover:text-primary-600 transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a 
                    href={article.link} 
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Media Kit Section */}
      <section id="media-kit" className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Kit</h2>
              <p className="text-gray-600 mb-6">
                Need assets for a story? Our media kit includes company logos, product screenshots, 
                executive headshots, and brand guidelines. Please use these resources in accordance 
                with our brand guidelines.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Company Logos",
                    description: "Download our logo in various formats (PNG, SVG, PDF)",
                    icon: "document-download"
                  },
                  {
                    title: "Product Screenshots",
                    description: "High-resolution images of our dashboard and features",
                    icon: "photograph"
                  },
                  {
                    title: "Executive Headshots",
                    description: "Professional photos of our leadership team",
                    icon: "user-circle"
                  },
                  {
                    title: "Brand Guidelines",
                    description: "Color palette, typography, and usage instructions",
                    icon: "color-swatch"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                        Download
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/200x80/2c3e50/ffffff?text=SaaS+Dashboard"
                  alt="SaaS Dashboard Logo" 
                  className="max-w-full h-auto"
                />
              </div>
              <div className="bg-primary-100 rounded-lg p-4 flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/200x80/1a365d/ffffff?text=SaaS+Dashboard"
                  alt="SaaS Dashboard Logo Dark" 
                  className="max-w-full h-auto"
                />
              </div>
              <div className="col-span-2 bg-white border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800"
                  alt="Dashboard Screenshot" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-4 md:px-10 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Contact</h2>
              <p className="text-gray-600 mb-8">
                For press inquiries, interview requests, or additional information, please contact our PR team.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Contact</h3>
                  <p className="text-gray-600 mb-1">Jessica Taylor, PR Manager</p>
                  <p className="text-gray-600 mb-1">press@saasdashboard.com</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyst Relations</h3>
                  <p className="text-gray-600 mb-1">Marcus Wong, Analyst Relations</p>
                  <p className="text-gray-600 mb-1">analysts@saasdashboard.com</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
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

export default PressPage; 