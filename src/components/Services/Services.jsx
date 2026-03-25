import { portfolioData } from '../../store/portfolioData';
import './Services.css';

export default function Services() {
  const { services, content } = portfolioData;
  const servicesCopy = content?.services || {};

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="center">{servicesCopy.title || 'Our Features & Services'}</h2>
        <p className="projects-intro center">
          {servicesCopy.intro || 'Distinct offerings that include development, UX design and API integration.'}
          I offer end-to-end solutions: design and build performant web apps, APIs and user-focused interfaces.
        </p>
        <div className="services-grid" role="list">
          {services.map(service => (
            <article
              key={service.id}
              className="service-card"
              role="listitem"
              aria-labelledby={service.id}
            >
              <div className="service-illustration" aria-hidden="true">
                <i className={`${service.icon}`} style={{ fontSize: '34px', color: 'var(--accent-2)' }}></i>
              </div>
              <h3 id={service.id} className="service-title">
                {service.title}
              </h3>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
