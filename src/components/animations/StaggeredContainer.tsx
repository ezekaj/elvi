import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../../contexts/AnimationContext';
import { staggerContainer, staggerItem, viewport } from '../../config/animations';

interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  childDelay = 0.1
}) => {
  const { animationsEnabled } = useAnimation();

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  const customStaggerContainer = {
    ...staggerContainer,
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customStaggerContainer}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const StaggeredItem: React.FC<StaggeredItemProps> = ({
  children,
  className = '',
  index = 0
}) => {
  const { animationsEnabled } = useAnimation();

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
};

export default StaggeredContainer;
