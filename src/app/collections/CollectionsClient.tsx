'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { FilterState, Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import SearchAndFilter from '@/components/SearchAndFilter';
import { MandalaDivider } from '@/components/DecorativeMotif';

export default function CollectionsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    searchQuery: '',
    material: '',
    sortBy: 'featured',
  });

  // Unique materials from all products for the material filter
  const availableMaterials = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => {
      p.materials.forEach((m) => {
        // extract primary keyword
        if (m.includes('Brass')) set.add('Solid Brass');
        else if (m.includes('Beads') || m.includes('Bead')) set.add('Tribal Beads');
        else if (m.includes('Glass')) set.add('Glass & Wood Frame');
        else if (m.includes('Pendant') || m.includes('Capsule')) set.add('Cast Pendant');
        else if (m.includes('Alloy')) set.add('Alloy Metal');
      });
    });
    return Array.from(set);
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category Filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // 2. Search Query Filter
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query) || product.fullDescription.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);
        const matchesMaterial = product.materials.some((m) => m.toLowerCase().includes(query));
        const matchesCraft = product.craftTechnique.toLowerCase().includes(query);

        if (!matchesName && !matchesDesc && !matchesCat && !matchesMaterial && !matchesCraft) {
          return false;
        }
      }

      // 3. Material Filter
      if (filters.material !== '') {
        const matQuery = filters.material.toLowerCase();
        const hasMaterial = product.materials.some((m) => {
          if (matQuery.includes('brass') && m.toLowerCase().includes('brass')) return true;
          if (matQuery.includes('beads') && (m.toLowerCase().includes('bead') || m.toLowerCase().includes('cord'))) return true;
          if (matQuery.includes('glass') && (m.toLowerCase().includes('glass') || m.toLowerCase().includes('frame'))) return true;
          if (matQuery.includes('alloy') && m.toLowerCase().includes('alloy')) return true;
          if (matQuery.includes('pendant') && (m.toLowerCase().includes('pendant') || m.toLowerCase().includes('capsule'))) return true;
          return m.toLowerCase().includes(matQuery);
        });
        if (!hasMaterial) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      // 'featured'
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [filters]);

  const activeCategoryInfo = CATEGORIES.find((c) => c.id === filters.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
          Catalogue & Exhibitions
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal mt-1 mb-3">
          Product Collections
        </h1>
        <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
          Explore authentic tribal necklaces, lost-wax brass handicrafts, framed folk art, and souvenir keepsakes created by Ipsita Producer Group in Dhenkanal, Odisha.
        </p>

        {activeCategoryInfo && (
          <div className="mt-4 p-4 rounded-xl bg-ivory-100 border border-gold/30 text-xs text-charcoal/80 text-left max-w-2xl mx-auto shadow-sm">
            <strong className="text-earth font-serif text-sm block mb-1">
              {activeCategoryInfo.name}
            </strong>
            <p className="leading-relaxed">{activeCategoryInfo.longDescription}</p>
            <span className="text-[11px] text-terracotta font-medium mt-1.5 block">
              Display Method: {activeCategoryInfo.displayTechnique}
            </span>
          </div>
        )}
      </div>

      {/* Interactive Search & Filter Controls */}
      <SearchAndFilter
        filters={filters}
        onFilterChange={setFilters}
        availableMaterials={availableMaterials}
        totalResults={filteredProducts.length}
      />

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-beige p-8 shadow-sm">
          <p className="font-serif text-xl font-bold text-charcoal mb-2">
            No matching handcrafted pieces found
          </p>
          <p className="text-xs text-charcoal/70 max-w-md mx-auto mb-6">
            We couldn&apos;t find any pieces matching your current search or filter criteria. Try resetting your filters to explore our full four-category catalogue.
          </p>
          <button
            onClick={() =>
              setFilters({
                category: 'all',
                searchQuery: '',
                material: '',
                sortBy: 'featured',
              })
            }
            className="px-5 py-2.5 rounded-xl bg-earth hover:bg-earth-light text-ivory text-xs font-semibold transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Catalogue Notice Footer */}
      <div className="mt-16 pt-8 border-t border-beige text-center">
        <MandalaDivider title="Handmade Assurance" />
        <p className="text-xs text-charcoal/70 max-w-xl mx-auto">
          Every piece in our catalogue is created by hand in Dhenkanal, Odisha. Slight variations in finish, tone, and dimension are the authentic hallmarks of genuine artisan craftsmanship.
        </p>
      </div>
    </div>
  );
}

