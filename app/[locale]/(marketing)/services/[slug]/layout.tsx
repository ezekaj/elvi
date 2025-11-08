// Generate static params for all service slugs

export async function generateStaticParams() {
  // All service slugs (English only)
  const slugs = [
    'software-development',
    'ai-solutions',
    'consulting',
    'digital-marketing',
    'design',
    'training',
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
