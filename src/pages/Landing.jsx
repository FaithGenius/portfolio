import { useEffect, useState } from 'react';
import { portfolioData } from '../store/portfolioData';
import './Landing.css';

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRedirect, setShowRedirect] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { personal } = portfolioData;
  const { social } = personal; // social links nested under personal

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Show redirect message and redirect after 10s
    const redirectTimer = setTimeout(() => {
      setShowRedirect(true);
      // Fade out after showing redirect message for 1s
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
        // Navigate after fade completes
        setTimeout(() => {
          window.location.href = '/portfolio';
        }, 500);
      }, 1500);
      return () => clearTimeout(fadeTimer);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className={`landing-page ${fadeOut ? 'fade-out' : ''}`}>
      <div className="stage" role="main" aria-label="Profile stage">
        <aside className="profile-card" aria-labelledby="profile-title">
          <div className="welcome-text" aria-live="polite">
            Welcome to my digital space
          </div>

          <div className="avatar" aria-hidden="true" title="Profile icon">
            <i className="bi bi-laptop"></i>
          </div>

          <h1 id="profile-title" className="profile-title">
            {personal.nickname}-blue
          </h1>

          <div className="icons-row" role="navigation" aria-label="Profile links">
            <a
              className="icon-btn"
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub (opens in new tab)"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="icon-btn"
              href="/portfolio"
              title="Portfolio"
            >
              <i className="bi bi-code-slash"></i>
            </a>
            <a
              className="icon-btn"
              href="/portfolio#about"
              title="About me"
            >
              <i className="bi bi-person"></i>
            </a>
            {personal.cv && (
              <a
                className="icon-btn"
                href={personal.cv}
                download
                title="Download CV"
              >
                <i className="bi bi-file-earmark-person"></i>
              </a>
            )}
          </div>

          <div className="sub">
            {personal.subtitle}
          </div>
        </aside>

        <div className={`loading ${showRedirect ? 'visible' : ''}`} aria-live="polite">
          {showRedirect && 'Redirecting to portfolio...'}
        </div>
      </div>
    </div>
  );
}
