import React from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SaaS Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make data analytics accessible to businesses of all sizes. 
              Learn about our journey, our team, and our vision for the future.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, SaaS Dashboard began with a simple idea: data analytics shouldn't be complicated.
                Our founders, experienced data scientists and software engineers, saw firsthand how businesses 
                struggled to make sense of their data.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small project to help local businesses has grown into a comprehensive analytics 
                platform used by thousands of companies worldwide. Our journey has been defined by constant innovation 
                and a relentless focus on user experience.
              </p>
              <p className="text-gray-600">
                Today, we're proud to offer an intuitive dashboard that transforms complex data into actionable 
                insights, empowering businesses to make better decisions faster.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at SaaS Dashboard.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity",
                description: "We believe powerful tools shouldn't be complicated. We strive to make complex data simple and accessible."
              },
              {
                title: "Innovation",
                description: "We continuously explore new technologies and approaches to solve data challenges more effectively."
              },
              {
                title: "Customer Success",
                description: "Our success is measured by our customers' success. We're committed to helping them achieve their goals."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals guiding SaaS Dashboard's vision and growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                bio: "Former data scientist with 15+ years experience in analytics and machine learning.",
                image: "https://i.pravatar.cc/300?img=1"
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-Founder",
                bio: "Software engineer with a background in building scalable data infrastructure.",
                image: "https://i.pravatar.cc/300?img=3"
              },
              {
                name: "Aisha Patel",
                role: "Chief Product Officer",
                bio: "UX specialist focused on creating intuitive interfaces for complex data visualization.",
                image: "https://i.pravatar.cc/300?img=5"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-10 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join our journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the SaaS Dashboard difference today and transform how your business handles data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      <PublicFooter />
    </div>
  );
};

export default AboutPage; 