import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RiskBar from '../components/RiskBar';
import { useAnalysis } from '../context/AnalysisContext';
import { Download, Info, Utensils } from 'lucide-react';

const FoodIntolerancesPage: React.FC = () => {
  const { analysisData, isProcessed } = useAnalysis();
  const navigate = useNavigate();
  
  // Redirect to home if there's no processed data
  React.useEffect(() => {
    if (!isProcessed) {
      navigate('/');
    }
  }, [isProcessed, navigate]);
  
  if (!isProcessed || !analysisData) return null;
  
  const { foodIntolerances } = analysisData;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="Food Intolerances & Allergies" showBackButton showHomeButton />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Food Sensitivity Analysis
              </h2>
              
              <p className="text-gray-600">
                Your genetic predispositions to various food intolerances and sensitivities.
              </p>
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
              
              <p className="text-sm text-green-700">
                These results indicate genetic predispositions to food sensitivities, not confirmed 
                allergies or intolerances. Use this information as a starting point for further investigation 
                with healthcare providers or through elimination diets under proper supervision.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Common Intolerances
              </h3>
            </div>
            
            {foodIntolerances.common.map((intolerance: any, index: number) => (
              <RiskBar 
                key={index}
                label={intolerance.label}
                value={intolerance.value}
                description={intolerance.description}
              />
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Sensitivities & Allergies
              </h3>
            </div>
            
            {foodIntolerances.allergies.map((allergy: any, index: number) => (
              <RiskBar 
                key={index}
                label={allergy.label}
                value={allergy.value}
                description={allergy.description}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Metabolism & Absorption
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {foodIntolerances.metabolism.map((item: any, index: number) => (
              <RiskBar 
                key={index}
                label={item.label}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-medium text-gray-800 mb-3">Dietary Recommendations</h4>
            
            <p className="text-gray-700 mb-4">
              Based on your genetic profile, you may benefit from a diet that:
            </p>
            
            <ul className="space-y-2">
              {foodIntolerances.recommendations.map((rec: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodIntolerancesPage;