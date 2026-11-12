import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, Phone, Eye, Compass, Heart, CheckCircle2 } from 'lucide-react';
import { BUSINESS, STALL_STORY } from '@/data/business';
import { CATEGORIES } from '@/data/categories';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MandalaDivider, TraditionalBorder } from '@/components/DecorativeMotif';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-earth text-ivory overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gold/40">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B69760_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Official Badges */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-medium tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Subhadra Shakti Initiative</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-ivory/10 border border-ivory/20 text-ivory/90 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>{BUSINESS.udyamRegistration}</span>
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-serif tracking-[0.2em] uppercase text-gold font-medium">
                  {BUSINESS.businessType} • Dhenkanal, Odisha
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory leading-[1.1]">
                  Our Tradition.<br />
                  <span className="text-gold italic font-normal">Our Pride.</span>
                </h1>
                <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2">
                  Discover genuine tribal necklaces, brass bell metal artifacts, and framed folk art handcrafted by skilled rural artisans of Dhenkanal under the Odisha Government&apos;s Subhadra Shakti initiative.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/collections"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-light text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>Explore Product Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  customText="Enquire on WhatsApp"
                  className="w-full sm:w-auto px-6 py-3.5 text-sm"
                />
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 border-t border-gold/20 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-ivory/70">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  100% Handmade & Unique Pieces
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  Direct Rural Producer Group
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  AKAMA Trade Fair Showcase
                </span>
              </div>
            </div>

            {/* Right Column: Authentic Banner Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-white p-2">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-ivory">
                    <Image
                      src="/images/ipsita_brand_banner.png"
                      alt="Ipsita Producer Group Official Brand Banner"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  {/* Caption */}
                  <div className="p-3 bg-ivory text-charcoal text-center border-t border-beige mt-2 rounded-lg">
                    <span className="font-serif font-bold text-sm text-earth block">
                      {BUSINESS.name}
                    </span>
                    <span className="text-[11px] text-terracotta font-medium">
                      Vill-Adipura, Dist-Dhenkanal, Odisha (PIN 759023)
                    </span>
                  </div>
                </div>

                {/* Subhadra Badge Floating Accent */}
                <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center space-x-2 bg-earth-dark text-ivory px-3.5 py-2 rounded-xl border border-gold/40 shadow-lg text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Subhadra Shakti Partner Enterprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Tribal Divider */}
      <TraditionalBorder className="text-gold/50 bg-ivory-200" />

      {/* 2. ENTERPRISE INTRODUCTION & PRD OVERVIEW */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              Artisan Roots & Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Handcrafted in Dhenkanal, Cherished Across Odisha
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Ipsita Producer Group brings together traditional craft artisans from Dhenkanal, Odisha, working to safeguard ancient tribal art forms and lost-wax metal casting. Operating under the Odisha Government&apos;s <strong>Subhadra Shakti initiative</strong> and registered under <strong>Udyam</strong>, the enterprise stands for dignity of craft, sustainable livelihoods, and cultural celebration.
            </p>
          </div>

          {/* 4 Stall Objectives Cards from PRD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {STALL_STORY.stallObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-beige shadow-artisan hover:shadow-artisan-hover transition-all text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-ivory-200 border border-gold/40 text-terracotta flex items-center justify-center font-serif text-lg font-bold mb-4 group-hover:bg-terracotta group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-earth mb-2">
                  {obj.title}
                </h3>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE COLLECTIONS (PRD CATEGORIES) */}
      <section className="py-16 sm:py-20 bg-ivory-100 border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
                Catalogue Categories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
                Explore Traditional Collections
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-2 max-w-xl">
                Browse our four authentic categories as showcased at the AKAMA College Trade Fair and state handicraft exhibitions.
              </p>
            </div>
            <Link
              href="/collections"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark"
            >
              <span>View All Catalogue Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/collections?category=${category.id}`}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-beige hover:border-gold shadow-artisan hover:shadow-artisan-hover transition-all duration-300"
              >
                {/* Authentic Category Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-200">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-ivory px-2.5 py-1 rounded bg-black/40 backdrop-blur-xs">
                    Exhibition Category
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-earth group-hover:text-terracotta transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-xs text-charcoal/75 leading-relaxed line-clamp-3 mb-4">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-beige flex items-center justify-between text-xs font-semibold text-terracotta">
                    <span>Browse Collection</span>
                    <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              Artisan Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
              Featured Handcrafted Pieces
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto my-3" />
            <p className="text-xs sm:text-sm text-charcoal/70">
              Each piece is created individually by hand using ancestral brass-casting, bead stringing, and tribal painting methods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product, idx) => (
              <ProductCard key={product.id} product={product} priorityImage={idx < 2} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-earth hover:bg-earth-light text-ivory font-semibold text-sm transition-all shadow-artisan border border-gold/40"
            >
              <span>View Complete 4-Category Catalogue</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AUTHENTIC STALL EXHIBITION SECTION (FROM PRD) */}
      <section className="py-16 sm:py-20 bg-earth text-ivory border-y border-gold/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image of the real stall */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-black/40 relative">
                <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full">
                  <Image
                    src="/images/ipsita_stall_exhibition.png"
                    alt="Ipsita Producer Group stall at a previous handicraft exhibition"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 bg-earth-dark/95 border-t border-gold/30 text-xs text-gold flex items-center justify-between">
                  <span>Ipsita Producer Group&apos;s stall at a previous handicraft exhibition</span>
                  <span className="font-mono text-[11px] text-ivory/70">Dhenkanal, Odisha</span>
                </div>
              </div>
            </div>

            {/* Description & Display Approach */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
                Exhibition Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory leading-snug">
                Authentic Craftsmanship, Direct from Artisans
              </h2>
              <p className="text-sm text-ivory/80 leading-relaxed">
                As documented in our PRD, jewellery is hung on racks behind the stall so it is visible at eye level, while framed art and brass handicrafts are carefully arranged on presentation tables with clear price cards.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-earth-dark/60 border border-gold/25 text-xs">
                  <strong className="text-gold block mb-1">Display & Craft Method:</strong>
                  <p className="text-ivory/75 leading-relaxed">
                    Items are handmade, so each piece is unique. Dual-side lighting illuminates the fine brass lost-wax casting, traditional beadwork textures, and delicate tribal pigments.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/our-story"
                  className="inline-flex items-center space-x-2 text-gold hover:text-white font-semibold text-sm transition-colors"
                >
                  <span>Read our enterprise story & trade fair journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION / DIRECT ENQUIRY */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MandalaDivider title="Direct Artisan Connect" subtitle="No middle agents • Authentic Odisha Craftsmanship" />

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3">
            Interested in Acquiring Authentic Pieces?
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether you are visiting our exhibition stall, planning college or corporate gifts, or seeking custom tribal pieces, connect directly with Ipsita Producer Group in Dhenkanal.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              customText="Enquire via WhatsApp (+91 77518 90401)"
              className="w-full sm:w-auto px-6 py-3.5 text-sm"
            />
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-earth/30 text-earth hover:bg-earth hover:text-ivory transition-colors text-sm font-semibold"
            >
              <span>View Stall Location & Address</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

