// Custom Hooks
import { useEffect } from 'react';

/**
 * Hook for smooth scroll behavior
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const target = document.getElementById(targetId);
        
        if (target) {
          const offset = 86; // navbar height + gap
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};

/**
 * Hook for detecting if user has scrolled
 */
export const useScrollPosition = (threshold = 8) => {
  const [isScrolled, setIsScrolled] = useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

/**
 * Hook for detecting active section
 */
export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = React.useState(sectionIds[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id));
      
      sections.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(sectionIds[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};
