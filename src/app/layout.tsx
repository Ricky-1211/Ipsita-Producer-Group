import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline} | Dhenkanal, Odisha`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `Official product catalogue of Ipsita Producer Group from Dhenkanal, Odisha. Handcrafted tribal necklaces, brass & metal handicrafts, framed tribal art, and souvenir pieces under the Subhadra Shakti initiative. Udyam: ${BUSINESS.udyamRegistration}.`,
  keywords: [
    'Ipsita Producer Group',
    'Tribal Jewellery Odisha',
    'Odisha Handicrafts',
    'Dhenkanal Handicrafts',
    'Brass Handicrafts Odisha',
    'Framed Tribal Art',
    'Subhadra Shakti Initiative',
    'Udyam Registered Artisans',
    'AKAMA College Trade Fair',
    'Authentic Indian Crafts'
  ],
  authors: [{ name: 'Ipsita Producer Group' }],
  creator: 'Ipsita Producer Group',
  publisher: 'Ipsita Producer Group',
  metadataBase: new URL('https://ipsita-producer-group.vercel.app'),
  openGraph: {
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: `Authentic tribal jewellery, brass handicrafts, and framed folk art from Dhenkanal, Odisha. Handcrafted by local artisans under the Subhadra Shakti initiative.`,
    url: 'https://ipsita-producer-group.vercel.app',
    siteName: BUSINESS.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/ipsita_brand_banner.png',
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - ${BUSINESS.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: `Authentic tribal jewellery, brass handicrafts, and framed folk art from Dhenkanal, Odisha.`,
    images: ['/images/ipsita_brand_banner.png'],
  },
  icons: {
    icon: '/images/ipsita_logo.png',
    apple: '/images/ipsita_logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased selection:bg-gold selection:text-ivory font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
