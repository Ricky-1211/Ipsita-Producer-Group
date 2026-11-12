'use client';

import React from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { FilterState } from '@/types';

interface SearchAndFilterProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  availableMaterials: string[];
  totalResults: number;
}

export default function SearchAndFilter({
  filters,
  onFilterChange,
  availableMaterials,
  totalResults,
}: SearchAndFilterProps) {
  const handleCategoryChange = (categoryId: string) => {
    onFilterChange({
      ...filters,
      category: categoryId,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      searchQuery: e.target.value,
    });
  };

  const handleMaterialChange = (material: string) => {
    onFilterChange({
      ...filters,
      material: filters.material === material ? '' : material,
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      sortBy: e.target.value as FilterState['sortBy'],
    });
  };

  const resetFilters = () => {
    onFilterChange({
      category: 'all',
      searchQuery: '',
      material: '',
      sortBy: 'featured',
    });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.searchQuery.trim() !== '' ||
    filters.material !== '';

  return (
    <div className="w-full space-y-6 bg-white p-5 sm:p-6 rounded-2xl border border-beige shadow-artisan mb-8">
      {/* Top Row: Search Input & Sort Selector */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/50" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleSearchChange}
            placeholder="Search tribal jewellery, brass kalash, framed art, souvenirs..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-beige bg-ivory-50 text-charcoal placeholder-charcoal/45 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-charcoal/40 hover:text-charcoal"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center space-x-2">
          <div className="relative w-full sm:w-48">
            <select
              value={filters.sortBy}
              onChange={handleSortChange}
              aria-label="Sort products"
              className="w-full appearance-none pl-3.5 pr-8 py-2.5 rounded-xl border border-beige bg-ivory-50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 font-medium cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
            <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-charcoal/50 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-2.5">
          Select Collection Category
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filters.category === 'all'
                ? 'bg-earth text-ivory shadow-sm'
                : 'bg-ivory hover:bg-beige text-charcoal border border-beige'
            }`}
          >
            All Collections
          </button>
          {CATEGORIES.map((cat) => {
            const isSelected = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-earth text-ivory shadow-sm'
                    : 'bg-ivory hover:bg-beige text-charcoal border border-beige'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Material Filter Pills (Optional Filter) */}
      {availableMaterials.length > 0 && (
        <div className="pt-2 border-t border-beige/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-terracotta" />
              Filter By Authentic Material
            </span>
            {filters.material && (
              <button
                onClick={() => onFilterChange({ ...filters, material: '' })}
                className="text-[10px] text-terracotta hover:underline font-medium"
              >
                Clear material
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {availableMaterials.map((mat) => {
              const isSelected = filters.material === mat;
              return (
                <button
                  key={mat}
                  onClick={() => handleMaterialChange(mat)}
                  className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                    isSelected
                      ? 'bg-terracotta text-white font-medium'
                      : 'bg-ivory-100 hover:bg-beige text-charcoal/80 border border-beige/80'
                  }`}
                >
                  {mat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Results Count & Reset row */}
      <div className="flex items-center justify-between pt-3 border-t border-beige text-xs text-charcoal/70">
        <span>
          Showing <strong>{totalResults}</strong> handcrafted {totalResults === 1 ? 'item' : 'items'}
        </span>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-terracotta font-semibold hover:underline flex items-center space-x-1"
          >
            <X className="w-3 h-3" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
