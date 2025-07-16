import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Landwirtschaftsbetrieb Paul Hantusch Leipzig - Agrardienstleistungen Sachsen',
  description: 'Professionelle landwirtschaftliche Dienstleistungen in Leipzig und Umgebung. John Deere Traktor, Pflanzenschutz, Düngung, Transport, Winterdienst. Einsatzgebiet: 200km um Leipzig.',
  keywords: 'Landwirtschaft Leipzig, Traktor mieten Leipzig, Pflanzenschutz Sachsen, Düngung Leipzig, Transport Leipzig, Winterdienst Leipzig, John Deere Leipzig, Agrardienstleistungen Sachsen, Landwirt Leipzig, Paul Hantusch, Bodenbearbeitung Leipzig, Häckselgut Transport, Schüttgut Transport Leipzig',
  authors: [{ name: 'Paul Hantusch - Landwirtschaftsbetrieb Leipzig' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Landwirtschaftsbetrieb Paul Hantusch Leipzig - Agrardienstleistungen Sachsen',
    description: 'Professionelle landwirtschaftliche Dienstleistungen in Leipzig und Umgebung. John Deere Traktor, Pflanzenschutz, Düngung, Transport, Winterdienst.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Landwirtschaftsbetrieb Paul Hantusch Leipzig',
    images: [
      {
        url: '/images/maschinen/john-deere-6250r.jpg',
        width: 1200,
        height: 630,
        alt: 'John Deere 6250R Traktor - Landwirtschaftsbetrieb Paul Hantusch Leipzig'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landwirtschaftsbetrieb Paul Hantusch Leipzig - Agrardienstleistungen',
    description: 'Professionelle landwirtschaftliche Dienstleistungen in Leipzig und Umgebung. John Deere Traktor, Pflanzenschutz, Düngung, Transport, Winterdienst.',
    images: ['/images/maschinen/john-deere-6250r.jpg']
  },
  alternates: {
    canonical: 'https://landwirtschaft-paul-hantusch-leipzig.de'
  },
  other: {
    'geo.region': 'DE-SN',
    'geo.placename': 'Leipzig',
    'geo.position': '51.3397;12.3731',
    'ICBM': '51.3397, 12.3731'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/fonts/inter.css" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
