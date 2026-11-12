import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MandalaDivider } from '@/components/DecorativeMotif';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-ivory">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-beige shadow-artisan">
        <div className="w-16 h-16 mx-auto rounded-full bg-ivory-200 border-2 border-gold/50 flex items-center justify-center text-terracotta mb-4">
          <Sparkles className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
          404 • Page Not Found
        </span>

        <h1 className="font-serif text-3xl font-bold text-charcoal mt-2 mb-3">
          Piece Not In Catalogue
        </h1>

        <p className="text-xs text-charcoal/70 leading-relaxed mb-6">
          The craft piece or page you are looking for is either unavailable or has been relocated. Explore our four authentic categories or contact Ipsita Producer Group directly.
        </p>

        <div className="space-y-2.5">
          <Link
            href="/collections"
            className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-earth hover:bg-earth-light text-ivory text-xs font-semibold transition-colors"
          >
            <span>Browse Product Collections</span>
          </Link>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-earth/20 text-earth hover:bg-ivory text-xs font-medium transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="mt-6 pt-4 border-t border-beige">
          <WhatsAppButton
            customText="Need help? Ask on WhatsApp"
            variant="compact"
            className="text-xs"
          />
        </div>
      </div>
    </div>
  );
}

