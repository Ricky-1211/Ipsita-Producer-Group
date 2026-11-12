'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { CATEGORIES } from '@/data/categories';

export default function ContactForm({ preselectedProduct }: { preselectedProduct?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: preselectedProduct ? 'product-specific' : 'general',
    productName: preselectedProduct || '',
    purpose: 'Exhibition & Product Purchase',
    message: '',
  });

  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*New Catalogue Enquiry for Ipsita Producer Group*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Contact Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Interest Area:* ${formData.category}\n` +
      (formData.productName ? `*Specific Product:* ${formData.productName}\n` : '') +
      `*Purpose:* ${formData.purpose}\n` +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\n_Sent via Ipsita Producer Group Official Catalogue_`;

    const url = `https://wa.me/${BUSINESS.whatsAppNumber}?text=${encodeURIComponent(formattedMessage)}`;
    setPreparedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-beige p-6 sm:p-8 shadow-artisan">
      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-charcoal">
          Direct Artisan Enquiry
        </h3>
        <p className="text-xs text-charcoal/70 mt-1">
          Connect directly with Ipsita Producer Group in Dhenkanal. Submitting opens a pre-composed message directly on WhatsApp with your enquiry details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="name">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Sangeeta Mishra"
            className="w-full px-3.5 py-2.5 rounded-lg border border-beige bg-ivory-50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
          />
        </div>

        {/* Contact Phone */}
        <div>
          <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="phone">
            Your Contact Phone / WhatsApp Number <span className="text-terracotta">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g., 9876543210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-beige bg-ivory-50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
          />
        </div>

        {/* Category of Interest */}
        <div>
          <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="category">
            Category of Interest
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-beige bg-ivory-50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
          >
            <option value="General Catalogue Enquiry">General Catalogue Enquiry</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
            <option value="Exhibition Stall & Bulk Orders">Exhibition Stall & Bulk Orders</option>
            <option value="Custom Handcrafted Piece">Custom Handcrafted Piece</option>
          </select>
        </div>

        {/* Specific Product (if any) */}
        {formData.category !== 'General Catalogue Enquiry' && (
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="productName">
              Specific Product or Design (Optional)
            </label>
            <input
              id="productName"
              type="text"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              placeholder="e.g., Traditional Brass Surahi or Crescent Tribal Necklace"
              className="w-full px-3.5 py-2.5 rounded-lg border border-beige bg-ivory-50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
            />
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-charcoal mb-1.5" htmlFor="message">
            Your Note or Question (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share any special requirements, quantity, or exhibition stall queries..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-beige bg-ivory-50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Launch Enquiry in WhatsApp</span>
        </button>

        {preparedUrl && (
          <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-xs text-green-800 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <p>
              Your WhatsApp window was opened. If it didn&apos;t open automatically,{' '}
              <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold text-green-900">
                click here to send message
              </a>.
            </p>
          </div>
        )}

        <div className="pt-2 text-center">
          <span className="text-[11px] text-charcoal/50">Prefer a phone conversation?</span>
          <div className="mt-1">
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-earth hover:text-terracotta transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span>Call directly: {BUSINESS.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
