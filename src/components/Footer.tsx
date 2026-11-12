import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ShieldCheck, Heart, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { CATEGORIES } from '@/data/categories';
import { TraditionalBorder } from './DecorativeMotif';

export default function Footer() {
  return (
    <footer className="bg-earth text-ivory/90 border-t border-gold/40 relative overflow-hidden">
      {/* Decorative Traditional Border Header */}
      <TraditionalBorder className="text-gold/40 bg-earth-dark/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Enterprise Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/60 bg-white p-0.5">
                <Image
                  src="/images/ipsita_logo.png"
                  alt="Ipsita Producer Group Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-ivory tracking-tight">
                  {BUSINESS.name}
                </h3>
                <p className="text-xs text-gold font-serif italic">
                  {BUSINESS.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-ivory/75 leading-relaxed">
              Empowering rural artisans in Dhenkanal, Odisha through authentic tribal jewellery, traditional brass casting, and framed folk art. Every piece is handmade, unique, and steeped in cultural heritage.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>Udyam: <strong className="text-ivory font-mono">{BUSINESS.udyamRegistration}</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gold">
                <Sparkles className="w-4 h-4 flex-shrink-0 text-terracotta-light" />
                <span>{BUSINESS.initiative} • {BUSINESS.initiativeAgency}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product Collections */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Product Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/collections?category=${cat.id}`}
                    className="text-ivory/80 hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-gold/40 group-hover:text-gold transition-colors">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-gold/15">
              <span className="text-[11px] text-ivory/60 block mb-2 uppercase tracking-wide">
                Exhibition Highlight
              </span>
              <p className="text-xs text-ivory/80">
                Showcased at the <strong>AKAMA College Trade Fair</strong> and state handicraft expos.
              </p>
            </div>
          </div>

          {/* Column 3: Quick Navigation & Craft Values */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Enterprise & Craft
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home Catalogue
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold transition-colors">
                  Browse All Collections
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-gold transition-colors">
                  Our Story & Dhenkanal Roots
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact & Stall Inquiries
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-earth-dark/80 border border-gold/30">
              <span className="text-[11px] font-semibold text-gold block mb-1">
                Authentic Craftsmanship
              </span>
              <p className="text-[11px] text-ivory/70 leading-relaxed">
                Items are handmade, so each piece is unique. Displayed on hanging lines and presentation tables with clear price cards at exhibitions.
              </p>
            </div>
          </div>

          {/* Column 4: Verified Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Verified Contact
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-ivory/80 leading-relaxed">
                  <p className="font-medium text-ivory">{BUSINESS.village}, {BUSINESS.postOffice}</p>
                  <p>{BUSINESS.policeStation}, {BUSINESS.via}</p>
                  <p>{BUSINESS.districtFull}, PIN {BUSINESS.pin}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={BUSINESS.phoneTel}
                  className="text-ivory font-medium hover:text-gold transition-colors text-sm"
                >
                  {BUSINESS.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS.whatsAppNumber}?text=${encodeURIComponent(
                    'Namaste Ipsita Producer Group, I would like to enquire about your handicrafts catalogue.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-3.5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Verification Bar */}
        <div className="mt-12 pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/60 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-ivory/70">
            <span>Registered Producer Group</span>
            <span>•</span>
            <span className="text-gold">{BUSINESS.udyamRegistration}</span>
            <span>•</span>
            <span>Odisha, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

