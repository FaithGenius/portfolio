import './Footer.css';
import { portfolioData } from '../../store/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal, content } = portfolioData;
  const brandName = personal?.nickname || personal?.name || 'Portfolio';
  const footerTemplate = content?.footer?.textTemplate || '© {year} · {brand}-blue · All Rights Reserved';
  const footerText = footerTemplate.replace('{year}', currentYear).replace('{brand}', brandName);

  return (
    <footer className="site-footer">
      <div className="container center">
        <p className="footer-text">{footerText}</p>
      </div>
    </footer>
  );
}
