'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const tCompany = useTranslations('company');

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    // Simulate API call - replace with real implementation
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', service: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--stone-light))] to-white">
      {/* Hero - Bridge Entrance */}
      <section className="relative overflow-hidden py-32 border-b border-[rgb(var(--stone-mid))]/20">
        <div className="absolute inset-0 bridge-texture opacity-20" />

        {/* Sunset glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] sunset-glow opacity-30 blur-3xl" />

        {/* Bridge entrance archway */}
        <div className="absolute top-0 left-0 right-0 h-48">
          <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
            {/* Entrance arch */}
            <path
              d="M 200 200 L 200 100 Q 600 0 1000 100 L 1000 200"
              fill="rgb(var(--stone-mid))"
              opacity="0.15"
            />
            <path
              d="M 250 200 L 250 120 Q 600 30 950 120 L 950 200"
              fill="none"
              stroke="rgb(var(--stone-dark))"
              strokeWidth="4"
              opacity="0.3"
            />

            {/* Keystone inscription */}
            <text
              x="600"
              y="60"
              textAnchor="middle"
              fontSize="24"
              fill="rgb(var(--stone-dark))"
              fontWeight="600"
              className="carved-text"
            >
              {t('title')}
            </text>
          </svg>
        </div>

        <div className="container-bridge relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-carved mb-2">{t('title')}</span>
            </h1>

            <p className="text-xl text-[rgb(var(--stone-dark))] leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-bridge">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Main crossing */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-carved mb-2">
                      {t('form.title') || 'Begin Your Crossing'}
                    </h2>
                    <p className="text-[rgb(var(--stone-dark))]">
                      {t('form.subtitle') || 'Fill in the details below to start your journey'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-carved mb-2">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 stone-block border-2 border-[rgb(var(--stone-mid))]/30 rounded-lg focus:outline-none focus:border-[rgb(var(--sunset-orange))] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-carved mb-2">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 stone-block border-2 border-[rgb(var(--stone-mid))]/30 rounded-lg focus:outline-none focus:border-[rgb(var(--sunset-orange))] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-carved mb-2">
                        {t('form.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 stone-block border-2 border-[rgb(var(--stone-mid))]/30 rounded-lg focus:outline-none focus:border-[rgb(var(--sunset-orange))] transition-colors"
                      >
                        <option value="">Select a pillar...</option>
                        <option value="software">Software Development</option>
                        <option value="ai">AI Solutions</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="design">Design Services</option>
                        <option value="training">Training & Education</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-carved mb-2">
                        {t('form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 stone-block border-2 border-[rgb(var(--stone-mid))]/30 rounded-lg focus:outline-none focus:border-[rgb(var(--sunset-orange))] transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={formState === 'sending'}
                      className="w-full bg-[rgb(var(--sunset-orange))] hover:bg-[rgb(var(--sunset-amber))] text-white px-8 py-6 text-base"
                    >
                      {formState === 'sending' ? (
                        <>{t('form.sending')}</>
                      ) : formState === 'success' ? (
                        <>
                          <CheckCircle2 className="mr-2 w-5 h-5" />
                          {t('form.success')}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          {t('form.submit')}
                        </>
                      )}
                    </Button>

                    {/* Success/Error Messages */}
                    {formState === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-[rgb(var(--valley-green))]/10 border-2 border-[rgb(var(--valley-green))] rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[rgb(var(--valley-green))]" />
                        <p className="text-sm text-[rgb(var(--valley-green))]">
                          {t('form.success')}
                        </p>
                      </motion.div>
                    )}

                    {formState === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-500 rounded-lg"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-sm text-red-600">
                          {t('form.error')}
                        </p>
                      </motion.div>
                    )}
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info - Bridge Details */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                  <h3 className="text-xl font-bold text-carved mb-6">
                    {t('info.title')}
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[rgb(var(--sunset-orange))]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[rgb(var(--sunset-orange))]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-carved mb-1">
                          {t('info.email')}
                        </div>
                        <a
                          href="mailto:info@zedigital.tech"
                          className="text-[rgb(var(--stone-dark))] hover:text-[rgb(var(--sunset-orange))] transition-colors"
                        >
                          info@zedigital.tech
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[rgb(var(--sunset-orange))]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[rgb(var(--sunset-orange))]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-carved mb-1">
                          {t('info.location')}
                        </div>
                        <p className="text-[rgb(var(--stone-dark))]">
                          {tCompany('office')}
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[rgb(var(--sunset-orange))]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[rgb(var(--sunset-orange))]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-carved mb-1">
                          {t('info.hours')}
                        </div>
                        <p className="text-[rgb(var(--stone-dark))]">
                          Mon-Fri: 9:00 - 18:00 CET<br />
                          Sat-Sun: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6 stone-block border-2 border-[rgb(var(--stone-mid))]/30">
                  <h3 className="text-xl font-bold text-carved mb-6">
                    Follow Our Journey
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="https://linkedin.com/company/zedigitaltech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 stone-block rounded-lg hover:shadow-lg transition-shadow border border-[rgb(var(--stone-mid))]/30"
                    >
                      <Linkedin className="w-5 h-5 text-[rgb(var(--sunset-orange))]" />
                      <span className="font-medium text-carved">LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/ezekaj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 stone-block rounded-lg hover:shadow-lg transition-shadow border border-[rgb(var(--stone-mid))]/30"
                    >
                      <Github className="w-5 h-5 text-[rgb(var(--sunset-orange))]" />
                      <span className="font-medium text-carved">GitHub</span>
                    </a>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 stone-block border-2 border-[rgb(var(--sunset-orange))]/30">
                  <h3 className="text-xl font-bold text-carved mb-4">
                    Quick Response
                  </h3>
                  <p className="text-sm text-[rgb(var(--stone-dark))]">
                    We typically respond within <span className="font-semibold text-[rgb(var(--sunset-orange))]">24 hours</span> on business days. For urgent matters, please mention it in your message.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Visualization - Journey starts here */}
      <section className="py-20 bg-gradient-to-b from-white to-[rgb(var(--stone-light))]/30">
        <div className="container-bridge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-carved mb-6">
              Your Journey Starts Here
            </h2>
            <p className="text-xl text-[rgb(var(--stone-dark))] mb-12">
              Every great bridge starts with the first step at the entrance. Once you cross, there&apos;s no limit to where you can go.
            </p>

            {/* Simple bridge entrance visualization */}
            <svg viewBox="0 0 600 200" className="w-full max-w-2xl mx-auto">
              {/* Ground */}
              <rect x="0" y="160" width="600" height="40" fill="rgb(var(--stone-dark))" />

              {/* Bridge entrance pillars */}
              <rect x="100" y="60" width="40" height="100" fill="rgb(var(--stone-mid))" />
              <rect x="460" y="60" width="40" height="100" fill="rgb(var(--stone-mid))" />

              {/* Entrance arch */}
              <path
                d="M 140 60 Q 300 10 460 60"
                fill="none"
                stroke="rgb(var(--stone-mid))"
                strokeWidth="30"
                strokeLinecap="round"
              />

              {/* "You are here" marker */}
              <g>
                <circle cx="50" cy="150" r="12" fill="rgb(var(--sunset-orange))">
                  <animate attributeName="opacity" from="0.5" to="1" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <text x="50" y="195" textAnchor="middle" fontSize="12" fill="rgb(var(--stone-dark))" fontWeight="600">
                  You Are Here
                </text>
              </g>

              {/* Path forward */}
              <path
                d="M 50 150 L 550 150"
                stroke="rgb(var(--sunset-orange))"
                strokeWidth="3"
                strokeDasharray="10,5"
                opacity="0.5"
              />

              {/* Destination */}
              <g>
                <circle cx="550" cy="150" r="12" fill="rgb(var(--valley-green))" />
                <text x="550" y="195" textAnchor="middle" fontSize="12" fill="rgb(var(--stone-dark))" fontWeight="600">
                  Success
                </text>
              </g>
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
