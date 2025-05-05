import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface FoodIntoleranceChartProps {
  food: string;
  probability: number;
  description: string;
}

const FoodIntoleranceChart: React.FC<FoodIntoleranceChartProps> = ({ 
  food, 
  probability, 
  description 
}) => {
  const data = {
    labels: ['Intolerance Probability', 'No Intolerance'],
    datasets: [
      {
        data: [probability, 100 - probability],
        backgroundColor: [
          probability > 50 ? '#ef4444' : '#f59e0b',
          '#e5e7eb'
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw as number;
            return `${label}: ${value}%`;
          }
        }
      }
    },
    cutout: '50%'
  };

  // Determine probability label based on percentage
  const getProbabilityLabel = () => {
    if (probability < 20) return 'Low';
    if (probability < 50) return 'Moderate';
    if (probability < 75) return 'High';
    return 'Very High';
  };

  // Determine color class based on probability
  const getColorClass = () => {
    if (probability < 20) return 'text-green-500';
    if (probability < 50) return 'text-yellow-500';
    if (probability < 75) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <div className="relative" style={{ height: '140px' }}>
            <Pie data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-xl font-bold ${getColorClass()}`}>{probability}%</span>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-2/3 sm:pl-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-900">{food}</h3>
            <span className={`text-sm font-medium ${getColorClass()}`}>
              {getProbabilityLabel()} Probability
            </span>
          </div>
          
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodIntoleranceChart;