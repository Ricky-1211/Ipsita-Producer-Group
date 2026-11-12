import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/image';
import { ShieldCheck, Sparkles, MapPin, Phone, Users, Award, Hammer, Eye, ArrowRight } from 'lucide-react';
import { BUSINESS, STALL_STORY } from '@/data/business';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MandalaDivider, TraditionalBorder } from '@/components/DecorativeMotif';

export const metadata: Metadata = {
  title: 'Our Story | Artisan Heritage & Dhenkanal Roots',
  description:
    'Learn about Ipsita Producer Group, an artisan enterprise from Dhenkanal, Odisha, operating under the Subhadra Shakti initiative and registered under Udyam (UDYAM-OD-09-0050793).',
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col w-full bg-ivory">
      {/* 1. Header Hero Banner */}
      <section className="bg-earth text-ivory py-16 sm:py-20 border-b border-gold/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Heritage • Dhenkanal, Odisha</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory">
            Our Tradition. <span className="text-gold italic font-normal">Our Pride.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            The journey of Ipsita Producer Group in preserving, practicing, and celebrating the indigenous tribal jewellery and handicrafts of Odisha.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-ivory/70">
            <span className="px-3 py-1 rounded bg-ivory/10 border border-ivory/20 font-mono">
              Udyam: {BUSINESS.udyamRegistration}
            </span>
            <span className="px-3 py-1 rounded bg-ivory/10 border border-ivory/20">
              {BUSINESS.initiative}
            </span>
            <span className="px-3 py-1 rounded bg-ivory/10 border border-ivory/20">
              {BUSINESS.origin}
            </span>
          </div>
        </div>
      </section>

      <TraditionalBorder className="text-gold/50 bg-ivory-200" />

      {/* 2. Enterprise Introduction & Origin */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
                Enterprise Background
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                Carrying Forward Traditional Craft Skills of Odisha
              </h2>
              <div className="w-16 h-0.5 bg-gold" />

              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                <strong>Ipsita Producer Group</strong> is an Odisha-based producer group creating authentic tribal jewellery and handicrafts, carrying forward the centuries-old craft traditions of the region.
              </p>

              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Registered under Udyam (<strong>{BUSINESS.udyamRegistration}</strong>), the group operates under the Odisha Government&apos;s prestigious <strong>Subhadra Shakti initiative</strong>. Based in the craft-rich rural landscape of Adipura village in Dhenkanal district, the group empowers women artisans by providing sustainable livelihoods through their ancestral artistic knowledge.
              </p>

              {/* Verified Details Card */}
              <div className="bg-white rounded-xl p-5 border border-beige shadow-artisan space-y-2.5 text-xs text-charcoal/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="font-semibold text-earth block">Group Name:</span>
                    <span>{BUSINESS.name}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-earth block">Business Type:</span>
                    <span>{BUSINESS.businessType}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-earth block">Udyam Registration:</span>
                    <span className="font-mono text-terracotta font-semibold">{BUSINESS.udyamRegistration}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-earth block">Official Phone:</span>
                    <a href={BUSINESS.phoneTel} className="text-earth font-medium hover:underline">
                      {BUSINESS.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-beige">
                  <span className="font-semibold text-earth block">Registered Village Address:</span>
                  <p className="text-charcoal/70 leading-relaxed">
                    {BUSINESS.addressFull}
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Logo & Emblems Showcase */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gold/40 shadow-artisan text-center space-y-4">
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-gold/60 bg-ivory p-1">
                  <Image
                    src="/images/ipsita_logo.png"
                    alt="Ipsita Producer Group Official Badge"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-earth">
                    {BUSINESS.name}
                  </h3>
                  <p className="text-xs text-terracotta font-serif italic mt-0.5">
                    {BUSINESS.tagline}
                  </p>
                </div>

                <p className="text-xs text-charcoal/70 leading-relaxed pt-2 border-t border-beige">
                  Representing the Subhadra Shakti initiative of the Government of Odisha, celebrating women artisan empowerment and indigenous craft preservation.
                </p>

                <div className="pt-2 flex justify-center">
                  <WhatsAppButton customText="Enquire with Group Leader" className="text-xs py-2 px-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Authentic Stall Exhibition Feature (PRD Section 1 & 2) */}
      <section className="py-16 sm:py-20 bg-ivory-100 border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              Stall Showcase & Trade Fair
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
              From Rural Dhenkanal to Exhibition Pavilions
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto my-3" />
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              As prepared for the two-day showcase at the AKAMA College Trade Fair, Ipsita Producer Group presents an organized, eye-level exhibition stall ensuring authentic presentation and direct buyer connection.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-gold/40 shadow-artisan bg-white">
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full">
              <Image
                src="/images/ipsita_stall_exhibition.png"
                alt="Ipsita Producer Group stall at a previous handicraft exhibition"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 bg-earth text-ivory flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-gold font-serif text-sm">
                Ipsita Producer Group&apos;s stall at a previous handicraft exhibition
              </span>
              <span className="text-ivory/70">
                Displaying authentic jewellery lines, brass artifacts & framed art
              </span>
            </div>
          </div>

          {/* 3 Operational Roles from PRD Section 6 */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-bold text-charcoal text-center mb-8">
              Stall Management & Operational Roles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-beige shadow-sm">
                <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
                  ROLE 1
                </div>
                <h4 className="font-serif text-lg font-bold text-earth mb-2">
                  Customer Engagement
                </h4>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Welcoming visitors, explaining the craft technique, and sharing the cultural story and tradition behind each handmade product.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-beige shadow-sm">
                <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
                  ROLE 2
                </div>
                <h4 className="font-serif text-lg font-bold text-earth mb-2">
                  Sales & Payments
                </h4>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Handling visitor enquiries, providing clear price card details, managing secure UPI payments, and carefully packing delicate handcrafted purchases.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-beige shadow-sm">
                <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
                  ROLE 3
                </div>
                <h4 className="font-serif text-lg font-bold text-earth mb-2">
                  Display & Inventory
                </h4>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Arranging vertical racks for hanging jewellery, organizing presentation tables for brass figurines and framed art, tracking stock, and keeping the stall clean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Craft Values & Heritage Pillars */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              Pillars of Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
              Our Core Craft Values
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STALL_STORY.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-beige shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-ivory-200 border border-gold/40 text-terracotta flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-earth mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-charcoal/75 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Exhibition Promotional Strategy from PRD */}
          <div className="mt-14 bg-earth text-ivory rounded-2xl p-6 sm:p-8 border border-gold/30">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-4 text-center sm:text-left">
              Key Exhibition Principles (From PRD)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-ivory/80">
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-gold">01</span>
                <span>Display the logo banner and fascia prominently for instant brand recognition.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-gold">02</span>
                <span>Tell the authentic story of tribal craft to each and every visitor.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-gold">03</span>
                <span>Keep jewellery at eye level on racks with bright, even lighting.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-gold">04</span>
                <span>Offer affordable gifting pieces for students and visiting families.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-gold">05</span>
                <span>Share contact details and visiting cards for future orders and custom commissions.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="font-bold text-gold">06</span>
                <span>Encourage photos and cultural appreciation of Odisha&apos;s heritage.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-16 bg-ivory-100 border-t border-beige text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-3">
            Connect with Ipsita Producer Group
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 max-w-xl mx-auto mb-6">
            For college exhibition stalls, bulk souvenir orders, or handcrafted jewellery curation, reach out to our team in Dhenkanal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton customText="Enquire on WhatsApp (+91 77518 90401)" />
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-earth text-ivory text-sm font-semibold hover:bg-earth-light transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {BUSINESS.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

