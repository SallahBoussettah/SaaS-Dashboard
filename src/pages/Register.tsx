import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

/**
 * Register page component
 */
const Register: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-secondary-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10">
            <div className="flex justify-center">
              <span className="text-3xl font-bold text-primary-600">SaaS Dashboard</span>
            </div>
          </div>
          
          <RegisterForm />
        </div>
      </div>
      
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-700 to-primary-900">
          <div className="flex h-full items-center justify-center p-10">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-bold mb-6">Start your journey with us</h2>
              <p className="text-xl mb-8">
                Join thousands of companies using our platform to improve their business intelligence and analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 mr-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <p className="text-lg">Create your free account</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 mr-3">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <p className="text-lg">Connect your data sources</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 mr-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <p className="text-lg">Get insights in minutes</p>
                </div>
              </div>
              <div className="mt-10 p-4 bg-white/10 rounded-lg">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 mr-2 text-white flex-shrink-0 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6.8 3.11 2.19 4.024 1.38.913 3.1 1.166 4.31.63l1.44-.64a6.75 6.75 0 00-1.36-1.352l-.8-.4a7.5 7.5 0 00-1.17-.58c-.58-.19-1.17-.28-1.76-.28-2.03 0-3.75 1.47-3.75 3.22 0 .1 0 .19.01.3z"
                    />
                  </svg>
                  <div>
                    <p className="text-lg font-medium">Free 30-day trial</p>
                    <p className="text-sm mt-1">
                      No credit card required. Cancel anytime. All features included during trial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 