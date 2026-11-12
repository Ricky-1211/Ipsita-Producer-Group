import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { Product } from '@/types';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  priorityImage?: boolean;
}

export default function ProductCard({ product, priorityImage = false }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-beige hover:border-gold/60 shadow-artisan hover:shadow-artisan-hover transition-all duration-300">
      {/* Category & Badge header */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-200">
        <Image
          src={product.primaryImage}
          alt={`Authentic handmade ${product.name} from Ipsita Producer Group, Dhenkanal, Odisha`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priorityImage}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Category tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase rounded-full bg-ivory/95 text-earth border border-gold/40 shadow-sm backdrop-blur-sm">
            {product.categoryName}
          </span>
          {product.isFeatured && (
            <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-terracotta text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Featured
            </span>
          )}
        </div>

        {/* Origin tag */}
        <div className="absolute bottom-2.5 left-3 flex items-center space-x-1 text-ivory text-[11px] font-medium drop-shadow-md">
          <MapPin className="w-3 h-3 text-gold" />
          <span>Dhenkanal Craft</span>
        </div>
      </div>

      {/* Product Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2">
          <span className="text-[11px] uppercase tracking-wider text-terracotta font-semibold">
            {product.craftTechnique.split(' ')[0]} Artisanship
          </span>
          <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors line-clamp-1 mt-0.5">
            <Link href={`/collections/${product.slug}`} className="focus:outline-none focus:underline">
              {product.name}
            </Link>
          </h3>
        </div>

        <p className="text-xs text-charcoal/75 line-clamp-2 leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* Materials Chips */}
        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {product.materials.slice(0, 3).map((mat, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-ivory text-earth-light border border-beige/80"
            >
              {mat}
            </span>
          ))}
          {product.materials.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-ivory text-charcoal/60">
              +{product.materials.length - 3}
            </span>
          )}
        </div>

        {/* Price & Authenticity Notice */}
        <div className="pt-3 border-t border-beige/60 flex flex-col mb-4">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-medium text-terracotta">
              {product.priceNotice}
            </span>
          </div>
          <span className="text-[10px] text-charcoal/60 mt-0.5">
            Handcrafted & unique • Direct from artisan group
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            href={`/collections/${product.slug}`}
            className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-earth/20 text-earth hover:bg-earth hover:text-ivory transition-colors duration-200"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <WhatsAppButton
            productName={product.name}
            productId={product.id}
            categoryName={product.categoryName}
            customText="Enquire"
            className="w-full text-xs py-2 px-3"
          />
        </div>
      </div>
    </article>
  );
}

