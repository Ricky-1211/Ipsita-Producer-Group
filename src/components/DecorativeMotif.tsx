import React from 'react';

export function TraditionalBorder({ className = 'text-gold' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center opacity-85 py-1 ${className}`} aria-hidden="true">
      <svg
        className="w-full max-w-5xl h-3"
        viewBox="0 0 800 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="repeat"
      >
        <pattern id="tribal-chevron" width="40" height="12" patternUnits="userSpaceOnUse">
          {/* Traditional Odishan tribal diamond-zigzag motif */}
          <path d="M 0 6 L 10 0 L 20 6 L 10 12 Z" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="6" r="2" fill="currentColor" />
          <path d="M 20 6 L 30 0 L 40 6 L 30 12 Z" fill="currentColor" opacity="0.9" />
          <circle cx="40" cy="6" r="2" fill="currentColor" />
        </pattern>
        <rect width="800" height="12" fill="url(#tribal-chevron)" />
      </svg>
    </div>
  );
}

export function MandalaDivider({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center justify-center my-6 text-center">
      <div className="flex items-center justify-center w-full max-w-md space-x-3">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold to-terracotta/70"></span>
        <div className="flex items-center space-x-1.5 text-gold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <svg className="w-5 h-5 text-terracotta" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
        </div>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold to-terracotta/70"></span>
      </div>
      {title && (
        <span className="mt-2 text-xs uppercase tracking-[0.25em] font-medium text-terracotta">
          {title}
        </span>
      )}
      {subtitle && (
        <p className="text-sm text-charcoal/70 mt-1 max-w-md">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CornerOrnament({ className = 'text-gold' }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 pointer-events-none ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M 2 18 L 2 2 L 18 2" />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ArtisanBadge({
  label,
  sublabel,
  icon,
}: {
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-ivory border border-gold/30 text-earth shadow-sm">
      {icon && <span className="text-terracotta text-sm">{icon}</span>}
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold tracking-wide uppercase">{label}</span>
        {sublabel && <span className="text-[10px] text-charcoal/70">{sublabel}</span>}
      </div>
    </div>
  );
}
