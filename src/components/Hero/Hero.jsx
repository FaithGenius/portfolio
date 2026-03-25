import { portfolioData } from '../../store/portfolioData';
import './Hero.css';

export default function Hero() {
  const { personal, content } = portfolioData;
  const heroCopy = content?.hero || {};

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    
    if (target) {
      const offset = 86;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-left">
          <div className="kicker">{heroCopy.kicker || 'Available for freelance'}</div>
          <h1 className="hero-title">{heroCopy.heading || 'Hi, I\'m'} {personal.name}</h1>
          <p className="hero-sub">
            {personal.subtitle}. {personal.description}
          </p>

          <div className="hero-ctas">
            <a 
              href="#projects" 
              className="cta-btn primary"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              {heroCopy?.ctas?.primary || 'See my work'}
            </a>
            <a 
              href="#contact" 
              className="cta-btn ghost"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              {heroCopy?.ctas?.secondary || 'Contact me'}
            </a>
            <a
              href={personal.cv}
              className="cta-btn secondary"
              download
            >
              Download CV
            </a>
          </div>

          <ul className="hero-meta" aria-hidden="true">
            <li>
              <i className="bi bi-geo-alt-fill"></i> {personal.location}
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i> Available now
            </li>
          </ul>
        </div>

        <div className="hero-right" role="img" aria-label="Profile illustration">
          <div className="profile-frame">
            <img 
              src={personal.profileImages.main} 
              alt="Profile image" 
              className="profile-img"
            />
          </div>
          <div className="hero-glow" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
