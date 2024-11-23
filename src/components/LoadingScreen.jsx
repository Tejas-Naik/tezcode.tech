import { useEffect, useState, memo } from 'react';

const LoadingScreen = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-4 border-blue-600/30"></div>
          
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-600 animate-spin" 
               style={{ '--tw-spin-duration': '0.8s' }}></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-400 animate-spin" 
               style={{ '--tw-spin-duration': '1s', '--tw-spin-delay': '0.1s' }}></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-300 animate-spin" 
               style={{ '--tw-spin-duration': '1.5s', '--tw-spin-delay': '0.2s' }}></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">TezCode</span>
              <span className="block text-sm text-gray-500">.Tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
