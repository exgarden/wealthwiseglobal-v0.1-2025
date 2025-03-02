import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg text-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Financial Empowerment for All Young People
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                At SquareOne, we're committed to ensuring that every young person has access to comprehensive financial education. We believe that:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Access to quality financial education can profoundly change the trajectory of a young person's life.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Financial confidence begins when these skills are easily accessible to all.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Society benefits when its youth are financially literate.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>The global economy will thrive when we accomplish these goals.</p>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href="#products" className="btn-primary bg-accent hover:bg-accent/90 text-primary">
                  Explore Our Products
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold font-playfair mb-6 text-accent">Our Learning Journey</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">SquareOne: Financial Basics</h4>
                    <p className="text-white/70">For high school students</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Square101: Advanced Personal Finance</h4>
                    <p className="text-white/70">For college students and young adults</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">WealthWise Global</h4>
                    <p className="text-white/70">Cryptocurrency and Advanced Investing for young professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
