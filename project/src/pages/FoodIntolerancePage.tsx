import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodIntoleranceChart from '../components/FoodIntoleranceChart';
import { fetchGenomicResults } from '../services/apiService';
import type { FoodIntolerance } from '../types';

const FoodIntolerancePage: React.FC = () => {
  const [foodIntolerances, setFoodIntolerances] = useState<FoodIntolerance[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // In a real app, we would get the userId from authentication context
  const userId = 'user_demo';

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genomicData = await fetchGenomicResults(userId);
        setFoodIntolerances(genomicData.foodIntolerances);
      } catch (error) {
        console.error('Error loading food intolerance data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [userId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Food Intolerance Analysis
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              This analysis shows your genetic predisposition to various food intolerances and sensitivities.
            </p>
            
            {isLoading ? (
              <div className="flex justify-center my-12">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <>
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Understanding Your Results</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Low (&lt;20%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Moderate (20-50%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-sm">High (50-75%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Very High (&gt;75%)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These results indicate genetic predisposition to food intolerances, but actual symptoms may vary.
                    Consider consulting a healthcare professional or nutritionist before making significant dietary changes.
                  </p>
                </div>
                
                {foodIntolerances.map((item, index) => (
                  <FoodIntoleranceChart
                    key={index}
                    food={item.food}
                    probability={item.probability}
                    description={item.description}
                  />
                ))}
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Next Steps</h3>
                  <p className="text-blue-800 mb-4">
                    If you have high probabilities for certain intolerances, consider:
                  </p>
                  <ul className="list-disc list-inside text-blue-800 space-y-2">
                    <li>Keeping a food diary to track symptoms after eating specific foods</li>
                    <li>Consulting with a healthcare provider about clinical testing</li>
                    <li>Working with a registered dietitian to develop a personalized nutrition plan</li>
                    <li>Exploring elimination diets under professional guidance</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FoodIntolerancePage;