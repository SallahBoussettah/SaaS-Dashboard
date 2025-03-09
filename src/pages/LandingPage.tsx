import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DashboardAnimation from '../assets/landing-page/DashboardAnimation';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

/**
 * Landing Page Component
 */
const LandingPage: React.FC = () => {
  // Animations for sections coming into view
  const controlsHero = useAnimation();
  const controlsFeatures = useAnimation();
  const controlsTestimonials = useAnimation();
  const controlsPricing = useAnimation();
  const controlsCTA = useAnimation();
  
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  useEffect(() => {
    if (heroInView) {
      controlsHero.start('visible');
    }
    if (featuresInView) {
      controlsFeatures.start('visible');
    }
    if (testimonialsInView) {
      controlsTestimonials.start('visible');
    }
    if (pricingInView) {
      controlsPricing.start('visible');
    }
    if (ctaInView) {
      controlsCTA.start('visible');
    }
  }, [
    controlsHero, heroInView,
    controlsFeatures, featuresInView,
    controlsTestimonials, testimonialsInView,
    controlsPricing, pricingInView,
    controlsCTA, ctaInView
  ]);
  
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const featureCardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2 * index,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <div className="landing-page bg-white">
      <PublicNavigation />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={controlsHero}
        variants={containerVariants}
        className="pt-32 pb-20 px-4 md:px-10 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Transform Your <span className="text-primary-600">Business Insights</span> With Powerful Analytics
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600"
              >
                Make smarter decisions with our enterprise-grade analytics platform. Visualize complex data, uncover hidden patterns, and drive growth with actionable insights—all in one intuitive dashboard.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3"
              >
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Real-time Analytics
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  AI-Powered Insights
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Customizable Dashboards
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Enterprise Security
                </span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link 
                  to="/register" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-md text-center hover:bg-primary-700 transition-colors group text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center">
                    Start Free 14-Day Trial
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </Link>
                <a 
                  href="#demo" 
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 rounded-md text-center hover:bg-gray-50 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Watch Product Demo
                </a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt={`User ${i}`} 
                    />
                  ))}
                  <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-primary-50 text-primary-700 text-xs font-bold">
                    +2K
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-medium">4.9/5 from 2,000+ reviews</span>
                  </div>
                  <p>Trusted by over 5,000 companies worldwide</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="w-full h-[500px] bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-50"></div>
                <div className="relative z-10 h-full rounded-xl overflow-hidden">
                  {/* Dashboard Animation */}
                  <DashboardAnimation className="w-full h-full" />
                </div>
                {/* Floating elements to add depth */}
                <div className="absolute top-10 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-40"></div>
                <div className="absolute -bottom-6 left-10 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-40"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-40 bg-primary-100 rounded-full blur-xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Brands Section */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 mb-10">Trusted by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['Google', 'Microsoft', 'Airbnb', 'Uber', 'Amazon', 'Spotify'].map((brand, index) => (
              <div key={index} className="flex justify-center items-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                <span className="text-xl font-bold text-gray-400">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        id="features" 
        ref={featuresRef} 
        className="py-28 px-4 md:px-10 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate={controlsFeatures}
            variants={containerVariants}
            className="text-center mb-24"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6">
              <span className="h-px w-8 bg-primary-600 mr-4"></span>
              <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">Powerful Platform</span>
              <span className="h-px w-8 bg-primary-600 ml-4"></span>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Everything you need to<br />supercharge your analytics
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Transform your data into actionable insights with powerful, intuitive tools
            </motion.p>
          </motion.div>
          
          {/* Main features in 2x2 layout */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: 'Real-time Analytics',
                  description: 'Monitor your business performance with real-time dashboards that update automatically. Spot trends as they happen and make data-driven decisions instantly.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  title: 'Advanced Reporting',
                  description: 'Create beautiful reports with drag-and-drop simplicity. Schedule automated exports and share insights with your team through customizable templates.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1015&auto=format&fit=crop"
                },
                {
                  title: 'Data Integration',
                  description: 'Connect to over 200+ data sources with pre-built connectors. Import data from any existing system with our powerful API and automated syncing.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  ),
                  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1034&auto=format&fit=crop"
                },
                {
                  title: 'AI-Powered Insights',
                  description: 'Leverage machine learning algorithms that automatically detect anomalies, predict trends, and suggest optimizations for your business processes.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1065&auto=format&fit=crop"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={controlsFeatures}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2 * index,
                        duration: 0.8,
                        ease: [0.215, 0.61, 0.355, 1]
                      }
                    }
                  }}
                  className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="relative z-20 p-10 md:p-12 h-full flex flex-col">
                    <div className="text-white bg-primary-600/20 p-3 rounded-lg backdrop-blur-sm mb-8 inline-flex items-center justify-center w-14 h-14 border border-primary-300/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-200 mb-8">{feature.description}</p>
                    <div className="mt-auto flex items-center">
                      <span className="text-white font-medium">Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-primary-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Secondary features in a cleaner layout */}
          <motion.div
            initial="hidden"
            animate={controlsFeatures}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Custom Dashboards',
                description: 'Build personalized views tailored to your specific needs',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                title: 'Data Visualization',
                description: 'Present complex data through intuitive visual interfaces',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                )
              },
              {
                title: 'User Management',
                description: 'Control access with role-based user permissions',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Enterprise Security',
                description: 'Meet compliance requirements with end-to-end encryption',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'API Access',
                description: 'Integrate with your existing tools through our API',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                title: 'Mobile Access',
                description: 'Access your dashboard from any device, anywhere',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="mr-4 text-primary-600 bg-white p-3 rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom CTA section */}
          <motion.div
            initial="hidden"
            animate={controlsFeatures}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 1.2,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1]
                }
              }
            }}
            className="mt-24 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to transform your data experience?</h3>
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span>Start your free trial</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section id="demo" className="py-28 px-4 md:px-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="h-px w-8 bg-primary-600 mr-4"></span>
              <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">Interactive Demo</span>
              <span className="h-px w-8 bg-primary-600 ml-4"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Experience the power <br />of analytics firsthand
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Our interactive dashboard showcases how easy it is to transform complex data into clear, actionable insights in real-time.
            </p>

            {/* Feature points in horizontal layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                {
                  title: "Intuitive Interface",
                  description: "Navigate through data with our user-friendly interface designed for both technical and non-technical users."
                },
                {
                  title: "Real-time Updates",
                  description: "Watch as your dashboard updates in real-time, reflecting changes as they happen across your business."
                },
                {
                  title: "Customization Options",
                  description: "See how easy it is to personalize your dashboard to focus on the metrics that matter most to you."
                }
              ].map((point, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
            
            {/* Video Container */}
            <div className="max-w-4xl mx-auto relative mb-16">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-900 to-indigo-900 relative group">
                {/* Video thumbnail or placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dashboard Demo" 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
                />
                
                {/* Play button with hover effect */}
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:bg-white/30 transition-colors">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-inner group-hover:bg-primary-500 transition-colors transform group-hover:scale-110 duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Time indicator */}
                <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
                  2:45
                </div>
              </div>
              
              {/* Floating indicators, repositioned to fit centered layout */}
              <div className="absolute -top-6 right-10 bg-white rounded-xl p-3 shadow-lg flex items-center space-x-2 text-sm">
                <div className="bg-green-500 text-white p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">23% Growth</span>
              </div>
              
              <div className="absolute -bottom-6 left-10 bg-white rounded-xl p-3 shadow-lg flex items-center space-x-2 text-sm">
                <div className="bg-primary-500 text-white p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Real-time Analytics</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Full Demo
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Live Demo
              </button>
            </div>
          </div>
          
          {/* Logos bar */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by innovative companies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {['Adobe', 'Shopify', 'Slack', 'Spotify'].map((brand, index) => (
                <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <span className="text-xl font-bold text-gray-400">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={testimonialsRef}
        className="py-20 px-4 md:px-10 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate={controlsTestimonials}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              What our clients say
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Thousands of businesses trust our platform for their analytics needs.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "This dashboard has completely transformed how we analyze our business data. The insights are invaluable.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                avatar: "https://i.pravatar.cc/150?img=1"
              },
              {
                quote: "The ease of use combined with powerful analytics capabilities makes this the perfect solution for our team.",
                author: "Michael Chen",
                role: "CTO, GrowthLabs",
                avatar: "https://i.pravatar.cc/150?img=8"
              },
              {
                quote: "We've seen a 40% increase in efficiency since implementing this dashboard. The ROI is incredible.",
                author: "Jessica Williams",
                role: "Operations Director, Scale Co.",
                avatar: "https://i.pravatar.cc/150?img=5"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controlsTestimonials}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex-1">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section 
        id="pricing" 
        ref={pricingRef}
        className="py-20 px-4 md:px-10 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate={controlsPricing}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Choose the plan that works best for your business. All plans include a 14-day free trial.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                features: [
                  "Up to 5 users",
                  "Basic analytics",
                  "7-day data history",
                  "5 custom dashboards",
                  "Email support"
                ],
                cta: "Start Free Trial",
                popular: false
              },
              {
                name: "Professional",
                price: "$79",
                features: [
                  "Up to 20 users",
                  "Advanced analytics",
                  "30-day data history",
                  "Unlimited dashboards",
                  "Priority support",
                  "API access",
                  "Custom integrations"
                ],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "$199",
                features: [
                  "Unlimited users",
                  "Enterprise analytics",
                  "1-year data history",
                  "Unlimited dashboards",
                  "24/7 dedicated support",
                  "Advanced security",
                  "Custom deployment",
                  "Dedicated account manager"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controlsPricing}
                variants={itemVariants}
                className={`bg-white rounded-xl ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl scale-105' : 'border border-gray-200 shadow-md'} overflow-hidden`}
              >
                {plan.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/register" 
                    className={`w-full py-3 rounded-md text-center block ${
                      plan.popular 
                        ? 'bg-primary-600 text-white hover:bg-primary-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about our platform
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How does the 14-day free trial work?",
                answer: "You can sign up for our 14-day free trial without entering any payment information. At the end of the trial, you can choose to subscribe to one of our plans or your account will automatically be downgraded to the free tier."
              },
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, the new features will be immediately available. If you downgrade, you'll maintain your current features until the end of your billing cycle."
              },
              {
                question: "Is there a limit to how much data I can analyze?",
                answer: "Different plans have different data limits. The Starter plan includes up to 100,000 events per month, Professional includes up to 1 million, and Enterprise offers custom limits based on your needs."
              },
              {
                question: "How secure is my data?",
                answer: "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices, and our infrastructure is hosted on secure cloud providers with SOC 2 and ISO 27001 certifications."
              },
              {
                question: "Do you offer discounts for nonprofits or educational institutions?",
                answer: "Yes, we offer special pricing for nonprofits, educational institutions, and startups. Please contact our sales team for more information."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={controlsCTA}
        variants={containerVariants}
        className="py-20 px-4 md:px-10 bg-gradient-to-r from-primary-600 to-indigo-600 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to transform your business?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Join thousands of companies using our platform to improve their analytics and make better decisions.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/register" 
              className="px-8 py-4 bg-white text-primary-700 rounded-md text-center hover:bg-gray-100 transition-colors"
            >
              Get Started for Free
            </Link>
            <a 
              href="#demo" 
              className="px-8 py-4 border border-white/30 text-white rounded-md text-center hover:bg-white/10 transition-colors"
            >
              Schedule a Demo
            </a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <PublicFooter />
    </div>
  );
};

export default LandingPage; 