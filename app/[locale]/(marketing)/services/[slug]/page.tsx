'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Lightbulb, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

const services = [
  'softwareDevelopment',
  'aiSolutions',
  'consulting',
  'marketing',
  'design',
  'training',
] as const;

type ServiceKey = typeof services[number];

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  // Map slug to service key
  const serviceKey = services.find(
    (key) => t(`${key}.slug`) === slug
  ) as ServiceKey | undefined;

  if (!serviceKey) {
    notFound();
  }

  const pillarNumber = services.indexOf(serviceKey) + 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--stone-light))] to-white">
      {/* Arch overhead - looking up */}
      <section className="relative overflow-hidden py-20 border-b border-[rgb(var(--stone-mid))]/20">
        <div className="absolute inset-0 bridge-texture opacity-20" />

        {/* Arch decoration */}
        <div className="absolute top-0 left-0 right-0 h-32">
          <svg
            viewBox="0 0 1200 150"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 150 Q 600 0 1200 150"
              fill="rgb(var(--stone-mid))"
              opacity="0.1"
            />
            <path
              d="M 100 150 Q 600 30 1100 150"
              fill="none"
              stroke="rgb(var(--stone-dark))"
              strokeWidth="3"
              opacity="0.3"
            />
          </svg>

          {/* Keystone with service name */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 stone-block px-8 py-4 rounded-lg shadow-2xl">
            <div className="text-center">
              <div className="text-xs text-[rgb(var(--stone-mid))] font-semibold mb-1 carved-text">
                {t(`${serviceKey}.pillarNumber`)}
              </div>
              <h1 className="text-2xl font-bold text-carved">
                {t(`${serviceKey}.title`)}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-bridge relative z-10 pt-32">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              asChild
              variant="ghost"
              className="gap-2 hover:gap-3 transition-all text-[rgb(var(--stone-dark))]"
            >
              <Link href="/#pillars">
                <ArrowLeft className="w-4 h-4" />
                Back to All Pillars
              </Link>
            </Button>
          </motion.div>

          {/* Service intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 stone-block rounded-full text-sm">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--sunset-orange))] animate-pulse" />
                <span className="font-semibold text-carved">
                  Pillar #{pillarNumber} of 6
                </span>
              </div>

              <p className="text-xl text-[rgb(var(--stone-dark))] leading-relaxed">
                {t(`${serviceKey}.description`)}
              </p>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[rgb(var(--sunset-orange))] hover:bg-[rgb(var(--sunset-amber))] text-white px-8"
                >
                  <Link href="/contact">
                    {tCommon('getQuote')}
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Pillar structure visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <svg viewBox="0 0 300 400" className="w-full max-w-sm mx-auto">
                {/* Ground */}
                <rect x="0" y="380" width="300" height="20" fill="rgb(var(--stone-dark))" />

                {/* Pillar base */}
                <rect x="100" y="320" width="100" height="60" fill="rgb(var(--stone-mid))" opacity="0.6" />

                {/* Main pillar */}
                <rect x="110" y="100" width="80" height="220" fill="rgb(var(--stone-mid))" />

                {/* Pillar stones */}
                {[...Array(8)].map((_, i) => (
                  <motion.g key={i}>
                    <rect
                      x="110"
                      y={100 + i * 27}
                      width="80"
                      height="25"
                      fill="rgb(var(--stone-light))"
                      stroke="rgb(var(--stone-dark))"
                      strokeWidth="1"
                      opacity="0.8"
                    />
                  </motion.g>
                ))}

                {/* Arch supported by this pillar */}
                <path
                  d="M 20 100 Q 150 20 280 100"
                  fill="none"
                  stroke="rgb(var(--stone-mid))"
                  strokeWidth="20"
                  strokeLinecap="round"
                />

                {/* Pillar number badge */}
                <circle cx="150" cy="210" r="30" fill="rgb(var(--sunset-orange))" />
                <text
                  x="150"
                  y="220"
                  textAnchor="middle"
                  fontSize="24"
                  fill="white"
                  fontWeight="bold"
                >
                  {pillarNumber}
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build - Service-specific features */}
      <section className="py-20">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-carved mb-4">
              What This Pillar Supports
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-2xl mx-auto">
              The foundation stones that make this service strong and reliable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServiceFeatures(serviceKey).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full stone-block hover:shadow-2xl transition-shadow border-2 border-[rgb(var(--stone-mid))]/30">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(var(--sunset-orange))]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[rgb(var(--sunset-orange))]" />
                  </div>
                  <h3 className="text-lg font-semibold text-carved mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[rgb(var(--stone-dark))]">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build - Process */}
      <section className="py-20 bg-gradient-to-b from-white to-[rgb(var(--stone-light))]/30">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-carved mb-4">
              How We Build This Pillar
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-2xl mx-auto">
              Our proven construction process for {t(`${serviceKey}.title`).toLowerCase()}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {getBuildingProcess(serviceKey).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full stone-block flex items-center justify-center shadow-lg border-4 border-[rgb(var(--sunset-orange))]">
                    <span className="text-2xl font-bold text-[rgb(var(--sunset-orange))]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-carved mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--stone-dark))]">
                    {step.description}
                  </p>
                </div>

                {/* Connection line to next step */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 journey-line" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - The Materials */}
      <section className="py-20">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 stone-block rounded-full mb-6">
              <Wrench className="w-4 h-4 text-[rgb(var(--sunset-orange))]" />
              <span className="text-sm font-semibold text-carved">
                Building Materials
              </span>
            </div>
            <h2 className="text-4xl font-bold text-carved mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-2xl mx-auto">
              The finest materials to build your pillar strong
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {getTechnologies(serviceKey).map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 stone-block rounded-lg border-2 border-[rgb(var(--stone-mid))]/30 hover:border-[rgb(var(--sunset-orange))]/50 transition-colors"
              >
                <span className="font-medium text-carved">{tech}</span>
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
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-[rgb(var(--sunset-orange))]" />
            <h2 className="text-4xl font-bold text-carved mb-6">
              Ready to Build This Pillar?
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] mb-8">
              Every great bridge starts with a conversation. Let's discuss how {t(`${serviceKey}.title`).toLowerCase()} can support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[rgb(var(--sunset-orange))] hover:bg-[rgb(var(--sunset-amber))] text-white px-8"
              >
                <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="stone-block border-2 border-[rgb(var(--stone-mid))]"
              >
                <Link href="/#pillars">View All Pillars</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Service-specific content helpers
function getServiceFeatures(serviceKey: ServiceKey) {
  const features: Record<ServiceKey, Array<{ title: string; description: string }>> = {
    softwareDevelopment: [
      { title: 'Web Applications', description: 'Scalable, responsive web apps built with modern frameworks' },
      { title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions' },
      { title: 'API Development', description: 'RESTful and GraphQL APIs for seamless integration' },
      { title: 'E-commerce', description: 'Complete online store solutions with payment integration' },
      { title: 'Custom CMS', description: 'Tailored content management systems' },
      { title: 'Progressive Web Apps', description: 'App-like experiences in the browser' },
    ],
    aiSolutions: [
      { title: 'Machine Learning', description: 'Custom ML models for your specific use case' },
      { title: 'Natural Language Processing', description: 'Text analysis, chatbots, and language understanding' },
      { title: 'Computer Vision', description: 'Image recognition and visual analysis systems' },
      { title: 'Predictive Analytics', description: 'Data-driven forecasting and insights' },
      { title: 'AI Integration', description: 'Integrate AI capabilities into existing systems' },
      { title: 'Automation', description: 'Intelligent process automation with AI' },
    ],
    consulting: [
      { title: 'Technology Strategy', description: 'Roadmap planning and tech stack selection' },
      { title: 'Architecture Review', description: 'System design evaluation and optimization' },
      { title: 'Code Audits', description: 'Quality assessment and improvement recommendations' },
      { title: 'Performance Optimization', description: 'Speed and efficiency improvements' },
      { title: 'Security Assessment', description: 'Vulnerability analysis and hardening' },
      { title: 'Team Training', description: 'Knowledge transfer and best practices' },
    ],
    marketing: [
      { title: 'SEO Optimization', description: 'Search engine visibility and organic growth' },
      { title: 'Content Strategy', description: 'Engaging content that converts visitors' },
      { title: 'Social Media', description: 'Multi-platform presence and engagement' },
      { title: 'Email Marketing', description: 'Automated campaigns and nurture sequences' },
      { title: 'Analytics', description: 'Data-driven marketing insights and reporting' },
      { title: 'Brand Building', description: 'Digital presence and reputation management' },
    ],
    design: [
      { title: 'UI/UX Design', description: 'Beautiful, intuitive user interfaces' },
      { title: 'Brand Identity', description: 'Logo, colors, and visual language' },
      { title: 'Prototyping', description: 'Interactive mockups before development' },
      { title: 'Responsive Design', description: 'Seamless experience across all devices' },
      { title: 'Design Systems', description: 'Consistent component libraries' },
      { title: 'Accessibility', description: 'Inclusive design for all users' },
    ],
    training: [
      { title: 'Developer Training', description: 'Modern web and mobile development skills' },
      { title: 'AI/ML Courses', description: 'Hands-on machine learning education' },
      { title: 'Team Workshops', description: 'Custom training for your tech stack' },
      { title: 'Best Practices', description: 'Code quality and professional standards' },
      { title: 'Mentorship', description: 'One-on-one guidance for career growth' },
      { title: 'Certification Prep', description: 'Prepare for industry certifications' },
    ],
  };
  return features[serviceKey];
}

function getBuildingProcess(serviceKey: ServiceKey) {
  const process: Record<ServiceKey, Array<{ title: string; description: string }>> = {
    softwareDevelopment: [
      { title: 'Discovery', description: 'Understanding requirements and goals' },
      { title: 'Design', description: 'Architecture and interface planning' },
      { title: 'Build', description: 'Iterative development with testing' },
      { title: 'Launch', description: 'Deployment and ongoing support' },
    ],
    aiSolutions: [
      { title: 'Data Analysis', description: 'Assess data quality and requirements' },
      { title: 'Model Design', description: 'Select and configure AI approach' },
      { title: 'Training', description: 'Develop and refine the model' },
      { title: 'Integration', description: 'Deploy into production systems' },
    ],
    consulting: [
      { title: 'Assessment', description: 'Current state analysis and audit' },
      { title: 'Strategy', description: 'Recommendations and roadmap' },
      { title: 'Implementation', description: 'Execute improvements' },
      { title: 'Review', description: 'Measure impact and iterate' },
    ],
    marketing: [
      { title: 'Research', description: 'Market and audience analysis' },
      { title: 'Strategy', description: 'Channel and content planning' },
      { title: 'Execution', description: 'Campaign launch and management' },
      { title: 'Optimize', description: 'Monitor, measure, and improve' },
    ],
    design: [
      { title: 'Research', description: 'User needs and competitive analysis' },
      { title: 'Concept', description: 'Visual exploration and wireframes' },
      { title: 'Design', description: 'High-fidelity mockups and prototypes' },
      { title: 'Deliver', description: 'Assets and design system' },
    ],
    training: [
      { title: 'Assess', description: 'Identify skill gaps and goals' },
      { title: 'Plan', description: 'Customize curriculum and schedule' },
      { title: 'Teach', description: 'Interactive lessons and projects' },
      { title: 'Support', description: 'Ongoing mentorship and resources' },
    ],
  };
  return process[serviceKey];
}

function getTechnologies(serviceKey: ServiceKey) {
  const tech: Record<ServiceKey, string[]> = {
    softwareDevelopment: [
      'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
      'MongoDB', 'Docker', 'AWS', 'Vercel', 'Tailwind CSS', 'GraphQL',
    ],
    aiSolutions: [
      'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Anthropic Claude',
      'Hugging Face', 'LangChain', 'Vector Databases', 'Python', 'FastAPI',
    ],
    consulting: [
      'System Architecture', 'Performance Analysis', 'Security Auditing',
      'Code Review Tools', 'CI/CD', 'Infrastructure as Code', 'Monitoring',
    ],
    marketing: [
      'Google Analytics', 'SEO Tools', 'Social Media Platforms', 'Email Marketing',
      'Content Management', 'A/B Testing', 'Marketing Automation',
    ],
    design: [
      'Figma', 'Adobe Creative Suite', 'Sketch', 'Framer', 'Principle',
      'Design Systems', 'Accessibility Tools', 'Prototyping',
    ],
    training: [
      'Custom Curriculum', 'Hands-on Projects', 'Code Review', 'Mentorship',
      'Workshop Facilitation', 'Documentation', 'Learning Platforms',
    ],
  };
  return tech[serviceKey];
}
