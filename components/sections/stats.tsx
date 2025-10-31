'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const stats = [
  { value: '5+', key: 'years' },
  { value: '50+', key: 'projects' },
  { value: '30+', key: 'clients' },
  { value: '10+', key: 'countries' },
];

export function Stats() {
  const t = useTranslations('homepage.stats');

  return (
    <section className="section-padding border-y bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {t(stat.key)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
