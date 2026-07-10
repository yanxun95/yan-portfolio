import type { Metadata } from 'next';
import { Geist, Geist_Mono, Jura, Oswald } from 'next/font/google';
import './globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jura = Jura({
  variable: '--font-jura',
  subsets: ['latin'],
  weight: ['500'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Yan',
  description:
    'Frontend Engineer with 4 years of experience building scalable, data-driven web applications. Experienced in Vue and React.',
  openGraph: {
    title: 'Yan',
    description:
    'Frontend Engineer with 4 years of experience building scalable, data-driven web applications. Experienced in Vue and React.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} ${oswald.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
