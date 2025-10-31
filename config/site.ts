export const siteConfig = {
  name: 'Z.E DIGITAL TECH',
  nameFull: 'Z.E DIGITAL TECH SHPK',
  description:
    'Professional IT services company based in Albania, serving globally. Custom software development, AI solutions, and digital services.',
  url: 'https://zedigital.tech',
  ogImage: 'https://zedigital.tech/og-image.jpg',
  links: {
    github: 'https://github.com/ezekaj',
    linkedin: 'https://www.linkedin.com/in/elvizekaj',
  },
  company: {
    registration: 'M52231011N',
    registrationDate: 'October 31, 2025',
    legalForm: 'SHPK (Limited Liability Company)',
    location: 'Tiranë, Albania',
    address:
      'Rruga Hamdi Sina, Nr. Pasurie 151/69+1-25/2, Ap. 23 Shk 1, Sauk, Farke, Tiranë',
    email: 'contact@zedigital.tech',
    phone: '+355 XX XXX XXXX',
  },
  team: [
    {
      name: 'Elvi Zekaj',
      role: 'Owner & Founder',
      term: 'From October 22, 2025',
    },
    {
      name: 'Elsa Zekaj',
      role: 'Administrator',
      term: 'October 22, 2025 - October 21, 2030',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
