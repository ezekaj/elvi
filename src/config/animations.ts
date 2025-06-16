import { Variants } from 'framer-motion';

// Animation easing - using array format for cubic-bezier
export const easing = [0.4, 0, 0.2, 1] as const;

// Animation durations
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  stagger: 0.1
};

// Viewport settings for scroll-triggered animations
export const viewport = {
  once: true,
  amount: 0.2 // Trigger when 20% visible
};

// Common animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};

// Container variants for staggered animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: durations.stagger,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.fast,
      ease: easing
    }
  }
};

// Hero section specific animations
export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easing
    }
  }
};

export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easing,
      delay: 0.2
    }
  }
};

export const heroDescription: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easing,
      delay: 0.4
    }
  }
};

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easing,
      delay: 0.6
    }
  }
};

// Timeline specific animations
export const timelineDot: Variants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.fast,
      ease: easing
    }
  }
};

export const timelineCard: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};

// Statistics animation
export const statsCounter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easing
    }
  }
};
