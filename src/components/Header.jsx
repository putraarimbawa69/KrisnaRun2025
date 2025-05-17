import { useState, useEffect } from 'preact/hooks';
import '../css/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="brand">
          <a href="#home" className="logo-link">
            <img 
              src="/assets/logo.png" 
              alt="Krisha-Saba" 
              width="48"
              height="48"
              loading="eager"
            />
            <div className="logo-text-container">
              
              <div className="logo-subtitle-container">
                <span className="logo-subtitle">KRISNA FUN RUN 2025</span>
                <span className="logo-tagline">The Journey of Nature and Culture</span>
                
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;