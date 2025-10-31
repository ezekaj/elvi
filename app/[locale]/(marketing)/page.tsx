import { HeroBridge } from '@/components/sections/hero-bridge';
import { PillarsBridge } from '@/components/sections/pillars-bridge';
import { CTAModern } from '@/components/sections/cta-modern';

export default function HomePage() {
  return (
    <>
      <HeroBridge />
      <PillarsBridge />
      <CTAModern />
    </>
  );
}
