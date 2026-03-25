import './Contact.css';
import { portfolioData } from '../../store/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const { email, phone, location, social } = personal;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission handling
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    console.log('Form submitted:', data);
    
    // Reset form
    e.target.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactCopy = portfolioData?.content?.contact || {};

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="eyebrow center">{contactCopy.eyebrow || 'CONTACT'}</p>
        <h2 className="section-title center">{contactCopy.title || 'Get In Touch'}</h2>
        <p className="section-intro center">
          {contactCopy.intro || "I'm always open to discuss exciting projects and new opportunities. Let's collaborate!"}
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <i className="bi bi-envelope"></i>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="info-item">
              <i className="bi bi-telephone"></i>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="info-item">
              <i className="bi bi-geo-alt"></i>
              <span>{location}</span>
            </div>

            <div className="social-links">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
            {personal.cv && (
              <div className="cv-download">
                <a href={personal.cv} download className="cta-btn secondary">
                  <i className="bi bi-file-earmark-person"></i> Download CV
                </a>
              </div>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
