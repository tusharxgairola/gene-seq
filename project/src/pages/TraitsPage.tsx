import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TraitComparisonBar from '../components/TraitComparisonBar';
import { fetchGenomicResults } from '../services/apiService';
import type { Trait } from '../types';

const TraitsPage: React.FC = () => {
  const [traits, setTraits] = useState<Trait[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // In a real app, we would get the userId from authentication context
  const userId = 'user_demo';

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genomicData = await fetchGenomicResults(userId);
        setTraits(genomicData.traits);
      } catch (error) {
        console.error('Error loading trait data:', error);
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
              Physiological Traits Analysis
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              This analysis shows your genetic predispositions to various physiological traits compared to population averages.
            </p>
            
            {isLoading ? (
              <div className="flex justify-center my-12">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <>
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Understanding Your Results</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    The traits shown below are based on your genetic markers and show how you compare to population averages.
                    Blue markers show your genetic predisposition, while gray markers show the average.
                  </p>
                  <p className="text-sm text-gray-600">
                    Remember that these traits are influenced by both genetics and environment. Your actual physiological traits
                    may differ based on lifestyle, training, diet, and other factors.
                  </p>
                </div>
                
                {traits.map((trait, index) => (
                  <TraitComparisonBar
                    key={index}
                    name={trait.name}
                    value={trait.value}
                    average={trait.average}
                    description={trait.description}
                  />
                ))}
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Practical Applications</h3>
                  <p className="text-blue-800 mb-4">
                    Understanding your genetic traits can help you:
                  </p>
                  <ul className="list-disc list-inside text-blue-800 space-y-2">
                    <li>Optimize your exercise routine based on your muscle fiber composition</li>
                    <li>Tailor nutrition to account for vitamin absorption efficiency</li>
                    <li>Understand your natural physical tendencies and potential</li>
                    <li>Make more informed choices about supplements and recovery strategies</li>
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

export default TraitsPage;