import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FileUpload from '../components/FileUpload';
import ProgressBar from '../components/ProgressBar';
import { uploadGenomicFile, processGenomicData } from '../services/apiService';
import type { FileStatus } from '../types';

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<FileStatus>('idle');
  const [error, setError] = useState<string | undefined>(undefined);
  const [progress, setProgress] = useState(0);
  const [fileId, setFileId] = useState<string | null>(null);

  const handleFileSelected = (selectedFile: File) => {
    setFile(selectedFile);
    setStatus('idle');
    setError(undefined);
    setProgress(0);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      // Start upload process
      setStatus('uploading');
      setProgress(0);
      
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 40) {
            clearInterval(progressInterval);
            return 40;
          }
          return prev + 5;
        });
      }, 300);
      
      // Upload file
      const id = await uploadGenomicFile(file);
      setFileId(id);
      
      clearInterval(progressInterval);
      setProgress(50);
      setStatus('processing');
      
      // Simulate processing progress
      const processingInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(processingInterval);
            return 90;
          }
          return prev + 2;
        });
      }, 300);
      
      // Process genomic data
      await processGenomicData(id);
      
      clearInterval(processingInterval);
      setProgress(100);
      setStatus('success');
      
      // Navigate to results page after a short delay
      setTimeout(() => {
        navigate('/results/dashboard');
      }, 1500);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'An error occurred during processing.');
    }
  };

  useEffect(() => {
    // Auto-upload when a file is selected
    if (file && status === 'idle') {
      handleUpload();
    }
  }, [file]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Upload Your Genetic Data
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 text-center">
              Upload your .fna or .vcf file to analyze your genetic profile. Your data is securely processed and never shared.
            </p>
            
            <FileUpload 
              onFileSelected={handleFileSelected}
              status={status}
              error={error}
            />
            
            {status !== 'idle' && (
              <div className="mt-8">
                <ProgressBar 
                  progress={progress} 
                  label={status === 'uploading' ? 'Uploading' : 'Processing'}
                />
              </div>
            )}
            
            <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">About Your Data Privacy</h3>
              <p className="text-blue-800 mb-4">
                We take the privacy and security of your genetic information seriously:
              </p>
              <ul className="list-disc list-inside text-blue-800 space-y-2">
                <li>Your data is encrypted during transmission and storage</li>
                <li>We never share your genetic information with third parties</li>
                <li>All processing is done on secure, isolated servers</li>
                <li>You can request complete deletion of your data at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadPage;