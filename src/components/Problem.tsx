import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Problem = () => {
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
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">The Problem We Seek to Solve</h2>
            <div className="w-24 h-1 bg-secondary mx-auto my-6"></div>
            <p className="section-subtitle">
              Financial education is a critical life skill, yet it's often overlooked in traditional educational systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Educational Gap</h3>
              <p className="text-slate-600">
                Millions of young people are unprepared to navigate the complex world of personal finance.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Poor Decisions</h3>
              <p className="text-slate-600">
                Lack of knowledge leads to poor financial decisions, missed opportunities, and increased stress.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Solution</h3>
              <p className="text-slate-600">
                We're building a comprehensive platform that makes financial education engaging and accessible.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              The current system often fails to provide practical, engaging financial education, leaving many young people financially vulnerable as they enter adulthood. <span className="font-semibold text-primary">We believe it's time to change that.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
