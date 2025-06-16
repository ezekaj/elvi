import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAnimation } from '../../contexts/AnimationContext';
import { statsCounter, viewport } from '../../config/animations';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  suffix = '',
  className = '',
  delay = 0
}) => {
  const { animationsEnabled } = useAnimation();
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!animationsEnabled || !isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp + (delay * 1000);
      
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(end * easeOutQuart));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay, animationsEnabled, isInView]);

  if (!animationsEnabled) {
    return (
      <span className={className}>
        {end}{suffix}
      </span>
    );
  }

  const customVariants = {
    ...statsCounter,
    visible: {
      ...statsCounter.visible,
      transition: {
        ...statsCounter.visible?.transition,
        delay
      }
    }
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customVariants}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
