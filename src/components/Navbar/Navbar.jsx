import { useState, useEffect } from 'react';
import { portfolioData } from '../../store/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      // Improved active nav link detection
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120; // Account for navbar height + offset

      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      // Special case for top of page
      if (window.scrollY < 100) {
        currentSection = 'home';
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);

    if (target) {
      const offset = 86;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // Update active link immediately and let scroll handler take over
      setActiveLink(targetId);
    }
  };

  const { personal, content } = portfolioData;
  const navLinks = content?.navbar?.links || [];
  const brand = content?.navbar?.brand || personal?.name || 'Portfolio';


  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="banner" id="mainNav">
      <div className="nav-bg" aria-hidden="true" role="presentation"></div>
      
      <div className="container nav-container">
        <a className="logo" href="#home" aria-label={`${brand} home`} onClick={(e) => handleNavClick(e, '#home')}>
          {brand}
        </a>

        <nav className="nav-main" role="navigation" aria-label="Primary">
          <ul className="nav-pill" role="menubar">
            {navLinks.map(link => (
              <li key={link.id} role="none">
                <a
                  role="menuitem"
                  className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer', download: true }
                    : { onClick: (e) => handleNavClick(e, link.href) })}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
