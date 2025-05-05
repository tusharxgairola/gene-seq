import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dna, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === '/';
  const hasResults = location.pathname.includes('/results');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isLandingPage ? 'bg-transparent' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`flex items-center gap-2 font-bold text-xl ${
            isLandingPage ? 'text-white' : 'text-blue-600'
          }`}
        >
          <Dna className="w-6 h-6" />
          <span>GenomicInsight</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`font-medium ${
              isLandingPage ? 'text-white' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          
          {hasResults && (
            <>
              <Link 
                to="/results/dashboard" 
                className={`font-medium ${
                  location.pathname.includes('/dashboard') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/results/disease-risk" 
                className={`font-medium ${
                  location.pathname.includes('/disease-risk') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Disease Risk
              </Link>
              <Link 
                to="/results/traits" 
                className={`font-medium ${
                  location.pathname.includes('/traits') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Traits
              </Link>
              <Link 
                to="/results/food-intolerance" 
                className={`font-medium ${
                  location.pathname.includes('/food-intolerance') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Food Intolerance
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className={isLandingPage ? 'text-white' : 'text-gray-700'} />
          ) : (
            <Menu className={isLandingPage ? 'text-white' : 'text-gray-700'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {hasResults && (
              <>
                <Link 
                  to="/results/dashboard" 
                  className={`font-medium ${
                    location.pathname.includes('/dashboard') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/results/disease-risk" 
                  className={`font-medium ${
                    location.pathname.includes('/disease-risk') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Disease Risk
                </Link>
                <Link 
                  to="/results/traits" 
                  className={`font-medium ${
                    location.pathname.includes('/traits') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Traits
                </Link>
                <Link 
                  to="/results/food-intolerance" 
                  className={`font-medium ${
                    location.pathname.includes('/food-intolerance') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Food Intolerance
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;