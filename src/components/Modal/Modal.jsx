import { useState, useEffect } from 'react';
import { portfolioData } from '../../store/portfolioData';
import './Modal.css';

export default function InfoModal({ isOpen, tab, onClose }) {
  const { skills, content } = portfolioData;
  const modalCopy = content?.modal || {};
  const tabOptions = modalCopy?.tabs || [
    { key: 'languages', label: 'Languages' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools' },
    { key: 'networking', label: 'Networking' },
    { key: 'design', label: 'Design' },
    { key: 'education', label: 'Education' },
    { key: 'projects', label: 'Projects' }
  ];
  const [activeTab, setActiveTab] = useState(tab || 'languages');

  useEffect(() => {
    setActiveTab(tab || 'languages');
  }, [tab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div
      className={`info-modal ${isOpen ? 'visible' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="infoModalTitle"
      onClick={handleBackdropClick}
    >
      <div className="info-modal-panel" role="document">
        <button
          className="modal-close"
          aria-label="Close info"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="modal-head">
          <h3 id="infoModalTitle">{modalCopy.title || 'Details'}</h3>
          <nav className="modal-tabs" role="tablist" aria-label="Info tabs">
            {tabOptions.map(item => (
              <button
                key={item.key}
                className={`tab-btn ${activeTab === item.key ? 'active' : ''}`}
                data-tab={item.key}
                role="tab"
                aria-selected={activeTab === item.key}
                onClick={() => handleTabClick(item.key)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="modal-body">
          {activeTab === 'languages' && (
            <div className="tab-panel">
              <ul className="lang-list">
                {skills.languages.map((lang, idx) => (
                  <li key={idx}>{lang}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'frameworks' && (
            <div className="tab-panel">
              <ul className="lang-list">
                {skills.frameworks.map((framework, idx) => (
                  <li key={idx}>{framework}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'databases' && (
            <div className="tab-panel">
              <ul className="lang-list">
                {skills.databases.map((db, idx) => (
                  <li key={idx}>{db}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="tab-panel">
              <ul className="lang-list">
                {skills.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'networking' && (
            <div className="tab-panel">
              <ul className="lang-list">
                {skills.networking.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="tab-panel">
              <ul className="lang-list">
                {skills.design.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="tab-panel">
              {skills.education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <h4>{edu.name}</h4>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="tab-panel">
              <ul className="project-list-modal">
                {portfolioData.projects.map((project) => (
                  <li key={project.id}>
                    <a href="#projects" className="modal-project-link">
                      {project.title} — View project
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
