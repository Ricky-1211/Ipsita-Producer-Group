'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/contact', label: 'Contact & Enquiry' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Heritage Notice Bar */}
      <div className="bg-earth text-ivory text-[11px] py-1.5 px-4 border-b border-gold/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1 font-medium text-gold">
              <Sparkles className="w-3 h-3 text-gold" /> Subhadra Shakti Initiative
            </span>
            <span className="hidden sm:inline text-gold/60">•</span>
            <span className="hidden sm:inline text-ivory/80">Govt. of Odisha</span>
            <span className="hidden md:inline text-gold/60">•</span>
            <span className="hidden md:inline text-ivory/80">Udyam: {BUSINESS.udyamRegistration}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-ivory/90">
              <MapPin className="w-3 h-3 text-gold" />
              <span>Dhenkanal, Odisha</span>
            </div>
            <a
              href={BUSINESS.phoneTel}
              className="hidden sm:inline-flex items-center space-x-1 text-gold hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-artisan py-2' : 'bg-ivory py-3.5'
        } border-b border-beige`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-sm bg-white p-0.5 flex-shrink-0">
              <Image
                src="/images/ipsita_logo.png"
                alt="Ipsita Producer Group Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-earth group-hover:text-terracotta transition-colors">
                {BUSINESS.name}
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider text-terracotta font-serif italic">
                {BUSINESS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-terracotta bg-beige/60 font-semibold shadow-xs'
                      : 'text-charcoal hover:text-earth hover:bg-beige/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsAppNumber}?text=${encodeURIComponent(
                'Namaste Ipsita Producer Group, I am browsing your website catalogue and would like to make an enquiry.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/10 text-[#1EBE5D] hover:bg-[#25D366] hover:text-white transition-all duration-200 text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-earth hover:bg-earth-light text-ivory transition-colors text-xs font-semibold shadow-sm border border-gold/40"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Artisan</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`https://wa.me/${BUSINESS.whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp contact"
              className="p-2 rounded-lg bg-[#25D366]/15 text-[#1EBE5D]"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-earth hover:bg-beige/50 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-expanded={isOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-beige bg-ivory px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-beige text-terracotta font-semibold'
                      : 'text-charcoal hover:bg-beige/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-beige/80 space-y-2.5">
              <a
                href={`https://wa.me/${BUSINESS.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
              <a
                href={BUSINESS.phoneTel}
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-earth text-ivory text-sm font-semibold shadow-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call {BUSINESS.phoneFormatted}</span>
              </a>
              <p className="text-center text-[11px] text-charcoal/60 pt-1">
                Adipura, Dhenkanal • Subhadra Shakti Initiative
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

