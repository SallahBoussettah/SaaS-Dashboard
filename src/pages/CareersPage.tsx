import React from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

const CareersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-primary-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us build the future of data analytics. We're looking for passionate individuals to join our mission.
            </p>
            <Link 
              to="#open-positions" 
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100 opacity-50 transform -skew-x-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-100 opacity-50 transform skew-x-12 z-0"></div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join SaaS Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building something special, and we want you to be part of it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Impactful Work",
                description: "Your work will directly help thousands of businesses make better data-driven decisions every day."
              },
              {
                title: "Growth & Learning",
                description: "We invest in your development with continuous learning opportunities, conferences, and mentorship."
              },
              {
                title: "Work-Life Balance",
                description: "Flexible hours, remote-friendly policies, and generous vacation time to keep you at your best."
              },
              {
                title: "Competitive Compensation",
                description: "Attractive salary packages, equity options, and comprehensive health and retirement benefits."
              },
              {
                title: "Inclusive Culture",
                description: "We celebrate diversity and create an environment where everyone can thrive and belong."
              },
              {
                title: "Innovation Focus",
                description: "Freedom to experiment, contribute ideas, and shape the future of our products and company."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Culture Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-4">
                At SaaS Dashboard, we believe that great products come from great teams. We've built a culture 
                that values collaboration, transparency, and continuous improvement.
              </p>
              <p className="text-gray-600 mb-4">
                We're a diverse group of problem-solvers who are passionate about using technology to make 
                complex data accessible and actionable for businesses of all sizes.
              </p>
              <p className="text-gray-600">
                Whether we're brainstorming new features, solving challenging technical problems, or celebrating 
                our wins, we do it as a team that supports and respects each other.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=600" 
                alt="Team collaboration" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600" 
                alt="Office space" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=600" 
                alt="Team meeting" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600" 
                alt="Whiteboard session" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help shape the future of data analytics.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "Senior Frontend Developer",
                location: "Remote (US/Europe)",
                department: "Engineering",
                type: "Full-time"
              },
              {
                title: "Data Scientist",
                location: "New York, NY",
                department: "Product",
                type: "Full-time"
              },
              {
                title: "UX/UI Designer",
                location: "Remote",
                department: "Design",
                type: "Full-time"
              },
              {
                title: "Customer Success Manager",
                location: "San Francisco, CA",
                department: "Customer Success",
                type: "Full-time"
              },
              {
                title: "Marketing Specialist",
                location: "Remote",
                department: "Marketing",
                type: "Full-time"
              }
            ].map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.location}</p>
                  </div>
                  <div className="flex mt-4 md:mt-0 space-x-4">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link 
                    to={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
            <Link 
              to="/contact" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Send us your resume for future opportunities
            </Link>
          </div>
        </div>
      </section>
      
      {/* Application Process Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect when you apply to join our team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              {/* Timeline items */}
              {[
                {
                  title: "Application Review",
                  description: "Our recruiting team reviews your application and resume."
                },
                {
                  title: "Initial Interview",
                  description: "A conversation with our recruiting team to learn more about you and your experience."
                },
                {
                  title: "Technical Assessment",
                  description: "Depending on the role, you may complete a skills assessment or case study."
                },
                {
                  title: "Team Interviews",
                  description: "Meet with your potential team members and managers."
                },
                {
                  title: "Final Decision",
                  description: "We'll make a decision and extend an offer if there's a good match."
                }
              ].map((step, index) => (
                <div key={index} className="relative mb-12">
                  <div className="md:flex items-center">
                    {/* Left side for even items, right side for odd items on desktop */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-1 md:order-none'}`}>
                      <div className={`bg-white p-6 rounded-lg shadow ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-white"></div>
                    
                    {/* Empty div for spacing on desktop */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our team and help build the future of data analytics.
          </p>
          <Link 
            to="#open-positions" 
            className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            View Open Positions
          </Link>
        </div>
      </section>
      
      <PublicFooter />
    </div>
  );
};

export default CareersPage; 