import { portfolioData } from '../../store/portfolioData';
import './Projects.css';

export default function Projects() {
  const { projects, content } = portfolioData;
  const projectsCopy = content?.projects || {};

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">{projectsCopy.title || 'Featured Work'}</h2>
        <p className="projects-intro">
          {projectsCopy.intro || 'A showcase of recent projects demonstrating design, frontend development and integration work.'}
        </p>

        <div className="projects-list" role="list">
          {projects.map(project => (
            <article key={project.id} className="project-card" role="listitem">
              <figure className="project-thumb">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
              </figure>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    className="btn btn-ghost"
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-primary"
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
