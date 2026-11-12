'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, MapPin, CheckCircle2, ShieldCheck, Heart, Share2, Info, Phone } from 'lucide-react';
import { Product } from '@/types';
import { BUSINESS } from '@/data/business';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(product.primaryImage);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-charcoal/60">
        <Link href="/" className="hover:text-terracotta transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/collections" className="hover:text-terracotta transition-colors">
          Collections
        </Link>
        <span>/</span>
        <Link
          href={`/collections?category=${product.category}`}
          className="hover:text-terracotta transition-colors font-medium text-charcoal/80"
        >
          {product.categoryName}
        </Link>
        <span>/</span>
        <span className="text-charcoal font-semibold truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Selected Image */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-ivory-200 border-2 border-beige shadow-artisan">
            <Image
              src={selectedImage}
              alt={`Handmade ${product.name} by Ipsita Producer Group, Dhenkanal, Odisha`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-all duration-300"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-ivory/95 text-earth border border-gold/40 shadow-sm backdrop-blur-xs">
                {product.categoryName}
              </span>
              {product.isFeatured && (
                <span className="px-2.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-terracotta text-white shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Featured Piece
                </span>
              )}
            </div>

            <div className="absolute bottom-3 left-4 text-xs font-medium text-white drop-shadow-md flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Authentic {product.origin}</span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.galleryImages.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === img
                      ? 'border-terracotta ring-2 ring-terracotta/30 scale-105'
                      : 'border-beige hover:border-gold/60 opacity-80'
                  }`}
                  aria-label={`Select gallery photograph ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Detail view ${idx + 1} of ${product.name}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Authentic Handcrafted Photo Notice */}
          <div className="p-3.5 rounded-xl bg-ivory-100 border border-gold/30 text-xs text-charcoal/75 flex items-start space-x-2.5">
            <Info className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Authentic Stall Asset:</strong> This photograph was taken directly from Ipsita Producer Group&apos;s exhibition showcase. Items are handmade, so slight organic variations in finish and shape highlight its handcrafted individuality.
            </p>
          </div>
        </div>

        {/* Right Column: Product Information & Inquiries */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Product Code: {product.id}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center space-x-1 text-xs text-charcoal/60 hover:text-earth transition-colors"
                title="Share product link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal leading-tight">
              {product.name}
            </h1>

            {/* Price & Availability Notice */}
            <div className="p-4 rounded-xl bg-white border border-beige shadow-sm">
              <div className="text-sm font-semibold text-terracotta">
                {product.priceNotice}
              </div>
              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                Direct artisan pricing for individual buyers, college fairs, exhibitions, and bulk gift orders.
              </p>
            </div>

            {/* Short Description */}
            <p className="text-sm text-charcoal/80 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Key Materials */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal block mb-2">
                Craft Materials:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-ivory text-xs font-medium text-earth border border-beige"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <WhatsAppButton
                productName={product.name}
                productId={product.id}
                categoryName={product.categoryName}
                customText="Enquire on WhatsApp About This Piece"
                className="w-full justify-center text-sm py-3.5"
              />

              <a
                href={BUSINESS.phoneTel}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-earth/30 text-earth hover:bg-earth hover:text-ivory font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Group ({BUSINESS.phoneFormatted})</span>
              </a>
            </div>

            {/* Trust and Artisan Badges */}
            <div className="pt-4 border-t border-beige space-y-2 text-xs text-charcoal/70">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Handcrafted under the Odisha Government&apos;s Subhadra Shakti initiative</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Udyam Registered Enterprise: <strong className="font-mono">{BUSINESS.udyamRegistration}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications & Craft Details Table */}
      <div className="mt-16 pt-10 border-t border-beige">
        <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
          Artisanal Specifications & Heritage Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 sm:p-8 border border-beige shadow-artisan">
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="pb-3 border-b border-beige">
              <span className="font-semibold text-earth block">Craft Technique:</span>
              <span className="text-charcoal/80">{product.craftTechnique}</span>
            </div>
            <div className="pb-3 border-b border-beige">
              <span className="font-semibold text-earth block">Origin of Craft:</span>
              <span className="text-charcoal/80">{product.origin}</span>
            </div>
            {product.dimensions && (
              <div className="pb-3 border-b border-beige">
                <span className="font-semibold text-earth block">Dimensions / Drop:</span>
                <span className="text-charcoal/80">{product.dimensions}</span>
              </div>
            )}
            <div>
              <span className="font-semibold text-earth block">Handmade Uniqueness:</span>
              <span className="text-charcoal/80">
                100% handmade piece. No two items are identical.
              </span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="pb-3 border-b border-beige">
              <span className="font-semibold text-earth block">Recommended Occasion / Ideal For:</span>
              <span className="text-charcoal/80">{product.idealFor.join(' • ')}</span>
            </div>
            {product.careInstructions && (
              <div className="pb-3 border-b border-beige">
                <span className="font-semibold text-earth block">Artisan Care Instructions:</span>
                <span className="text-charcoal/80 leading-relaxed">{product.careInstructions}</span>
              </div>
            )}
            <div>
              <span className="font-semibold text-earth block">Producer Enterprise:</span>
              <span className="text-charcoal/80">
                {BUSINESS.name} • {BUSINESS.village}, Dhenkanal, Odisha
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products from same category */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 pt-10 border-t border-beige">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
                More From This Category
              </span>
              <h2 className="font-serif text-2xl font-bold text-charcoal mt-0.5">
                Related {product.categoryName}
              </h2>
            </div>
            <Link
              href={`/collections?category=${product.category}`}
              className="text-xs sm:text-sm font-semibold text-terracotta hover:underline"
            >
              View all {product.categoryName} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

