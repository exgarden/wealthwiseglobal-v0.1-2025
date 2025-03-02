import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state after a small delay for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      } ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className={`h-10 w-10 transition-transform duration-500 ${isLoaded ? 'scale-100' : 'scale-0'}`}>
                <svg width="40" height="40" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M104.167 0C93.2233 0 84.3333 8.89 84.3333 19.8333V45.8333H38.5C17.2283 45.8333 0 63.0617 0 84.3333C0 105.605 17.2283 122.833 38.5 122.833H84.3333V150H104.167V19.8333C104.167 19.8333 104.167 19.8333 104.167 0Z" fill="#1A2B3C"/>
                  <circle cx="135.833" cy="19.8333" r="14.1667" fill="#F2C94C"/>
                </svg>
              </div>
              <span className={`text-2xl font-bold font-playfair transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Square<span className="text-accent">One</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#mission" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-secondary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Mission
            </a>
            <a 
              href="#products" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-secondary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Products
            </a>
            <a 
              href="#features" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-secondary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Features
            </a>
            <a 
              href="#team" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-secondary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className={`transition-all duration-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } btn-primary`}
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`transition-colors duration-300 focus:outline-none ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full left-0 right-0 transition-all duration-300 transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="m-2 p-4 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg border border-slate-200">
          <a 
            href="#mission" 
            className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Mission
          </a>
          <a 
            href="#products" 
            className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </a>
          <a 
            href="#features" 
            className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#team" 
            className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Team
          </a>
          <a 
            href="#contact" 
            className="mt-3 block px-4 py-3 bg-secondary text-white rounded-md text-base font-medium text-center hover:bg-secondary/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
