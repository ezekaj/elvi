import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * 360,
    }));

    setParticles(initialParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const radians = (particle.direction * Math.PI) / 180;
          let newX = particle.x + Math.cos(radians) * particle.speed;
          let newY = particle.y + Math.sin(radians) * particle.speed;

          // Wrap around screen edges
          if (newX > 100) newX = -5;
          if (newX < -5) newX = 100;
          if (newY > 100) newY = -5;
          if (newY < -5) newY = 100;

          return {
            ...particle,
            x: newX,
            y: newY,
            direction: particle.direction + (Math.random() - 0.5) * 2, // Slight direction change
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-accent/40 to-brand-secondary-accent/40 blur-sm animate-glow-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 200}ms`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Additional static particles for depth */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={`static-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-brand-accent/20 to-brand-secondary-accent/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${i * 300}ms`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
