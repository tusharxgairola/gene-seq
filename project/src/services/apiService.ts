import { getMockGenomicData } from '../models/mockData';
import type { GenomicData } from '../types';

/**
 * In a real application, these functions would call actual API endpoints
 * For this demo, we're using mock data
 */

export const uploadGenomicFile = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      console.log(`Uploading file: ${file.name}`);
      // In a real app, this would be the ID returned from the backend
      const fileId = `upload_${Date.now()}`;
      resolve(fileId);
    }, 2000);
  });
};

export const processGenomicData = async (fileId: string): Promise<GenomicData> => {
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      console.log(`Processing file ID: ${fileId}`);
      // In a real app, this would be the actual processed data
      resolve(getMockGenomicData());
    }, 3000);
  });
};

export const fetchGenomicResults = async (userId: string): Promise<GenomicData> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      console.log(`Fetching results for user: ${userId}`);
      resolve(getMockGenomicData());
    }, 1000);
  });
};