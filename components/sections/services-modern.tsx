'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/config/services';

export function ServicesModern() {
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
    <section className="section bg-white">
      <div className="container-modern">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-heading-1 font-bold mb-6 gradient-text-modern">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const translationKey = translationKeyMap[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`} className="group block">
                  <div className="card-3d p-8 h-full">
                    {/* Icon */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text-accent transition-all">
                      {tServices(`${translationKey}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tServices(`${translationKey}.description`)}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
