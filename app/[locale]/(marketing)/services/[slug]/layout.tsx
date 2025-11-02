// Generate static params for all service slugs in both locales

export async function generateStaticParams() {
  // All service slugs from both English and Albanian
  const slugs = [
    // English slugs
    'software-development',
    'ai-solutions',
    'consulting',
    'digital-marketing',
    'design',
    'training',
    // Albanian slugs
    'zhvillim-software',
    'zgjidhje-ai',
    'keshillim',
    'marketing-dixhital',
    'dizajn',
    'trajnim',
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
