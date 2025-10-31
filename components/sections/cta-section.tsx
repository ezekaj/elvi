'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  const t = useTranslations('homepage.cta');

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white)]" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                {t('button')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
