import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroAnimation from '../components/HeroAnimation';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-blue-900 text-white overflow-hidden">
        <HeroAnimation />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unlock the Secrets of Your Genome
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover your genetic predispositions, traits, and sensitivities through advanced AI analysis.
            </p>
            
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors group"
            >
              Upload Your Sequence
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Comprehensive Genetic Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Disease Risk Assessment</h3>
              <p className="text-gray-600">
                Identify potential genetic predispositions to various conditions through advanced analysis of your genomic data.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Physiological Traits</h3>
              <p className="text-gray-600">
                Discover your natural genetic traits like VO₂ max, muscle fiber composition, and vitamin absorption efficiency.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Food Sensitivity Analysis</h3>
              <p className="text-gray-600">
                Learn about your genetic predispositions to food intolerances and allergies to help customize your diet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Upload Your Genetic Data</h3>
                <p className="text-gray-600">
                  Securely upload your .fna or .vcf file from genetic testing services like 23andMe, AncestryDNA, or raw genome sequencing data.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Advanced AI Analysis</h3>
                <p className="text-gray-600">
                  Our sophisticated deep learning models analyze your genetic markers against comprehensive databases for accurate predictions.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Personalized Insights</h3>
                <p className="text-gray-600">
                  Receive detailed reports on your genetic disease risks, physiological traits, and food sensitivities with actionable information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Your Genetic Profile?
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Upload your genomic data now and gain valuable insights into your unique genetic makeup.
          </p>
          
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;