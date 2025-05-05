/**
 * Validates if the file is of an acceptable format (.fna or .vcf)
 */
export const validateFileType = (file: File): boolean => {
  const validExtensions = ['.fna', '.vcf'];
  const fileName = file.name.toLowerCase();
  
  return validExtensions.some(ext => fileName.endsWith(ext));
};

/**
 * Formats the file size to a human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Simulates processing of genomic file
 * In a real app, this would call a backend API
 */
export const processGenomicFile = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // In a real app, this would be the ID returned from the backend
      const fileId = `genomic_${Date.now()}`;
      resolve(fileId);
    }, 3000);
  });
};