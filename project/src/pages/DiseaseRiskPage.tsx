import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RiskBar from '../components/RiskBar';
import { fetchGenomicResults } from '../services/apiService';
import type { DiseaseRisk } from '../types';

const DiseaseRiskPage: React.FC = () => {
  const [diseaseRisks, setDiseaseRisks] = useState<DiseaseRisk[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // In a real app, we would get the userId from authentication context
  const userId = 'user_demo';

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genomicData = await fetchGenomicResults(userId);
        setDiseaseRisks(genomicData.diseaseRisks);
      } catch (error) {
        console.error('Error loading disease risk data:', error);
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
              Genetic Disease Risk Analysis
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              This analysis shows your genetic predisposition to various health conditions based on your genomic data.
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
                      <span className="text-sm">Low Risk (&lt;5%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Moderate Risk (5-15%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">High Risk (&gt;15%)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Remember that these are probabilities based on genetic markers and do not guarantee that you will develop these conditions.
                    Environmental, lifestyle, and other factors play significant roles in disease development.
                  </p>
                </div>
                
                {diseaseRisks.map((disease, index) => (
                  <RiskBar
                    key={index}
                    name={disease.name}
                    risk={disease.risk}
                    description={disease.description}
                  />
                ))}
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Note</h3>
                  <p className="text-blue-800">
                    This report is for informational purposes only and is not a substitute for professional medical advice.
                    Always consult with healthcare professionals before making any health-related decisions based on genetic information.
                  </p>
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

export default DiseaseRiskPage;