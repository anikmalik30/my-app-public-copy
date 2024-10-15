import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Nav from '../components/Nav'; //test
import Header from '@/components/Header';
import { useMemo } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://anikmalik.com'),

  title: 'Anik Malik - Full Stack Developer in Ahmedabad',
  authors: {
    name: 'Anik Malik',
  },
  description:
    'Anik Malik - Full Stack Developer from Ahmedabad,  specializing in React, Next.js, TailwindCSS, Node.js, and TypeScript.',
  openGraph: {
    title: 'Anik Malik - Full Stack Developer in Ahmedabad',
    description:
      'Ahmedabad-based Full Stack Web Developer specializing in React, Next.js, NestJS, Node.js, and TypeScript.',
    url: 'https://anikmalik.com',
    siteName: 'Anik Malik',
    images: [
      {
        url: 'https://anikmalik.com/cube-fallback.webp',
        width: 1200,
        height: 630,
        alt: 'Anik Malik',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anikmalik4',
    title: 'Anik Malik',
    description:
      'Anik Malik - Full Stack Web Developer specializing in React, Next.js, TailwindCSS, Node.js, and TypeScript.',
    images: '/profile.png',
  },
  keywords: [
    'Web Developer',
    'React',
    'Next.js',
    'TailwindCSS',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Web Development',
    'Programming',
    'Software Engineer',
    'HTML',
    'CSS',
    'API Development',
    'REST',
    'GraphQL',
    'UI/UX Design',
    'Responsive Design',
    'Agile Development',
    'JavaScript Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Ahmedabad Full Stack Developer',
    'Web Developer in Gujarat',
    'Ahmedabad JavaScript Developer',
  ],
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Anik Malik',
      url: 'https://anikmalik.com',
      sameAs: [
        'https://www.linkedin.com/in/anik-malik-6bb8a1245',
        'https://github.com/anikmalik30',
        'https://X.com/anikmalik4',
      ],
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Anik Malik',
      },
      knowsAbout: [
        'Web Development',
        'React',
        'Next.js',
        'TailwindCSS',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'Frontend Development',
        'Backend Development',
        'Full Stack Development',
        'Programming',
        'Software Engineering',
        'HTML',
        'CSS',
        'API Development',
        'REST',
        'GraphQL',
        'UI/UX Design',
        'Responsive Design',
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = useMemo(() => <Header />, []);
  return (
    <html lang='en-US'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/favicon_io/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/favicon_io/apple-touch-icon.png' />
        <link
          rel='icon'
          href='/favicon_io/android-chrome-192x192.png'
          sizes='192x192'
        />
        <link
          rel='icon'
          href='/favicon_io/android-chrome-512x512.png'
          sizes='512x512'
        />
        <link rel='icon' href='/favicon_io/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' href='/favicon_io/favicon-16x16.png' sizes='16x16' />
        <link rel='manifest' href='/favicon_io/site.webmanifest' />
        <link rel='canonical' href='https://anikmalik.com/' />
        <meta name='theme-color' content='#000000' />

        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />

        <noscript>
          <p>JavaScript is required to view this website properly.</p>
        </noscript>
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {header}
          {children}
          <Nav />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
