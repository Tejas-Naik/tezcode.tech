import { useEffect, useState, memo } from "react";

const LoadingScreen = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timer simulates a loading process.
    // In a real application, you'd replace this with actual data fetching or resource loading.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Animated TezCode.Tech Logo */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer pulsating ring for a modern feel */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 animate-pulse-slow"></div>
          {/* Inner solid background for the logo */}
          <div className="relative w-32 h-32 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center">
            <div className="text-center">
              <span className="block text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transform translate-y-0 animate-bounce-custom">
                TezCode
              </span>
              <span className="block text-lg text-gray-700 dark:text-gray-300 font-medium -mt-1">
                .Tech
              </span>
            </div>
          </div>
        </div>

        {/* Loading text or subtle indicator */}
        <div className="text-xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in-up">
          Loading your experience...
        </div>
      </div>

      {/* Custom Tailwind CSS animations (add this to your main CSS file like index.css) */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes bounce-custom {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }

        .animate-bounce-custom {
          animation: bounce-custom 1.5s infinite ease-in-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.5s; /* Delay for text to appear after logo animation starts */
        }
      `}</style>
    </div>
  );
});

LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
