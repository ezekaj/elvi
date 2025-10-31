'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroBridge() {
  const t = useTranslations('homepage.hero');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bridgeProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[rgb(var(--stone-light))] to-white"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bridge-texture opacity-30" />
      
      {/* Sunset glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] sunset-glow opacity-20 blur-3xl" />

      {/* Mountains silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(var(--shadow))]/10 to-transparent" />

      <div className="container-bridge relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 stone-block rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--sunset-orange))] animate-pulse" />
              <span className="text-sm font-semibold text-carved tracking-wide">
                {useTranslations('common')('tagline')}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="block text-carved">{t('title')}</span>
                <span className="block text-bridge-primary">{t('subtitle')}</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[rgb(var(--stone-dark))] leading-relaxed max-w-xl"
            >
              {t('description')}
            </motion.p>

            {/* Journey markers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-8 py-4"
            >
              <div className="flex items-center gap-2 text-sm text-[rgb(var(--stone-mid))]">
                <MapPin className="w-4 h-4 text-[rgb(var(--sunset-orange))]" />
                <span className="font-medium">{t('journey')}</span>
              </div>
              <div className="flex-1 journey-line" />
              <div className="flex items-center gap-2 text-sm text-[rgb(var(--valley-green))]">
                <span className="font-medium">{t('destination')}</span>
                <MapPin className="w-4 h-4" />
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="group bg-[rgb(var(--sunset-orange))] hover:bg-[rgb(var(--sunset-amber))] text-white px-8 py-6 text-base rounded-xl shadow-lg transition-all hover:shadow-2xl"
              >
                <Link href="/services">
                  {t('cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="stone-block px-8 py-6 text-base rounded-xl border-2 border-[rgb(var(--stone-mid))] hover:border-[rgb(var(--stone-dark))]"
              >
                <Link href="/about">{t('cta.secondary')}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Bridge illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Simplified bridge arch SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
              >
                {/* Water */}
                <rect
                  x="0"
                  y="320"
                  width="400"
                  height="80"
                  className="water-flow"
                  rx="4"
                />
                
                {/* Bridge arch */}
                <path
                  d="M 50 320 Q 200 200 350 320"
                  fill="none"
                  stroke="rgb(var(--stone-mid))"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                
                {/* Bridge deck */}
                <rect
                  x="40"
                  y="300"
                  width="320"
                  height="24"
                  fill="rgb(var(--stone-dark))"
                  rx="4"
                />
                
                {/* Stones texture */}
                {[...Array(6)].map((_, i) => (
                  <motion.rect
                    key={i}
                    x={60 + i * 50}
                    y="305"
                    width="40"
                    height="14"
                    fill="rgb(var(--stone-light))"
                    stroke="rgb(var(--stone-dark))"
                    strokeWidth="1"
                    rx="2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  />
                ))}
                
                {/* Albania marker */}
                <g>
                  <circle cx="60" cy="290" r="8" fill="rgb(var(--sunset-orange))" />
                  <text x="60" y="270" textAnchor="middle" fontSize="12" fill="rgb(var(--stone-dark))" fontWeight="600">
                    🇦🇱
                  </text>
                </g>
                
                {/* World marker */}
                <g>
                  <circle cx="340" cy="290" r="8" fill="rgb(var(--valley-green))" />
                  <text x="340" y="270" textAnchor="middle" fontSize="12" fill="rgb(var(--stone-dark))" fontWeight="600">
                    🌍
                  </text>
                </g>
                
                {/* Journey progress indicator */}
                <circle
                  cx="60"
                  cy="312"
                  r="6"
                  fill="rgb(var(--gold))"
                  className="drop-shadow-lg"
                >
                  <animate
                    attributeName="cx"
                    from="60"
                    to="340"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
              
              {/* Floating service icons around bridge */}
              <motion.div
                className="absolute top-10 -left-4 w-16 h-16 stone-block rounded-xl flex items-center justify-center shadow-xl float-gentle"
                style={{ animationDelay: '0s' }}
              >
                <span className="text-3xl">💻</span>
              </motion.div>
              
              <motion.div
                className="absolute top-10 -right-4 w-16 h-16 stone-block rounded-xl flex items-center justify-center shadow-xl float-gentle"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-3xl">🤖</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-32 -left-8 w-16 h-16 stone-block rounded-xl flex items-center justify-center shadow-xl float-gentle"
                style={{ animationDelay: '2s' }}
              >
                <span className="text-3xl">🎨</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-32 -right-8 w-16 h-16 stone-block rounded-xl flex items-center justify-center shadow-xl float-gentle"
                style={{ animationDelay: '1.5s' }}
              >
                <span className="text-3xl">📱</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Begin Journey</span>
      </div>
    </section>
  );
}
