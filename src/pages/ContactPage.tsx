import { useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggeredContainer, { StaggeredItem } from '../components/animations/StaggeredContainer';
import AnimatedCard from '../components/animations/AnimatedCard';
import { heroTitle, heroDescription } from '../config/animations';

// Form submission states
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Form validation errors
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage = () => {
  useScrollToTop();
  const {
    pageBackground,
    textPrimary,
    textSecondary,
    accent,
    card,
    cardHover,
    sectionBackground,
    getSkillColors,
    input,
    buttonPrimary
  } = useThemeStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Form validation function
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submission handler with email integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors above and try again.');
      return;
    }

    setFormStatus('loading');
    setSubmitMessage('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\n` +
        `Sent from portfolio contact form`
      );

      const mailtoLink = `mailto:elvizekaj02@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormStatus('success');
      setSubmitMessage('Thank you for your message! Your email client should have opened with the message ready to send.');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormStatus('idle');
        setSubmitMessage('');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setSubmitMessage('Sorry, there was an error processing your message. Please try sending an email directly to elvizekaj02@gmail.com');
    }
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
      icon: "💬",
      title: "Discord",
      value: "Available upon request",
      link: "mailto:elvizekaj02@gmail.com?subject=Discord Contact Request",
      description: "Request Discord contact for project discussions"
    }
  ];

  return (
    <div className={`min-h-screen ${pageBackground} ${textPrimary}`}>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variants={heroTitle}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className={accent}>Get In</span>{' '}
                <span className="text-purple-400">Touch</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={heroDescription} delay={0.2}>
              <p className={`text-xl md:text-2xl ${textSecondary} leading-relaxed mb-8`}>
                Let's Collaborate on Your Next Project
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className={`py-20 px-6 ${sectionBackground}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedCard className={`${card} ${cardHover} rounded-2xl p-8`} delay={0.4}>
              <h3 className={`text-2xl font-bold ${accent} mb-4`}>Send Me a Message</h3>
              <p className={`${textSecondary} mb-6`}>
                Have a project in mind? I'd love to hear about it.
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              {/* Form Status Message */}
              {submitMessage && (
                <AnimatedCard className={`p-4 rounded-lg mb-6 ${
                  formStatus === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : formStatus === 'error'
                    ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                    : 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400'
                }`}>
                  <p className="text-sm">{submitMessage}</p>
                </AnimatedCard>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${textSecondary} mb-2`}>
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === 'loading'}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 ${input} border ${
                      formErrors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:ring-cyan-500'
                    } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${textSecondary} mb-2`}>
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === 'loading'}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 ${input} border ${
                      formErrors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:ring-cyan-500'
                    } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium ${textSecondary} mb-2`}>
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === 'loading'}
                    placeholder="Project inquiry, collaboration, etc."
                    className={`w-full px-4 py-3 ${input} border ${
                      formErrors.subject
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:ring-cyan-500'
                    } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${textSecondary} mb-2`}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus === 'loading'}
                    rows={6}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className={`w-full px-4 py-3 ${input} border ${
                      formErrors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:ring-cyan-500'
                    } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full px-8 py-3 ${buttonPrimary} rounded-lg font-semibold transition-all duration-200 ${
                    formStatus === 'loading'
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </AnimatedCard>

            {/* Contact Methods */}
            <div className="space-y-8">
              <AnimatedSection delay={0.6}>
                <h3 className={`text-2xl font-bold ${getSkillColors('purple').text} mb-6`}>Other Ways to Reach Me</h3>
              </AnimatedSection>
              <StaggeredContainer className="space-y-4" staggerDelay={0.1} childDelay={0.8}>
                {contactMethods.map((method, index) => (
                  <StaggeredItem key={index}>
                    <a
                      href={method.link}
                      className={`flex items-center p-4 ${card} ${cardHover} rounded-xl hover:border-cyan-500/50 transition-all duration-300 group`}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="text-3xl mr-4">{method.icon}</div>
                      <div className="flex-1">
                        <h4 className={`font-bold ${textPrimary} group-hover:${accent.replace('text-', 'text-')} transition-colors`}>{method.title}</h4>
                        <p className={`${accent} text-sm`}>{method.value}</p>
                        <p className={`${textSecondary} text-sm`}>{method.description}</p>
                      </div>
                    </a>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>

              {/* Availability */}
              <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6`} delay={1.0}>
                <h4 className={`text-lg font-bold ${getSkillColors('yellow').text} mb-4`}>Availability</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={textSecondary}>Response Time:</span>
                    <span className={`${textPrimary} font-medium`}>Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={textSecondary}>Time Zone:</span>
                    <span className={`${textPrimary} font-medium`}>CET (UTC+1)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={textSecondary}>Preferred Contact:</span>
                    <span className={`${textPrimary} font-medium`}>Email or LinkedIn</span>
                  </div>
                </div>
              </AnimatedCard>

              {/* Project Types */}
              <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6`} delay={1.2}>
                <h4 className={`text-lg font-bold ${getSkillColors('green').text} mb-4`}>Project Types I Work On</h4>
                <ul className="space-y-2">
                  <li className={`flex items-center ${textSecondary}`}>
                    <span className={`${accent} mr-2`}>•</span>
                    System Programming (C/C++)
                  </li>
                  <li className={`flex items-center ${textSecondary}`}>
                    <span className={`${accent} mr-2`}>•</span>
                    Web Development (React/TypeScript)
                  </li>
                  <li className={`flex items-center ${textSecondary}`}>
                    <span className={`${accent} mr-2`}>•</span>
                    Blockchain Development (Solidity)
                  </li>
                  <li className={`flex items-center ${textSecondary}`}>
                    <span className={`${accent} mr-2`}>•</span>
                    Algorithm Implementation
                  </li>
                  <li className={`flex items-center ${textSecondary}`}>
                    <span className={`${accent} mr-2`}>•</span>
                    Graphics Programming
                  </li>
                  <li className={`flex items-center ${textSecondary}`}>
                    <span className={`${accent} mr-2`}>•</span>
                    AI/LLM Integration Projects
                  </li>
                </ul>
              </AnimatedCard>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className={accent}>Frequently Asked</span>{' '}
                <span className={`${getSkillColors('purple').text}`}>Questions</span>
              </h3>
            </AnimatedSection>
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6`}>
                  <h4 className={`text-lg font-bold ${accent} mb-3`}>What's your typical project timeline?</h4>
                  <p className={textSecondary}>Project timelines vary based on complexity, but most web applications take 4-12 weeks from start to finish.</p>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6`}>
                  <h4 className={`text-lg font-bold ${getSkillColors('purple').text} mb-3`}>Do you work with international clients?</h4>
                  <p className={textSecondary}>Yes! I work with clients worldwide and am comfortable with remote collaboration across different time zones.</p>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6`}>
                  <h4 className={`text-lg font-bold ${getSkillColors('yellow').text} mb-3`}>What technologies do you specialize in?</h4>
                  <p className={textSecondary}>I specialize in C/C++, React, TypeScript, Solidity, and system programming. Currently studying at 42 School.</p>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6`}>
                  <h4 className={`text-lg font-bold ${getSkillColors('green').text} mb-3`}>Are you available for collaboration?</h4>
                  <p className={textSecondary}>Yes! I'm open to collaborating on interesting projects, hackathons, and learning opportunities. Let's connect!</p>
                </AnimatedCard>
              </StaggeredItem>
            </StaggeredContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
