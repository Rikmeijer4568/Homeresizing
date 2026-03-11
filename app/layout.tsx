import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCTABar } from '@/components/layout/MobileCTABar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homeresizing.nl'),
  title: {
    default: 'Home Resizing — Zorgeloos kleiner wonen',
    template: '%s | Home Resizing',
  },
  description:
    'Professionele verhuisregie en downsizing voor mensen die kleiner willen wonen. Wij begeleiden uw verhuizing van A tot Z: sorteren, verhuizen, inrichten. Heel Nederland.',
  keywords: [
    'kleiner wonen begeleiding',
    'verhuiscoach downsizing',
    'downsizing hulp',
    'ontspullen',
    'woning opruimen bij verhuizing',
    'verhuizing naar appartement begeleiding',
    'inpakservice bij verhuizing',
    'woning bezemschoon',
  ],
  authors: [{ name: 'Home Resizing' }],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Home Resizing',
    title: 'Home Resizing — Zorgeloos kleiner wonen',
    description: 'Professionele verhuisregie en downsizing voor mensen die kleiner willen wonen. Heel Nederland.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Home Resizing',
  description:
    'Professionele verhuisregie en downsizing voor mensen die kleiner willen wonen. Wij begeleiden uw verhuizing van A tot Z.',
  url: 'https://www.homeresizing.nl',
  telephone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  serviceType: ['Verhuisregie', 'Downsizing', 'Ontspullen', 'Inrichtingsservice'],
  priceRange: '€€',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="bg-white text-[#1C2B3A] antialiased">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <MobileCTABar />

        {/* Skip to content link (accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-[#1B3A5C] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold"
        >
          Ga naar inhoud
        </a>
      </body>
    </html>
  );
}
