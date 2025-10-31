'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { services } from '@/config/services';
import { motion } from 'framer-motion';

export function ServicesGrid() {
  const t = useTranslations('homepage.services');
  const tServices = useTranslations('services');
  const tCommon = useTranslations('common');

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const serviceKey = service.id.replace('-', '');
            const camelCaseKey = serviceKey.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            
            // Map service IDs to translation keys
            const translationKeyMap: Record<string, string> = {
              'software-development': 'softwareDevelopment',
              'ai-solutions': 'aiSolutions',
              'consulting': 'consulting',
              'digital-marketing': 'marketing',
              'design': 'design',
              'training': 'training',
            };

            const translationKey = translationKeyMap[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <CardTitle className="text-xl">
                      {tServices(`${translationKey}.title`)}
                    </CardTitle>
                    <CardDescription>
                      {tServices(`${translationKey}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="group/btn w-full justify-between">
                      <Link href={`/services/${service.id}`}>
                        {tCommon('learnMore')}
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">
              {tCommon('viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
