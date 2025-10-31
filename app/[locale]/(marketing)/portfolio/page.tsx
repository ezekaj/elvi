'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const tCommon = useTranslations('common');

  const projects = getProjects();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--stone-light))] to-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 border-b border-[rgb(var(--stone-mid))]/20">
        <div className="absolute inset-0 bridge-texture opacity-20" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] sunset-glow opacity-30 blur-3xl" />

        <div className="container-bridge relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 stone-block rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[rgb(var(--sunset-orange))]" />
              <span className="text-sm font-semibold text-carved tracking-wide">
                {t('badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-carved mb-2">{t('hero.title')}</span>
              <span className="block text-bridge-primary">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-xl text-[rgb(var(--stone-dark))] leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>

        {/* Bridge visualization showing stones */}
        <div className="container-bridge mt-16 relative z-10">
          <svg viewBox="0 0 1200 200" className="w-full max-w-6xl mx-auto">
            {/* Water */}
            <rect x="0" y="160" width="1200" height="40" className="water-flow" rx="4" />

            {/* Main arch */}
            <path
              d="M 100 160 Q 600 40 1100 160"
              fill="none"
              stroke="rgb(var(--stone-mid))"
              strokeWidth="60"
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* Bridge deck */}
            <rect x="80" y="140" width="1040" height="30" fill="rgb(var(--stone-dark))" rx="4" opacity="0.5" />

            {/* Individual stones (projects) */}
            {projects.slice(0, 12).map((_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <rect
                  x={90 + i * 85}
                  y="145"
                  width="75"
                  height="20"
                  fill="rgb(var(--stone-light))"
                  stroke="rgb(var(--stone-dark))"
                  strokeWidth="2"
                  rx="2"
                  className="hover:fill-[rgb(var(--sunset-orange))] transition-colors cursor-pointer"
                />
              </motion.g>
            ))}
          </svg>
        </div>
      </section>

      {/* Filter/Stats */}
      <section className="py-12 border-b border-[rgb(var(--stone-mid))]/20">
        <div className="container-bridge">
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-carved mb-2">
                {projects.length}
              </div>
              <div className="text-sm text-[rgb(var(--stone-mid))] carved-text">
                Stones Laid
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-carved mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-sm text-[rgb(var(--stone-mid))] carved-text">
                Technologies Used
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-carved mb-2">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-sm text-[rgb(var(--stone-mid))] carved-text">
                Crossings Completed
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Each as a Stone */}
      <section className="py-20">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-carved mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full stone-block hover:shadow-2xl transition-all border-2 border-[rgb(var(--stone-mid))]/30 hover:border-[rgb(var(--sunset-orange))]/50 overflow-hidden">
                  {/* Stone number badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 rounded-full stone-block flex items-center justify-center border-2 border-[rgb(var(--sunset-orange))] shadow-lg">
                      <span className="text-sm font-bold text-[rgb(var(--sunset-orange))]">
                        #{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Project visual */}
                  <div className="relative h-48 bg-gradient-to-br from-[rgb(var(--stone-mid))] to-[rgb(var(--stone-dark))] p-8 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bridge-texture opacity-20" />
                    <div className="relative z-10">
                      <div className="text-6xl mb-2">{project.icon}</div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'completed'
                          ? 'bg-[rgb(var(--valley-green))]/20 text-[rgb(var(--valley-green))] border border-[rgb(var(--valley-green))]'
                          : 'bg-[rgb(var(--sunset-orange))]/20 text-[rgb(var(--sunset-orange))] border border-[rgb(var(--sunset-orange))]'
                      }`}>
                        {project.status === 'completed' ? 'Completed' : 'In Progress'}
                      </div>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-carved mb-2 group-hover:text-[rgb(var(--sunset-orange))] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[rgb(var(--stone-dark))]">
                        {project.description}
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--stone-mid))]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      {project.team && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Code className="w-4 h-4" />
                        <span>{project.technologies.length} techs</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium stone-block rounded border border-[rgb(var(--stone-mid))]/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-[rgb(var(--stone-mid))]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-[rgb(var(--stone-mid))]/20">
                      {project.github && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 stone-block border-[rgb(var(--stone-mid))]/30"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-[rgb(var(--sunset-orange))] hover:bg-[rgb(var(--sunset-amber))] text-white"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[rgb(var(--stone-light))]/30 to-[rgb(var(--sunset-orange))]/10">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-carved mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[rgb(var(--sunset-orange))] hover:bg-[rgb(var(--sunset-amber))] text-white px-8"
              >
                <Link href="/contact">
                  {t('cta.primary')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="stone-block border-2 border-[rgb(var(--stone-mid))]"
              >
                <Link href="/#pillars">{t('cta.secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Project data
function getProjects() {
  return [
    {
      id: 1,
      title: 'Sofia Hotel AI',
      description: 'Voice AI receptionist for hospitality - qualifying leads and connecting with booking managers via Twilio integration.',
      icon: '🏨',
      year: '2025',
      team: 'Solo',
      status: 'completed' as const,
      technologies: ['Python', 'Twilio', 'OpenAI', 'FastAPI', 'WebRTC'],
      github: 'https://github.com/ezekaj/sofia-hotel-ai',
      demo: null,
    },
    {
      id: 2,
      title: 'Z.E Digital Tech',
      description: 'Modern company website with Albanian bridge metaphor - Next.js 15, full i18n support, and glassmorphism design.',
      icon: '🌉',
      year: '2025',
      team: 'Solo',
      status: 'in-progress' as const,
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'next-intl'],
      github: 'https://github.com/ezekaj/ze-digital-tech',
      demo: 'https://zedigital.tech',
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Interactive portfolio with React 19, Framer Motion animations, and mobile-first design showcasing projects and skills.',
      icon: '💼',
      year: '2025',
      team: 'Solo',
      status: 'completed' as const,
      technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'React Router'],
      github: 'https://github.com/ezekaj/elvi',
      demo: 'https://zedigital.tech',
    },
    {
      id: 4,
      title: 'Email Verification System',
      description: 'Zero-knowledge email proof system for Ethereum - built during ETHGlobal hackathon with Scaffold-ETH 2.',
      icon: '📧',
      year: '2024',
      team: 'Hackathon Team',
      status: 'completed' as const,
      technologies: ['Solidity', 'Hardhat', 'Next.js', 'TypeScript', 'ZK Proofs'],
      github: 'https://github.com/ezekaj/eth-global-project',
      demo: null,
    },
    {
      id: 5,
      title: 'AI Chat Application',
      description: 'Intelligent chatbot with natural language processing and context-aware responses powered by modern LLMs.',
      icon: '🤖',
      year: '2024',
      team: 'Solo',
      status: 'completed' as const,
      technologies: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'React'],
      github: null,
      demo: null,
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      description: 'Full-stack online store with payment integration, inventory management, and admin dashboard.',
      icon: '🛒',
      year: '2024',
      team: 'Team of 3',
      status: 'completed' as const,
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma', 'TypeScript'],
      github: null,
      demo: null,
    },
  ];
}
