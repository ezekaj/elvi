/**
 * Structured Data (JSON-LD) Components for SEO
 * Provides rich snippets for Google and better LLM understanding
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://zedigital.tech/#organization',
    name: 'Z.E DIGITAL TECH SHPK',
    url: 'https://zedigital.tech',
    logo: 'https://zedigital.tech/logo.png',
    description:
      'Professional IT services company based in Albania, specializing in AI solutions, voice AI for hospitality (Sofia Hotel AI), custom software development, technology consulting, and digital transformation.',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tiranë',
      addressCountry: 'AL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'elsahaxhi@yahoo.com',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/zedigitaltech',
      'https://github.com/ezekaj',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://zedigital.tech/#localbusiness',
    name: 'Z.E DIGITAL TECH SHPK',
    image: 'https://zedigital.tech/logo.png',
    telephone: '+355',
    email: 'elsahaxhi@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tiranë',
      addressCountry: 'AL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3275,
      longitude: 19.8187,
    },
    url: 'https://zedigital.tech',
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://zedigital.tech/#website',
    name: 'Z.E DIGITAL TECH',
    url: 'https://zedigital.tech',
    publisher: {
      '@id': 'https://zedigital.tech/#organization',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: {
  name: string;
  description: string;
  url: string;
} }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@id': 'https://zedigital.tech/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Albania',
    },
    url: service.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({ post }: { post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  author: string;
} }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: post.image || 'https://zedigital.tech/og-image.jpg',
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@id': 'https://zedigital.tech/#organization',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
