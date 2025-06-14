import { useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

const ContactPage = () => {
  useScrollToTop();
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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cyan-400">Get In</span>{' '}
              <span className="text-purple-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Let's Collaborate on Your Next Project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Send Me a Message</h3>
              <p className="text-slate-300 mb-6">
                Have a project in mind? I'd love to hear about it.
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Other Ways to Reach Me</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-center p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="text-3xl mr-4">{method.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{method.title}</h4>
                        <p className="text-cyan-400 text-sm">{method.value}</p>
                        <p className="text-slate-400 text-sm">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-yellow-400 mb-4">Availability</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Response Time:</span>
                    <span className="text-white font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Time Zone:</span>
                    <span className="text-white font-medium">EST (UTC-5)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Preferred Contact:</span>
                    <span className="text-white font-medium">Email or LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Project Types */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-green-400 mb-4">Project Types I Work On</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    Web Application Development
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    API Development & Integration
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    UI/UX Implementation
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    Performance Optimization
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    Technical Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-cyan-400">Frequently Asked</span>{' '}
              <span className="text-purple-400">Questions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-cyan-400 mb-3">What's your typical project timeline?</h4>
                <p className="text-slate-300">Project timelines vary based on complexity, but most web applications take 4-12 weeks from start to finish.</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-purple-400 mb-3">Do you work with international clients?</h4>
                <p className="text-slate-300">Yes! I work with clients worldwide and am comfortable with remote collaboration across different time zones.</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-yellow-400 mb-3">What technologies do you specialize in?</h4>
                <p className="text-slate-300">I specialize in React, Node.js, TypeScript, and modern web technologies. Check my Skills page for the full list.</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-green-400 mb-3">Do you provide ongoing maintenance?</h4>
                <p className="text-slate-300">Yes, I offer maintenance packages to keep your application updated, secure, and performing optimally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
