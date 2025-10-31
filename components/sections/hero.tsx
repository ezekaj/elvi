'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('homepage.hero');
  const tCommon = useTranslations('common');

  return (
    <section className="relative overflow-hidden section-padding bg-gradient-to-br from-background via-background to-primary-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/50 border border-primary-200">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                {tCommon('tagline')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
              {t('title')}{' '}
              <span className="gradient-text">{t('subtitle')}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/services">
                  {t('cta.primary')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">{t('cta.secondary')}</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary-600" />
                <span>Global Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-accent-600" />
                <span>Modern Tech</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main circle with glassmorphism */}
              <div className="absolute inset-0 glass-card rounded-full border-2 border-primary-200/50 shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">Z.E</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-bold gradient-text">DIGITAL TECH</p>
                    <p className="text-sm text-muted-foreground">Albania → World</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 w-20 h-20 rounded-xl glass-card border border-primary-300/50 flex items-center justify-center shadow-lg"
              >
                <span className="text-3xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-xl glass-card border border-accent-300/50 flex items-center justify-center shadow-lg"
              >
                <span className="text-3xl">🤖</span>
              </motion.div>

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl glass-card border border-primary-300/50 flex items-center justify-center shadow-lg"
              >
                <span className="text-3xl">🎨</span>
              </motion.div>

              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl glass-card border border-accent-300/50 flex items-center justify-center shadow-lg"
              >
                <span className="text-3xl">📱</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
