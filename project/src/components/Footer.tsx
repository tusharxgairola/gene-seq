import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">GenomicInsight</h3>
            <p className="text-gray-300 text-sm max-w-md">
              Personalized genetic analysis providing insights into health risks, traits, and food intolerances.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold mb-1">Resources</h4>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">FAQ</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold mb-1">Contact</h4>
            <a href="mailto:info@genomicinsight.com" className="text-gray-300 hover:text-white text-sm">
              info@genomicinsight.com
            </a>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GenomicInsight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;