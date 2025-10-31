'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/config/services';

export function PillarsBridge() {
  const t = useTranslations('homepage.services');
  const tServices = useTranslations('services');

  const translationKeyMap: Record<string, string> = {
    'software-development': 'softwareDevelopment',
    'ai-solutions': 'aiSolutions',
    'consulting': 'consulting',
    'digital-marketing': 'marketing',
    'design': 'design',
    'training': 'training',
  };

  return (
    <section className="section-bridge bg-white relative overflow-hidden">
      {/* Background arch shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 border-[40px] border-[rgb(var(--stone-mid))] rounded-t-full arch-top" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 border-[40px] border-[rgb(var(--stone-mid))] rounded-t-full arch-top" />
      </div>

      <div className="container-bridge relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <div className="inline-block px-4 py-2 mb-6 stone-block rounded-full">
            <span className="text-sm font-semibold text-[rgb(var(--sunset-orange))] uppercase tracking-wider">
              Our Foundation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-carved">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-[rgb(var(--stone-dark))] leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const translationKey = translationKeyMap[service.id];
            const pillarNumber = index + 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`} className="group block h-full">
                  <div className="arch-card relative h-full min-h-[320px] flex flex-col">
                    {/* Pillar number */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[rgb(var(--sunset-orange))]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[rgb(var(--sunset-orange))]">
                        {pillarNumber}
                      </span>
                    </div>

                    {/* Arch decoration */}
                    <div className="mb-6 relative">
                      <div className="w-full h-3 rounded-t-full border-4 border-[rgb(var(--stone-dark))]/20 border-b-0 arch-top" />
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-[rgb(var(--stone-mid))] mb-2 font-semibold">
                        {tServices(`${translationKey}.pillarNumber`)}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-carved group-hover:text-bridge-primary transition-all">
                        {tServices(`${translationKey}.title`)}
                      </h3>
                      <p className="text-[rgb(var(--stone-dark))] leading-relaxed mb-4">
                        {tServices(`${translationKey}.description`)}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[rgb(var(--sunset-orange))] mt-auto pt-4">
                      <span>Explore This Pillar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Stone texture overlay */}
                    <div className="absolute inset-0 bridge-texture opacity-10 pointer-events-none rounded-2xl" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge illustration showing all pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <svg viewBox="0 0 800 200" className="w-full h-auto">
            {/* Water */}
            <rect x="0" y="160" width="800" height="40" className="water-flow" />
            
            {/* Six arches */}
            {[...Array(6)].map((_, i) => {
              const x = 50 + i * 125;
              return (
                <g key={i}>
                  {/* Arch */}
                  <path
                    d={`M ${x} 160 Q ${x + 50} 100 ${x + 100} 160`}
                    fill="none"
                    stroke="rgb(var(--stone-mid))"
                    strokeWidth="20"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  {/* Pillar number */}
                  <text
                    x={x + 50}
                    y="140"
                    textAnchor="middle"
                    fontSize="12"
                    fill="rgb(var(--stone-dark))"
                    fontWeight="600"
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}
            
            {/* Bridge deck */}
            <rect
              x="40"
              y="150"
              width="720"
              height="16"
              fill="rgb(var(--stone-dark))"
              rx="4"
            />
          </svg>
          
          <p className="text-center text-sm text-[rgb(var(--stone-mid))] mt-6 italic">
            Six pillars, one strong bridge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
