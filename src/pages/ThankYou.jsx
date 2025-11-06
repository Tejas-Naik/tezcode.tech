
import { useEffect } from 'react';
import { trackEvent } from '../../utils/analytics';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const ThankYou = () => {
  useEffect(() => {
    trackEvent('checkout_success');
  }, []);

  return (
    <div className="min-h-screen bg-[#050712] text-white flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-gray-900/50 rounded-2xl shadow-2xl border border-blue-500/30 glow-border max-w-lg mx-auto"
      >
        <CheckCircleIcon className="w-24 h-24 text-green-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-300 mb-8">Your payment was successful. Welcome to the 7-Day Crash Course! You'll receive an email shortly with instructions on how to join our community and access the course materials.</p>
        <a 
          href="/"
          className="px-8 py-4 bg-[#2563FF] text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-transform hover:scale-105 glow-on-hover"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default ThankYou;
