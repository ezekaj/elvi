import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { ServicesGrid } from '@/components/sections/services-grid';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
