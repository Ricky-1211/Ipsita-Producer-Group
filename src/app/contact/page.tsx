import React from 'react';
import { Metadata } from 'next';
import { Phone, MapPin, MessageCircle, ShieldCheck, Sparkles, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton, { DirectCallButton } from '@/components/WhatsAppButton';
import { MandalaDivider } from '@/components/DecorativeMotif';

export const metadata: Metadata = {
  title: 'Contact & Exhibition Inquiries | Ipsita Producer Group',
  description:
    'Contact Ipsita Producer Group from Dhenkanal, Odisha. Call +91 77518 90401 or enquire via WhatsApp for tribal jewellery, brass handicrafts, and exhibition orders.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
          Direct Artisan Connect
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal mt-1 mb-3">
          Contact & Stall Enquiries
        </h1>
        <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
          Connect directly with the artisans of Ipsita Producer Group for catalogue inquiries, college exhibition stalls, bulk souvenir gifting, and custom tribal craft pieces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Verified Business Information & Stall Overview */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Contact Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-beige shadow-artisan space-y-6">
            <h2 className="font-serif text-xl font-bold text-earth border-b border-beige pb-3">
              Verified Enterprise Details
            </h2>

            {/* Direct Phone */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-gold/40 flex items-center justify-center flex-shrink-0 text-terracotta">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider block">
                  Official Contact Phone
                </span>
                <a
                  href={BUSINESS.phoneTel}
                  className="font-serif text-lg font-bold text-earth hover:text-terracotta transition-colors"
                >
                  {BUSINESS.phoneFormatted}
                </a>
                <p className="text-xs text-charcoal/60 mt-0.5">
                  Available for phone calls and direct WhatsApp messaging.
                </p>
              </div>
            </div>

            {/* Postal Address */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-gold/40 flex items-center justify-center flex-shrink-0 text-terracotta">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs leading-relaxed">
                <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider block mb-1">
                  Registered Rural Address
                </span>
                <p className="font-medium text-charcoal">{BUSINESS.village}</p>
                <p className="text-charcoal/80">Po: {BUSINESS.postOffice}, Ps: {BUSINESS.policeStation}</p>
                <p className="text-charcoal/80">Via: {BUSINESS.via}</p>
                <p className="text-charcoal/80">Dist: {BUSINESS.districtFull}, State: {BUSINESS.state}</p>
                <p className="font-semibold text-earth mt-1">PIN: {BUSINESS.pin}</p>
              </div>
            </div>

            {/* Legal / Scheme Verification */}
            <div className="p-4 rounded-xl bg-ivory-50 border border-gold/30 space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Udyam Reg: <strong className="font-mono text-earth">{BUSINESS.udyamRegistration}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span>Initiative: <strong className="text-earth">{BUSINESS.initiative}</strong> ({BUSINESS.initiativeAgency})</span>
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <WhatsAppButton
                customText="Direct Chat on WhatsApp"
                className="w-full justify-center text-xs py-3"
              />
              <DirectCallButton className="w-full text-xs py-3" />
            </div>
          </div>

          {/* Exhibition Stall Support Note (From PRD) */}
          <div className="bg-earth text-ivory rounded-2xl p-6 border border-gold/40 shadow-sm space-y-3">
            <h3 className="font-serif text-base font-bold text-gold">
              Trade Fair & Exhibition Presence
            </h3>
            <p className="text-xs text-ivory/80 leading-relaxed">
              As presented at the <strong>AKAMA College Trade Fair</strong>, our stall setup utilizes dual-sided lighting and eye-level hanging lines for jewellery, with framed tribal art and brass surahi arranged on presentation tables.
            </p>
            <div className="text-[11px] text-ivory/70 pt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Prepared by Group 14 on behalf of Ipsita Producer Group</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Working Enquiry Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

