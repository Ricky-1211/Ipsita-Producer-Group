import React, { Suspense } from 'react';
import { Metadata } from 'next';
import CollectionsClient from './CollectionsClient';

export const metadata: Metadata = {
  title: 'Product Collections | Tribal Jewellery & Handicrafts',
  description:
    'Browse the complete catalogue of Ipsita Producer Group: Tribal Necklaces & Jewellery, Brass & Metal Handicrafts, Framed Tribal Art & Wall Décor, and Gifting & Souvenir Pieces from Dhenkanal, Odisha.',
};

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-block w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm font-serif text-charcoal">Loading Ipsita Producer Group catalogue...</p>
        </div>
      }
    >
      <CollectionsClient />
    </Suspense>
  );
}
