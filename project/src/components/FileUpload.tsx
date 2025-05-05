import React, { useState, useRef } from 'react';
import { Upload, FileText, AlertCircle, Check } from 'lucide-react';
import { validateFileType, formatFileSize } from '../utils/fileUtils';
import type { FileStatus } from '../types';

interface FileUploadProps {
  onFileSelected: (file: File) => void;
  status: FileStatus;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelected, status, error }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (validateFileType(file)) {
      setSelectedFile(file);
      onFileSelected(file);
    } else {
      setSelectedFile(null);
      alert('Please upload a .fna or .vcf file.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const getStatusContent = () => {
    switch (status) {
      case 'uploading':
        return (
          <div className="flex items-center text-blue-500">
            <div className="animate-spin mr-2 h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
            <span>Uploading...</span>
          </div>
        );
      case 'processing':
        return (
          <div className="flex items-center text-purple-500">
            <div className="animate-spin mr-2 h-4 w-4 border-2 border-purple-500 border-t-transparent rounded-full"></div>
            <span>Processing genomic data...</span>
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center text-green-500">
            <Check className="mr-2 h-4 w-4" />
            <span>Processing complete!</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-2 h-4 w-4" />
            <span>{error || 'An error occurred.'}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        } transition-colors duration-200`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".fna,.vcf"
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center">
          <Upload className="h-16 w-16 text-blue-500 mb-4" />
          
          <h3 className="text-xl font-semibold mb-2">
            {dragActive ? 'Drop your file here' : 'Upload your gene sequence'}
          </h3>
          
          <p className="text-gray-500 mb-4">
            Accepted formats: .fna, .vcf
          </p>
          
          {selectedFile ? (
            <div className="mb-6 flex items-center text-gray-700 bg-gray-100 p-3 rounded-lg">
              <FileText className="h-5 w-5 mr-2" />
              <div className="flex flex-col">
                <span className="font-medium">{selectedFile.name}</span>
                <span className="text-xs text-gray-500">{formatFileSize(selectedFile.size)}</span>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleButtonClick}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4"
              disabled={status === 'uploading' || status === 'processing'}
            >
              Select File
            </button>
          )}
          
          {status !== 'idle' && getStatusContent()}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;