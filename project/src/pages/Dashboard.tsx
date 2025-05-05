import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import DashboardCard from '../components/DashboardCard';
import { useAnalysis } from '../context/AnalysisContext';
import { HeartPulse, Dumbbell, Apple } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { fileName, isProcessed } = useAnalysis();
  const navigate = useNavigate();
  
  // Redirect to home if there's no processed data
  React.useEffect(() => {
    if (!isProcessed) {
      navigate('/');
    }
  }, [isProcessed, navigate]);
  
  if (!isProcessed) return null;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="Genomic Analysis Dashboard" showHomeButton />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Analysis Results
          </h2>
          
          <p className="text-gray-600">
            Your DNA sequence file <span className="font-medium">{fileName}</span> has been successfully analyzed. 
            Explore your genetic insights by selecting one of the categories below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard 
            title="Genetic Disease Risks" 
            description="Discover your genetic predispositions to various health conditions."
            icon={<HeartPulse className="w-6 h-6 text-white" />}
            to="/disease-risks"
            color="bg-gradient-to-r from-red-500 to-pink-500"
          />
          
          <DashboardCard 
            title="VO₂ Max & Muscle Traits" 
            description="Learn about your natural athletic abilities and fitness potential."
            icon={<Dumbbell className="w-6 h-6 text-white" />}
            to="/fitness-traits"
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
          />
          
          <DashboardCard 
            title="Food Intolerances" 
            description="Understand which foods your body may have difficulty processing."
            icon={<Apple className="w-6 h-6 text-white" />}
            to="/food-intolerances"
            color="bg-gradient-to-r from-emerald-500 to-teal-500"
          />
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Important Note</h3>
          
          <p className="text-blue-700">
            This analysis provides insights based on current scientific understanding of genetic markers. 
            Results should be interpreted as informational rather than diagnostic. Always consult with healthcare 
            professionals before making health decisions based on genetic information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;