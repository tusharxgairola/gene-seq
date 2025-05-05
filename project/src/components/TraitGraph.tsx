import React, { useEffect, useState } from 'react';

interface TraitGraphProps {
  label: string;
  value: number;
  average: number;
  unit?: string;
  description?: string;
  min?: number;
  max?: number;
}

const TraitGraph: React.FC<TraitGraphProps> = ({
  label,
  value,
  average,
  unit = '',
  description,
  min = 0,
  max = 100
}) => {
  const [animatedValue, setAnimatedValue] = useState(min);
  const [animatedAverage, setAnimatedAverage] = useState(min);
  
  useEffect(() => {
    setTimeout(() => {
      setAnimatedValue(value);
      setAnimatedAverage(average);
    }, 100);
  }, [value, average]);
  
  const getPercentage = (val: number): number => {
    return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
  };
  
  const valuePercent = getPercentage(animatedValue);
  const averagePercent = getPercentage(animatedAverage);
  
  const getComparisonText = (): string => {
    const diff = value - average;
    const absDiff = Math.abs(diff);
    
    if (absDiff <= (max - min) * 0.05) {
      return "Average";
    }
    
    const direction = diff > 0 ? "Higher" : "Lower";
    
    if (absDiff <= (max - min) * 0.15) {
      return `Slightly ${direction}`;
    } else if (absDiff <= (max - min) * 0.35) {
      return `Moderately ${direction}`;
    } else {
      return `Significantly ${direction}`;
    }
  };
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-lg font-medium text-gray-800">{label}</h3>
        <div className="text-sm font-medium">
          <span className="text-blue-600">You: {value}{unit}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-500">Avg: {average}{unit}</span>
        </div>
      </div>
      
      <div className="h-10 w-full bg-gray-200 rounded-full relative mb-1">
        {/* Range markers */}
        <div className="absolute inset-0 flex justify-between px-2">
          {[0, 25, 50, 75, 100].map((mark) => (
            <div key={mark} className="h-full flex flex-col justify-center">
              <div className="h-2 w-0.5 bg-gray-400 opacity-50"></div>
            </div>
          ))}
        </div>
        
        {/* Your value marker */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-blue-600 transition-all duration-1000 ease-out"
          style={{ left: `${valuePercent}%` }}
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            You
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
        
        {/* Average value marker */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-gray-500 transition-all duration-1000 ease-out"
          style={{ left: `${averagePercent}%` }}
        >
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
      
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-600">{description}</p>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100">
          {getComparisonText()}
        </span>
      </div>
    </div>
  );
};

export default TraitGraph;