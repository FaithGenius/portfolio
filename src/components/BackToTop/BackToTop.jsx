import { useEffect } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const handleScroll = () => {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="backToTop"
      className="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
