import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Team = () => {
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

  const team = [
    {
      name: "Manoj Bitra",
      role: "Founder & CEO",
      focus: "Product Design and Strategy",
      image: "https://images.unsplash.com/photo-1600878459108-617a253537d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Iovanny Arroyo",
      role: "Co-founder & CTO",
      focus: "Technology Architecture",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Eric Nancs",
      role: "Adviser",
      focus: "Partnerships",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CJ",
      role: "Adviser",
      focus: "Business Operations and Marketing",
      image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mhia Mojica",
      role: "Full Stack Developer",
      focus: "Platform Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Saundarya Pande",
      role: "UX/UI Designer",
      focus: "User Experience",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg text-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">Our Team</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Uniting Education, Technology, and Finance to Transform Financial Literacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-accent font-semibold mb-1">{member.role}</p>
                <p className="text-white/70">{member.focus}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Our combined experience spans educational technology, financial services, and curriculum development. We're passionate about making a difference in young people's lives through financial education.
            </p>
            <a href="#contact" className="btn-primary bg-accent hover:bg-accent/90 text-primary">
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
