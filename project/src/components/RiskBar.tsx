import React from 'react';
import ProgressBar from './ProgressBar';

interface RiskBarProps {
  name: string;
  risk: number;
  description: string;
}

const RiskBar: React.FC<RiskBarProps> = ({ name, risk, description }) => {
  // Determine the color based on risk level
  const getColorClass = () => {
    if (risk < 5) return 'bg-green-500';
    if (risk < 15) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getRiskLabel = () => {
    if (risk < 5) return 'Low Risk';
    if (risk < 15) return 'Moderate Risk';
    return 'High Risk';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <div className="flex items-center mt-1 sm:mt-0">
          <div className={`w-3 h-3 rounded-full ${getColorClass()} mr-2`}></div>
          <span className="text-sm font-medium">{getRiskLabel()}</span>
        </div>
      </div>
      
      <ProgressBar 
        progress={risk} 
      />
      
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default RiskBar;