import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  to,
  color
}) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
      onClick={() => navigate(to)}
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <button 
          className={`px-4 py-2 rounded-lg ${color} text-white font-medium transition-colors duration-200`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;