import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend API
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "elvizekaj02@gmail.com",
      link: "mailto:elvizekaj02@gmail.com",
      description: "Send me an email for project inquiries"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/elvizekaj",
      link: "https://linkedin.com/in/elvizekaj",
      description: "Connect with me professionally"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/ezekaj",
      link: "https://github.com/ezekaj",
      description: "Check out my code repositories"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Call me for urgent matters"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Let's Collaborate on Your Next Project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h3>Send Me a Message</h3>
              <p>
                Have a project in mind? I'd love to hear about it. 
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, timeline, and requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="contact-methods-section">
              <h3>Other Ways to Reach Me</h3>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index} 
                    href={method.link} 
                    className="contact-method"
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-content">
                      <h4 className="method-title">{method.title}</h4>
                      <p className="method-value">{method.value}</p>
                      <p className="method-description">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="availability-section">
                <h4>Availability</h4>
                <div className="availability-info">
                  <div className="availability-item">
                    <span className="availability-label">Response Time:</span>
                    <span className="availability-value">Within 24 hours</span>
                  </div>
                  <div className="availability-item">
                    <span className="availability-label">Time Zone:</span>
                    <span className="availability-value">EST (UTC-5)</span>
                  </div>
                  <div className="availability-item">
                    <span className="availability-label">Preferred Contact:</span>
                    <span className="availability-value">Email or LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Project Types */}
              <div className="project-types-section">
                <h4>Project Types I Work On</h4>
                <ul className="project-types">
                  <li>Web Application Development</li>
                  <li>E-commerce Solutions</li>
                  <li>API Development & Integration</li>
                  <li>UI/UX Implementation</li>
                  <li>Performance Optimization</li>
                  <li>Technical Consulting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>What's your typical project timeline?</h4>
                <p>Project timelines vary based on complexity, but most web applications take 4-12 weeks from start to finish.</p>
              </div>
              <div className="faq-item">
                <h4>Do you work with international clients?</h4>
                <p>Yes! I work with clients worldwide and am comfortable with remote collaboration across different time zones.</p>
              </div>
              <div className="faq-item">
                <h4>What technologies do you specialize in?</h4>
                <p>I specialize in React, Node.js, TypeScript, and modern web technologies. Check my Skills page for the full list.</p>
              </div>
              <div className="faq-item">
                <h4>Do you provide ongoing maintenance?</h4>
                <p>Yes, I offer maintenance packages to keep your application updated, secure, and performing optimally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
