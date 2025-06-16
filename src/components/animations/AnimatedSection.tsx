import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useAnimation } from '../../contexts/AnimationContext';
import { fadeInUp, viewport } from '../../config/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0,
  duration
}) => {
  const { animationsEnabled } = useAnimation();

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  const customVariants = duration || delay ? {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any)?.transition,
        delay,
        duration: duration || (variants.visible as any)?.transition?.duration
      }
    }
  } : variants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
