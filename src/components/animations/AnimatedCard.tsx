import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useAnimation } from '../../contexts/AnimationContext';
import { fadeInUp, viewport } from '../../config/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  index?: number;
  hoverScale?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0,
  index = 0,
  hoverScale = 1.02
}) => {
  const { animationsEnabled } = useAnimation();

  const calculatedDelay = delay + (index * 0.1);

  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any)?.transition,
        delay: calculatedDelay
      }
    }
  };

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customVariants}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
