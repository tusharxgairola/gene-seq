import React from 'react';

const DNABackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      
      {/* DNA Helix Strands */}
      <div className="absolute top-1/4 right-1/4 w-2 h-96 bg-blue-500 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-96 bg-blue-500 opacity-20 rounded-full animate-pulse"></div>
      
      {/* DNA Connecting Lines */}
      {Array.from({ length: 10 }).map((_, index) => (
        <React.Fragment key={index}>
          <div 
            className="absolute w-16 h-0.5 bg-blue-400 opacity-20 transform -rotate-45"
            style={{ 
              top: `${10 + index * 10}%`, 
              left: '30%',
              animationDelay: `${index * 0.2}s`
            }}
          ></div>
          <div 
            className="absolute w-16 h-0.5 bg-purple-400 opacity-20 transform rotate-45"
            style={{ 
              top: `${15 + index * 10}%`, 
              right: '30%',
              animationDelay: `${index * 0.2}s`
            }}
          ></div>
        </React.Fragment>
      ))}
      
      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div 
          key={`particle-${index}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: index % 2 === 0 ? '#3B82F6' : '#8B5CF6',
            opacity: 0.4,
            animation: `float ${3 + Math.random() * 7}s infinite ease-in-out`,
            animationDelay: `${index * 0.3}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default DNABackground;