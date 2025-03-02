import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 0.8 + 0.2})`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M104.167 0C93.2233 0 84.3333 8.89 84.3333 19.8333V45.8333H38.5C17.2283 45.8333 0 63.0617 0 84.3333C0 105.605 17.2283 122.833 38.5 122.833H84.3333V150H104.167V19.8333C104.167 19.8333 104.167 19.8333 104.167 0Z" fill="#F8FAFC"/>
              <circle cx="135.833" cy="19.8333" r="14.1667" fill="#F2C94C"/>
            </svg>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
            Rewriting the Future of 
            <span className="block mt-2 text-accent">Financial Literacy</span>
          </h1>
          
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Empowering the next generation with essential financial skills, from basic literacy to advanced investing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="#mission" className="btn-primary">
              Learn More
            </a>
            <a href="#contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 animate-bounce">
          <a href="#problem" className="text-white/70 hover:text-white transition-colors">
            <ChevronDown size={32} className="mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
