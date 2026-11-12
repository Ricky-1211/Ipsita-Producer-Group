'use client';

import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface WhatsAppButtonProps {
  productName?: string;
  productId?: string;
  categoryName?: string;
  variant?: 'floating' | 'primary' | 'secondary' | 'compact';
  customText?: string;
  className?: string;
}

export function generateWhatsAppUrl(productName?: string, productId?: string, categoryName?: string): string {
  let message = `Namaste Ipsita Producer Group, I am browsing your online handicrafts catalogue.`;

  if (productName) {
    message = `Namaste Ipsita Producer Group, I am interested in enquiring about: *${productName}*${productId ? ` (Code: ${productId})` : ''}${categoryName ? ` from *${categoryName}*` : ''}.\n\nCould you please share more details regarding availability, price, and exhibition display? Thank you!`;
  } else {
    message = `Namaste Ipsita Producer Group, I am interested in learning more about your tribal jewellery and handicraft collections from Dhenkanal, Odisha.`;
  }

  return `https://wa.me/${BUSINESS.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton({
  productName,
  productId,
  categoryName,
  variant = 'primary',
  customText,
  className = '',
}: WhatsAppButtonProps) {
  const url = generateWhatsAppUrl(productName, productId, categoryName);

  if (variant === 'floating') {
    return (
      <aside aria-label="Quick contact on WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
        <span
          id="whatsapp-tooltip"
          role="tooltip"
          className="mr-3 hidden md:block px-3 py-1.5 bg-earth text-ivory text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gold/40"
        >
          Chat with Ipsita Producer Group ({BUSINESS.phoneFormatted})
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire directly on WhatsApp with Ipsita Producer Group"
          aria-describedby="whatsapp-tooltip"
          className={`flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${className}`}
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </aside>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={customText || `Enquire on WhatsApp about ${productName || 'products'}`}
        className={`inline-flex items-center justify-center p-2 rounded-lg bg-[#25D366]/10 text-[#1EBE5D] hover:bg-[#25D366] hover:text-white transition-colors duration-200 ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    );
  }

  if (variant === 'secondary') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg border border-[#25D366] text-[#1EBE5D] bg-white hover:bg-[#25D366] hover:text-white transition-all duration-200 font-medium text-sm shadow-sm ${className}`}
      >
        <MessageCircle className="w-4 h-4" />
        <span>{customText || 'Enquire via WhatsApp'}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{customText || 'Enquire on WhatsApp'}</span>
    </a>
  );
}

export function DirectCallButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BUSINESS.phoneTel}
      className={`inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-earth hover:bg-earth-light text-ivory font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg border border-gold/40 ${className}`}
    >
      <PhoneCall className="w-4 h-4 text-gold" />
      <span>Call {BUSINESS.phoneFormatted}</span>
    </a>
  );
}
