import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset form status after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">Get in Touch</h2>
              <p className="text-white/80 mb-8 max-w-md">
                Interested in partnering with SquareOne or learning more about our platform? Reach out to us today.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>info@squareone.finance</p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">Send us a Message</h2>
              
              {formStatus === 'success' && (
                <div className="bg-secondary/20 border border-secondary rounded-md p-4 mb-6">
                  <p className="text-white">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 rounded-md p-4 mb-6">
                  <p className="text-white">There was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center space-x-3">
              <svg width="40" height="40" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M104.167 0C93.2233 0 84.3333 8.89 84.3333 19.8333V45.8333H38.5C17.2283 45.8333 0 63.0617 0 84.3333C0 105.605 17.2283 122.833 38.5 122.833H84.3333V150H104.167V19.8333C104.167 19.8333 104.167 19.8333 104.167 0Z" fill="white"/>
                <circle cx="135.833" cy="19.8333" r="14.1667" fill="#F2C94C"/>
              </svg>
              <div>
                <span className="text-2xl font-bold font-playfair">
                  Square<span className="text-accent">One</span>
                </span>
                <p className="text-white/60 text-sm mt-2">
                  © {new Date().getFullYear()} SquareOne Finance. All rights reserved.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-white/60">
              <a href="#mission" className="hover:text-accent transition-colors">Mission</a>
              <a href="#products" className="hover:text-accent transition-colors">Products</a>
              <a href="#features" className="hover:text-accent transition-colors">Features</a>
              <a href="#team" className="hover:text-accent transition-colors">Team</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
