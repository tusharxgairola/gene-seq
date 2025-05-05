import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TraitGraph from '../components/TraitGraph';
import { useAnalysis } from '../context/AnalysisContext';
import { Download, Info, Activity } from 'lucide-react';

const FitnessTraitsPage: React.FC = () => {
  const { analysisData, isProcessed } = useAnalysis();
  const navigate = useNavigate();
  
  // Redirect to home if there's no processed data
  React.useEffect(() => {
    if (!isProcessed) {
      navigate('/');
    }
  }, [isProcessed, navigate]);
  
  if (!isProcessed || !analysisData) return null;
  
  const { fitnessTraits } = analysisData;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="VO₂ Max & Muscle Traits" showBackButton showHomeButton />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Fitness & Athletic Traits
              </h2>
              
              <p className="text-gray-600">
                Your genetic predispositions related to athletic performance and fitness potential.
              </p>
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              
              <p className="text-sm text-blue-700">
                These traits reflect your genetic potential, but actual performance depends on training, 
                nutrition, and lifestyle factors. Your genes may give you certain advantages or limitations, 
                but your habits ultimately determine your fitness outcomes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Aerobic Capacity
              </h3>
            </div>
            
            <TraitGraph
              label="VO₂ Max Potential"
              value={fitnessTraits.vo2max.value}
              average={fitnessTraits.vo2max.average}
              unit=" ml/kg/min"
              description="Maximum oxygen uptake capacity, a key indicator of endurance potential."
              min={20}
              max={80}
            />
            
            <TraitGraph
              label="Endurance Performance"
              value={fitnessTraits.endurance.value}
              average={fitnessTraits.endurance.average}
              unit="%"
              description="Genetic factors affecting endurance and stamina."
            />
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Activity className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Muscle Composition
              </h3>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Muscle Fiber Type Distribution</h4>
              
              <div className="flex items-center h-16">
                <div className="flex-1 bg-blue-500 h-12 rounded-l-lg flex items-center justify-center text-white font-medium" style={{ width: `${fitnessTraits.muscleFiber.slowTwitch}%` }}>
                  Slow Twitch {fitnessTraits.muscleFiber.slowTwitch}%
                </div>
                <div className="flex-1 bg-purple-500 h-12 rounded-r-lg flex items-center justify-center text-white font-medium" style={{ width: `${fitnessTraits.muscleFiber.fastTwitch}%` }}>
                  Fast Twitch {fitnessTraits.muscleFiber.fastTwitch}%
                </div>
              </div>
              
              <p className="mt-2 text-sm text-gray-600">
                Slow twitch fibers (Type I) are better for endurance, while fast twitch fibers (Type II) 
                are better for power and sprinting.
              </p>
            </div>
            
            <TraitGraph
              label="Power Output Potential"
              value={fitnessTraits.power.value}
              average={fitnessTraits.power.average}
              unit="%"
              description="Genetic factors affecting strength and explosive power generation."
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Metabolic & Recovery Factors
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            <TraitGraph
              label="Testosterone Metabolism"
              value={fitnessTraits.testosterone.value}
              average={fitnessTraits.testosterone.average}
              unit="%"
              description="Genetic factors affecting testosterone utilization and sensitivity."
            />
            
            <TraitGraph
              label="Metabolic Rate"
              value={fitnessTraits.metabolicRate.value}
              average={fitnessTraits.metabolicRate.average}
              unit=" kcal/day"
              description="Baseline calorie burning capacity at rest."
              min={1200}
              max={2400}
            />
            
            <TraitGraph
              label="Vitamin D Absorption"
              value={fitnessTraits.vitaminD.value}
              average={fitnessTraits.vitaminD.average}
              unit="%"
              description="Efficiency of vitamin D processing, important for recovery and bone health."
            />
            
            <TraitGraph
              label="Vitamin B12 Utilization"
              value={fitnessTraits.vitaminB12.value}
              average={fitnessTraits.vitaminB12.average}
              unit="%"
              description="Efficiency of B12 processing, important for energy production."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTraitsPage;