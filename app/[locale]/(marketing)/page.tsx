'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { NetworkGrid } from '@/components/geometric/NetworkGrid';
import {
  Cpu,
  Code,
  Brain,
  Lightbulb,
  Palette,
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  X
} from 'lucide-react';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = ['hero', 'vision', 'capabilities', 'impact', 'team', 'connect'];

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  return (
    <div ref={containerRef} className="relative pt-16">
      {/* Animated Network Background */}
      <NetworkGrid nodeCount={40} connectionDistance={180} />

      {/* Scroll Indicators */}
      <div className="scroll-indicator hidden lg:flex">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="section-container section-padding min-h-screen flex items-center justify-center geometric-bg"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center space-y-12 relative z-10"
        >
          {/* Company Name with Geometric Frame */}
          <div className="wireframe-border inline-block px-12 py-8">
            <h1 className="text-minimal-hero">
              Z.E DIGITAL TECH
            </h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-minimal-body max-w-2xl mx-auto"
          >
            AI-Driven Digital Innovation & Consulting
          </motion.p>

          {/* Geometric Accent Lines */}
          <div className="flex items-center justify-center gap-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-px bg-blue-primary"
            />
            <div className="network-node" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-px bg-blue-primary"
            />
          </div>

          {/* Scroll Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <p className="text-minimal-caption mb-4">Explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-16 bg-gradient-to-b from-blue-primary to-transparent mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* VISION SECTION */}
      <section
        id="vision"
        className="section-container section-padding min-h-screen flex items-center justify-center network-pattern"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-8"
        >
          <h2 className="text-minimal-section">Building Tomorrow&apos;s Solutions</h2>
          <p className="text-minimal-body">
            Founded in 2025, we specialize in artificial intelligence, software development,
            and digital transformation. Every line of code, every algorithm, every strategy—crafted
            to connect your vision with technological reality.
          </p>
          <div className="flex justify-center gap-12 pt-8">
            <div>
              <div className="text-5xl font-light text-blue-primary mb-2">2025</div>
              <div className="text-minimal-caption">Founded</div>
            </div>
            <div className="w-px bg-tech-grey-200" />
            <div>
              <div className="text-5xl font-light text-blue-primary mb-2">100%</div>
              <div className="text-minimal-caption">Client Success</div>
            </div>
            <div className="w-px bg-tech-grey-200" />
            <div>
              <div className="text-5xl font-light text-blue-primary mb-2">6</div>
              <div className="text-minimal-caption">Core Services</div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* CAPABILITIES SECTION */}
      <section
        id="capabilities"
        className="section-container section-padding wireframe-grid"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="text-center space-y-4">
            <h2 className="text-minimal-section">Capabilities</h2>
            <p className="text-minimal-body max-w-2xl mx-auto">
              Six pillars of expertise supporting your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(index)}
                className="geometric-card p-8 cursor-pointer group"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-blue-primary flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div className="text-minimal-caption text-blue-primary">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-tech-dark group-hover:text-blue-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-tech-grey-500 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Service Detail Overlay */}
      {selectedService !== null && (
        <div className="overlay-backdrop" onClick={() => setSelectedService(null)}>
          <div className="overlay-content p-12" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 p-2 hover:bg-tech-grey-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 border-2 border-blue-primary flex items-center justify-center">
                  {services[selectedService].icon}
                </div>
                <div>
                  <div className="text-minimal-caption text-blue-primary">
                    Service 0{selectedService + 1}
                  </div>
                  <h2 className="text-4xl font-light">{services[selectedService].title}</h2>
                </div>
              </div>
              <p className="text-xl text-tech-grey-500 leading-relaxed">
                {services[selectedService].description}
              </p>
              <div>
                <h3 className="text-2xl font-light mb-4">What We Deliver</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {services[selectedService].deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="network-node mt-1" />
                      <span className="text-tech-grey-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="section-divider" />

      {/* IMPACT SECTION */}
      <section
        id="impact"
        className="section-container section-padding bg-tech-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-minimal-section">Impact</h2>
            <p className="text-minimal-body max-w-2xl mx-auto">
              Solutions deployed across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="geometric-card p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-6xl">{project.icon}</div>
                  <div className="text-minimal-caption text-blue-primary">
                    {project.year}
                  </div>
                </div>
                <h3 className="text-xl font-light">{project.title}</h3>
                <p className="text-sm text-tech-grey-500">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-tech-grey-100 text-tech-grey-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* TEAM SECTION */}
      <section
        id="team"
        className="section-container section-padding network-pattern"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-minimal-section">Team</h2>
            <p className="text-minimal-body max-w-2xl mx-auto">
              Leadership driving innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="geometric-card p-8 text-center space-y-4"
              >
                <div className="w-24 h-24 mx-auto border-2 border-blue-primary flex items-center justify-center text-4xl font-light text-blue-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-light">{member.name}</h3>
                  <p className="text-minimal-caption text-blue-primary mt-2">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm text-tech-grey-500 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* CONNECT SECTION */}
      <section
        id="connect"
        className="section-container section-padding min-h-screen flex items-center justify-center geometric-bg"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-minimal-section">Let&apos;s Connect</h2>
            <p className="text-minimal-body">
              Ready to start your digital transformation?
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted! (Demo)');
          }}>
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Name"
                required
                className="input-minimal"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="input-minimal"
              />
            </div>
            <input
              type="text"
              placeholder="Company (Optional)"
              className="input-minimal"
            />
            <textarea
              placeholder="Tell us about your project..."
              required
              rows={6}
              className="textarea-minimal"
            />
            <div className="flex justify-center">
              <button type="submit" className="btn-primary glow-pulse">
                Start Conversation
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center gap-8 pt-8 border-t border-tech-grey-200">
            <a href="mailto:elsahaxhi@yahoo.com" className="btn-ghost flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a href="https://linkedin.com/company/zedigitaltech" target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/ezekaj" target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="text-center text-minimal-caption">
            <p>Tiranë, Albania • M52231011N • EST. 2025</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Data
const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom web and mobile applications built with modern technologies',
    icon: <Code className="w-6 h-6 text-blue-primary" />,
    deliverables: ['Web Applications', 'Mobile Apps', 'API Development', 'E-commerce Solutions']
  },
  {
    id: 2,
    title: 'AI Solutions',
    description: 'Machine learning and artificial intelligence implementation',
    icon: <Brain className="w-6 h-6 text-blue-primary" />,
    deliverables: ['Custom ML Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    id: 3,
    title: 'Technology Consulting',
    description: 'Strategic guidance for digital transformation and innovation',
    icon: <Lightbulb className="w-6 h-6 text-blue-primary" />,
    deliverables: ['Technology Strategy', 'Architecture Review', 'Code Audits', 'Performance Optimization']
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies and campaign execution',
    icon: <Cpu className="w-6 h-6 text-blue-primary" />,
    deliverables: ['SEO Optimization', 'Content Strategy', 'Social Media Management', 'Analytics & Reporting']
  },
  {
    id: 5,
    title: 'Design Services',
    description: 'User-centered design for digital products and experiences',
    icon: <Palette className="w-6 h-6 text-blue-primary" />,
    deliverables: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'Design Systems']
  },
  {
    id: 6,
    title: 'Training & Education',
    description: 'Technical training and skill development programs',
    icon: <GraduationCap className="w-6 h-6 text-blue-primary" />,
    deliverables: ['Developer Training', 'AI/ML Courses', 'Team Workshops', 'Certification Prep']
  }
];

const projects = [
  { id: 1, title: 'Sofia Hotel AI', description: 'Voice AI receptionist for hospitality', icon: '🏨', year: '2025', technologies: ['Python', 'Twilio', 'OpenAI'] },
  { id: 2, title: 'Z.E Digital Tech', description: 'Modern company website', icon: '🌐', year: '2025', technologies: ['Next.js', 'TypeScript', 'Tailwind'] },
  { id: 3, title: 'Email Verification', description: 'ZK proof system for Ethereum', icon: '📧', year: '2024', technologies: ['Solidity', 'Hardhat', 'ZK Proofs'] },
  { id: 4, title: 'AI Chat Platform', description: 'Intelligent chatbot system', icon: '🤖', year: '2024', technologies: ['Python', 'LangChain', 'FastAPI'] },
  { id: 5, title: 'E-commerce Platform', description: 'Full-stack online store', icon: '🛒', year: '2024', technologies: ['Next.js', 'PostgreSQL', 'Stripe'] },
  { id: 6, title: 'Analytics Dashboard', description: 'Real-time data visualization', icon: '📊', year: '2024', technologies: ['React', 'D3.js', 'Node.js'] }
];

const team = [
  {
    name: 'Elvi Zekaj',
    role: 'Founder & Technical Vision',
    description: 'Full-stack developer and AI specialist driving technological innovation'
  },
  {
    name: 'Elsa Zekaj',
    role: 'Administrator & Strategy',
    description: 'Strategic leadership ensuring operational excellence and business growth'
  }
];
