import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Reduced to 1.2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Main logo */}
        <div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-600/30"></div>
          
          {/* Multiple spinning circles */}
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-600 animate-spin"></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-400 animate-spin" style={{ animationDuration: '1s', animationDelay: '0.1s' }}></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-300 animate-spin" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}></div>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text animate-pulse">
                Tez
              </span>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
        <div className="h-full bg-blue-600 animate-progress origin-left"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
