export const services = [
  {
    id: 'software-development',
    icon: '💻',
    color: 'primary',
  },
  {
    id: 'ai-solutions',
    icon: '🤖',
    color: 'accent',
  },
  {
    id: 'consulting',
    icon: '📊',
    color: 'primary',
  },
  {
    id: 'digital-marketing',
    icon: '📱',
    color: 'accent',
  },
  {
    id: 'design',
    icon: '🎨',
    color: 'primary',
  },
  {
    id: 'training',
    icon: '📚',
    color: 'accent',
  },
] as const;

export type Service = (typeof services)[number];
