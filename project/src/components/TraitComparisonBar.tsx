import React from 'react';

interface TraitComparisonBarProps {
  name: string;
  value: number;
  average: number;
  description: string;
}

const TraitComparisonBar: React.FC<TraitComparisonBarProps> = ({ 
  name, 
  value, 
  average, 
  description 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
      
      <div className="relative h-10 bg-gray-200 rounded-lg mb-3">
        {/* Your trait marker */}
        <div 
          className="absolute top-0 h-full w-1 bg-blue-600 transform -translate-x-1/2 transition-all duration-500"
          style={{ left: `${value}%` }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-blue-600 text-white py-1 px-2 rounded">
            You
          </div>
        </div>
        
        {/* Average marker */}
        <div 
          className="absolute top-0 h-full w-1 bg-gray-600 transform -translate-x-1/2 transition-all duration-500"
          style={{ left: `${average}%` }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-gray-600 text-white py-1 px-2 rounded">
            Avg
          </div>
        </div>
        
        {/* Scale indicators */}
        <div className="absolute top-full left-0 text-xs text-gray-500 mt-1">0%</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs text-gray-500 mt-1">50%</div>
        <div className="absolute top-full right-0 text-xs text-gray-500 mt-1">100%</div>
      </div>
      
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TraitComparisonBar;