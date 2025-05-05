import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RiskBar from '../components/RiskBar';
import { useAnalysis } from '../context/AnalysisContext';
import { ArrowDown, Download, Info } from 'lucide-react';

const DiseaseRisksPage: React.FC = () => {
  const { analysisData, isProcessed } = useAnalysis();
  const navigate = useNavigate();
  
  // Redirect to home if there's no processed data
  React.useEffect(() => {
    if (!isProcessed) {
      navigate('/');
    }
  }, [isProcessed, navigate]);
  
  if (!isProcessed || !analysisData) return null;
  
  const { diseaseRisks } = analysisData;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="Genetic Disease Risk Assessment" showBackButton showHomeButton />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Disease Risk Analysis
              </h2>
              
              <p className="text-gray-600">
                Based on your genetic markers, we've assessed your relative risk for various genetic conditions.
              </p>
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
              
              <p className="text-sm text-yellow-700">
                Risk percentages represent a relative assessment compared to the general population. 
                A high risk percentage does not guarantee you will develop the condition, and a low risk 
                does not guarantee you won't. Many factors beyond genetics influence disease development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ArrowDown className="w-5 h-5 text-red-500 mr-2" />
              Highest Risk Factors
            </h3>
            
            {diseaseRisks
              .sort((a: any, b: any) => b.value - a.value)
              .slice(0, 5)
              .map((risk: any, index: number) => (
                <RiskBar 
                  key={index}
                  label={risk.label}
                  value={risk.value}
                  description={risk.description}
                />
              ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ArrowDown className="w-5 h-5 text-green-500 mr-2 transform rotate-180" />
              Lowest Risk Factors
            </h3>
            
            {diseaseRisks
              .sort((a: any, b: any) => a.value - b.value)
              .slice(0, 5)
              .map((risk: any, index: number) => (
                <RiskBar 
                  key={index}
                  label={risk.label}
                  value={risk.value}
                  description={risk.description}
                />
              ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            All Disease Risk Factors
          </h3>
          
          <div className="space-y-6">
            {diseaseRisks.map((risk: any, index: number) => (
              <RiskBar 
                key={index}
                label={risk.label}
                value={risk.value}
                description={risk.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseRisksPage;