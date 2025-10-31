import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Z.E DIGITAL TECH | Professional IT Solutions',
    template: '%s | Z.E DIGITAL TECH',
  },
  description:
    'Professional IT services company based in Albania, serving globally. Custom software development, AI solutions, technology consulting, and digital services.',
  keywords: [
    'IT services Albania',
    'software development',
    'AI solutions',
    'technology consulting',
    'digital marketing',
    'web development',
    'mobile apps',
  ],
  authors: [{ name: 'Z.E DIGITAL TECH SHPK' }],
  creator: 'Z.E DIGITAL TECH',
  metadataBase: new URL('https://zedigital.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sq_AL'],
    url: 'https://zedigital.tech',
    siteName: 'Z.E DIGITAL TECH',
    title: 'Z.E DIGITAL TECH | Professional IT Solutions',
    description:
      'Professional IT services company based in Albania, serving globally.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Z.E DIGITAL TECH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z.E DIGITAL TECH | Professional IT Solutions',
    description: 'Professional IT services from Albania to the world',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
