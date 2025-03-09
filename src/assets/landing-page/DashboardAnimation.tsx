import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface DashboardAnimationProps {
  className?: string;
}

/**
 * Dashboard Animation Component
 * A stylized animated dashboard representation
 */
const DashboardAnimation: React.FC<DashboardAnimationProps> = ({ className = '' }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    const animateElements = async () => {
      await controls.start('visible');
    };
    
    animateElements();
  }, [controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  
  const chartVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { 
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };
  
  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <div className={`dashboard-animation w-full h-full overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="w-full h-full bg-white p-6 rounded-xl shadow-lg"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <div className="w-36 h-6 bg-gray-200 rounded-md"></div>
            <div className="w-24 h-6 bg-gray-200 rounded-md"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
            <div className="w-8 h-8 bg-indigo-100 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Stats Cards */}
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="w-12 h-12 mb-2 rounded-md bg-blue-100"></div>
              <div className="w-16 h-4 bg-gray-200 rounded mb-2"></div>
              <div className="w-24 h-6 bg-gray-300 rounded"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Line Chart */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="w-full h-8 flex justify-between items-center mb-4">
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="relative h-40 w-full">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <motion.path
                  d="M0,40 Q20,35 30,38 T50,30 T70,25 T100,10"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  variants={lineVariants}
                />
                <motion.circle cx="30" cy="38" r="2" fill="#3b82f6" variants={pulseVariants} />
                <motion.circle cx="50" cy="30" r="2" fill="#3b82f6" variants={pulseVariants} />
                <motion.circle cx="70" cy="25" r="2" fill="#3b82f6" variants={pulseVariants} />
              </svg>
            </div>
          </motion.div>
          
          {/* Bar Chart */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="w-full h-8 flex justify-between items-center mb-4">
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="relative h-40 w-full flex items-end justify-around">
              {[35, 25, 40, 30, 45, 20].map((height, index) => (
                <motion.div 
                  key={index}
                  variants={chartVariants}
                  custom={index}
                  className="w-6 bg-indigo-400 rounded-t-sm"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Table */}
        <motion.div 
          variants={itemVariants}
          className="bg-gray-50 p-4 rounded-lg"
        >
          <div className="w-full h-8 flex justify-between items-center mb-4">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-2 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardAnimation; 