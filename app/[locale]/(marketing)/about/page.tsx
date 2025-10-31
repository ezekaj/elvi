'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Building2,
  Users,
  Award,
  MapPin,
  Calendar,
  Hammer,
  Lightbulb,
  Target,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const tCompany = useTranslations('company');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--stone-light))] to-white">
      {/* Hero - The Foundation */}
      <section className="relative overflow-hidden py-32 border-b border-[rgb(var(--stone-mid))]/20">
        <div className="absolute inset-0 bridge-texture opacity-20" />

        {/* Sunrise behind mountains */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] sunset-glow opacity-30 blur-3xl" />

        <div className="container-bridge relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 stone-block rounded-full mb-8">
              <Building2 className="w-4 h-4 text-[rgb(var(--sunset-orange))]" />
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

        {/* Foundation stone decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="stone-block px-12 py-6 rounded-lg shadow-2xl border-4 border-[rgb(var(--sunset-orange))]">
            <div className="text-center">
              <div className="text-xs text-[rgb(var(--stone-mid))] font-semibold mb-1 carved-text">
                {tCompany('registration')}
              </div>
              <div className="text-2xl font-bold text-carved">
                {tCompany('registrationDate')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story - Building the Bridge */}
      <section className="py-32">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-carved mb-6">
              {t('story.title')}
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-3xl mx-auto">
              {t('story.subtitle')}
            </p>
          </motion.div>

          {/* Timeline of construction */}
          <div className="max-w-5xl mx-auto space-y-16">
            {getStoryMilestones(t).map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual side */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-square max-w-sm mx-auto">
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                      {/* Different construction stage for each milestone */}
                      {renderConstructionStage(index)}
                    </svg>
                  </div>
                </div>

                {/* Content side */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full stone-block flex items-center justify-center border-4 border-[rgb(var(--sunset-orange))]">
                        <span className="text-xl font-bold text-[rgb(var(--sunset-orange))]">
                          {index + 1}
                        </span>
                      </div>
                      <div className="text-sm text-[rgb(var(--stone-mid))] font-semibold carved-text">
                        {milestone.stage}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-carved">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-[rgb(var(--stone-dark))] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Builders - The Team */}
      <section className="py-20 bg-gradient-to-b from-white to-[rgb(var(--stone-light))]/30">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 stone-block rounded-full mb-6">
              <Users className="w-4 h-4 text-[rgb(var(--sunset-orange))]" />
              <span className="text-sm font-semibold text-carved">
                {tCompany('team.title')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-carved mb-6">
              {t('team.title')}
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center stone-block hover:shadow-2xl transition-shadow border-4 border-[rgb(var(--sunset-orange))]/30">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full stone-block flex items-center justify-center shadow-lg border-4 border-[rgb(var(--sunset-orange))]">
                  <Hammer className="w-16 h-16 text-[rgb(var(--sunset-orange))]" />
                </div>
                <h3 className="text-2xl font-bold text-carved mb-2">
                  {tCompany('team.founder')}
                </h3>
                <p className="text-[rgb(var(--sunset-orange))] font-semibold mb-4">
                  {tCompany('team.founderRole')}
                </p>
                <p className="text-[rgb(var(--stone-dark))]">
                  {t('team.founderDescription')}
                </p>
              </Card>
            </motion.div>

            {/* Administrator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center stone-block hover:shadow-2xl transition-shadow border-4 border-[rgb(var(--valley-green))]/30">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full stone-block flex items-center justify-center shadow-lg border-4 border-[rgb(var(--valley-green))]">
                  <Award className="w-16 h-16 text-[rgb(var(--valley-green))]" />
                </div>
                <h3 className="text-2xl font-bold text-carved mb-2">
                  {tCompany('team.admin')}
                </h3>
                <p className="text-[rgb(var(--valley-green))] font-semibold mb-4">
                  {tCompany('team.adminRole')}
                </p>
                <p className="text-[rgb(var(--stone-dark))]">
                  {t('team.adminDescription')}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - The Principles */}
      <section className="py-20">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-carved mb-6">
              {t('values.title')}
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] max-w-3xl mx-auto">
              {t('values.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getValues(t).map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center stone-block hover:shadow-2xl transition-shadow border-2 border-[rgb(var(--stone-mid))]/30 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-[rgb(var(--sunset-orange))]/10 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-carved mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[rgb(var(--stone-dark))]">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Foundation */}
      <section className="py-20 bg-gradient-to-b from-white to-[rgb(var(--stone-light))]/30">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-carved mb-6">
                {t('legal.title')}
              </h2>
              <p className="text-xl text-[rgb(var(--stone-dark))]">
                {t('legal.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-[rgb(var(--sunset-orange))] mt-1" />
                  <div>
                    <h3 className="font-semibold text-carved mb-2">
                      {tCompany('registration')}
                    </h3>
                    <p className="text-[rgb(var(--stone-dark))]">
                      {tCompany('registrationNumber')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-[rgb(var(--sunset-orange))] mt-1" />
                  <div>
                    <h3 className="font-semibold text-carved mb-2">
                      Registration Date
                    </h3>
                    <p className="text-[rgb(var(--stone-dark))]">
                      {tCompany('registrationDate')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-[rgb(var(--sunset-orange))] mt-1" />
                  <div>
                    <h3 className="font-semibold text-carved mb-2">
                      Legal Form
                    </h3>
                    <p className="text-[rgb(var(--stone-dark))]">
                      {tCompany('legalForm')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[rgb(var(--sunset-orange))] mt-1" />
                  <div>
                    <h3 className="font-semibold text-carved mb-2">
                      {tCompany('location')}
                    </h3>
                    <p className="text-[rgb(var(--stone-dark))]">
                      {tCompany('office')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
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
            <Heart className="w-16 h-16 mx-auto mb-6 text-[rgb(var(--sunset-orange))]" />
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
                <Link href="/contact">{t('cta.primary')}</Link>
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

// Helper functions
function getStoryMilestones(t: any) {
  return [
    {
      stage: 'Stage 1',
      title: t('story.milestone1.title'),
      description: t('story.milestone1.description'),
    },
    {
      stage: 'Stage 2',
      title: t('story.milestone2.title'),
      description: t('story.milestone2.description'),
    },
    {
      stage: 'Stage 3',
      title: t('story.milestone3.title'),
      description: t('story.milestone3.description'),
    },
    {
      stage: 'Stage 4',
      title: t('story.milestone4.title'),
      description: t('story.milestone4.description'),
    },
  ];
}

function getValues(t: any) {
  return [
    {
      icon: <Lightbulb className="w-8 h-8 text-[rgb(var(--sunset-orange))]" />,
      title: t('values.value1.title'),
      description: t('values.value1.description'),
    },
    {
      icon: <Target className="w-8 h-8 text-[rgb(var(--sunset-orange))]" />,
      title: t('values.value2.title'),
      description: t('values.value2.description'),
    },
    {
      icon: <Heart className="w-8 h-8 text-[rgb(var(--sunset-orange))]" />,
      title: t('values.value3.title'),
      description: t('values.value3.description'),
    },
    {
      icon: <Award className="w-8 h-8 text-[rgb(var(--sunset-orange))]" />,
      title: t('values.value4.title'),
      description: t('values.value4.description'),
    },
  ];
}

function renderConstructionStage(stage: number) {
  // Different construction visualization for each stage
  const stages = [
    // Stage 1: Foundation and ground prep
    <>
      <rect x="0" y="250" width="300" height="50" fill="rgb(var(--stone-dark))" />
      <rect x="50" y="220" width="200" height="30" fill="rgb(var(--stone-mid))" opacity="0.6" />
      <text x="150" y="285" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">
        Foundation
      </text>
    </>,
    // Stage 2: First pillars rising
    <>
      <rect x="0" y="250" width="300" height="50" fill="rgb(var(--stone-dark))" />
      <rect x="50" y="150" width="40" height="100" fill="rgb(var(--stone-mid))" />
      <rect x="210" y="150" width="40" height="100" fill="rgb(var(--stone-mid))" />
      {[...Array(4)].map((_, i) => (
        <rect key={i} x="50" y={150 + i * 25} width="40" height="23" fill="rgb(var(--stone-light))" stroke="rgb(var(--stone-dark))" strokeWidth="1" />
      ))}
      {[...Array(4)].map((_, i) => (
        <rect key={i} x="210" y={150 + i * 25} width="40" height="23" fill="rgb(var(--stone-light))" stroke="rgb(var(--stone-dark))" strokeWidth="1" />
      ))}
    </>,
    // Stage 3: Arch taking shape
    <>
      <rect x="0" y="250" width="300" height="50" fill="rgb(var(--stone-dark))" />
      <rect x="50" y="150" width="40" height="100" fill="rgb(var(--stone-mid))" />
      <rect x="210" y="150" width="40" height="100" fill="rgb(var(--stone-mid))" />
      <path
        d="M 90 150 Q 150 80 210 150"
        fill="none"
        stroke="rgb(var(--stone-mid))"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </>,
    // Stage 4: Complete bridge
    <>
      <rect x="0" y="250" width="300" height="50" fill="rgb(var(--stone-dark))" />
      <rect x="50" y="150" width="40" height="100" fill="rgb(var(--stone-mid))" />
      <rect x="210" y="150" width="40" height="100" fill="rgb(var(--stone-mid))" />
      <path
        d="M 90 150 Q 150 80 210 150"
        fill="none"
        stroke="rgb(var(--stone-mid))"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <rect x="80" y="140" width="140" height="15" fill="rgb(var(--stone-dark))" rx="2" />
      <circle cx="150" cy="147" r="8" fill="rgb(var(--gold))" className="drop-shadow-lg">
        <animate attributeName="opacity" from="0.5" to="1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </>,
  ];

  return stages[stage] || stages[0];
}
