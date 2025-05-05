import React from 'react';

const ProcessingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-32 h-32">
        {/* DNA helix animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-24 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Orbiting particles */}
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin-slow" style={{ animationDuration: '4s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin-slow" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <h3 className="mt-6 text-xl font-medium text-gray-800">
        Analyzing DNA Sequence
      </h3>
      
      <div className="mt-4 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 animate-progress"></div>
      </div>
      
      <p className="mt-4 text-gray-500">
        Please wait while we process your genetic data...
      </p>
    </div>
  );
};

export default ProcessingAnimation;