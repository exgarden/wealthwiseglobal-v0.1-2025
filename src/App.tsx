import { useEffect } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mission from './components/Mission';
import Products from './components/Products';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Include required fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-inter text-slate-800 bg-white">
      <NavBar />
      <Hero />
      <Problem />
      <Mission />
      <Products />
      <Features />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
