import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivitySquare, Dna, Pizza } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchGenomicResults } from '../services/apiService';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  // In a real app, we would get the userId from authentication context
  const userId = 'user_demo';

  useEffect(() => {
    // Load genomic data
    const loadData = async () => {
      try {
        await fetchGenomicResults(userId);
        // In a real app, we would store the results in state/context
      } catch (error) {
        console.error('Error loading genomic data:', error);
      }
    };
    
    loadData();
  }, [userId]);

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              Your Genomic Analysis Results
            </h1>
            
            <p className="text-lg text-gray-600 mb-12 text-center">
              Explore the different aspects of your genetic profile below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Disease Risk Card */}
              <div 
                onClick={() => handleCardClick('/results/disease-risk')}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                  <Dna className="w-8 h-8 text-red-600" />
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Genetic Disease Risk
                </h2>
                
                <p className="text-gray-600 text-center">
                  View your genetic predispositions to various health conditions.
                </p>
              </div>
              
              {/* Traits Card */}
              <div 
                onClick={() => handleCardClick('/results/traits')}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <ActivitySquare className="w-8 h-8 text-blue-600" />
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Physiological Traits
                </h2>
                
                <p className="text-gray-600 text-center">
                  Discover your natural genetic traits and physical characteristics.
                </p>
              </div>
              
              {/* Food Intolerance Card */}
              <div 
                onClick={() => handleCardClick('/results/food-intolerance')}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                  <Pizza className="w-8 h-8 text-green-600" />
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Food Intolerances
                </h2>
                
                <p className="text-gray-600 text-center">
                  Learn about your genetic predispositions to food sensitivities.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Understanding Your Results
              </h3>
              
              <p className="text-gray-600 mb-4">
                Your genetic analysis results are based on advanced machine learning models that analyze your unique genetic markers. Here's what to know:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Results show <span className="font-medium">probabilities and tendencies</span>, not certainties</li>
                <li>Genetic factors are just one aspect of health and wellness</li>
                <li>Environmental and lifestyle factors play significant roles too</li>
                <li>Always consult healthcare professionals before making health decisions</li>
              </ul>
              
              <p className="text-gray-600">
                The information provided is for educational purposes and should not be considered medical advice.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;