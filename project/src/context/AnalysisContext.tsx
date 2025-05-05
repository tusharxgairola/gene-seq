import React, { createContext, useContext, useState, ReactNode } from 'react';
import { generateMockAnalysisData } from '../utils/mockData';

interface AnalysisContextType {
  fileName: string;
  setFileName: (name: string) => void;
  isProcessed: boolean;
  setIsProcessed: (processed: boolean) => void;
  analysisData: any;
  startAnalysis: (file: File) => Promise<void>;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export const useAnalysis = () => {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
};

export const AnalysisProvider = ({ children }: { children: ReactNode }) => {
  const [fileName, setFileName] = useState<string>('');
  const [isProcessed, setIsProcessed] = useState<boolean>(false);
  const [analysisData, setAnalysisData] = useState<any>(null);

  const startAnalysis = async (file: File): Promise<void> => {
    // In a real app, this would send the file to a backend for processing
    // For now, we'll simulate a delay and generate mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData = generateMockAnalysisData();
        setAnalysisData(mockData);
        setIsProcessed(true);
        resolve();
      }, 3000); // Simulate 3 seconds of processing
    });
  };

  return (
    <AnalysisContext.Provider
      value={{
        fileName,
        setFileName,
        isProcessed,
        setIsProcessed,
        analysisData,
        startAnalysis,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};