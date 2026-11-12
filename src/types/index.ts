export type ProductCategory = 
  | 'tribal-jewellery'
  | 'brass-metal-handicrafts'
  | 'framed-tribal-art'
  | 'gifting-souvenirs';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  iconName: string;
  displayTechnique: string;
  artisanHighlights: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  materials: string[];
  dimensions?: string;
  origin: string;
  craftTechnique: string;
  craftDetails: string;
  primaryImage: string;
  galleryImages: string[];
  isFeatured?: boolean;
  priceNotice: string;
  verifiedPrice?: string;
  isUniqueHandmade: boolean;
  idealFor: string[];
  careInstructions?: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  businessType: string;
  origin: string;
  state: string;
  district: string;
  phone: string;
  phoneFormatted: string;
  phoneTel: string;
  whatsAppNumber: string;
  whatsAppLink: string;
  addressFull: string;
  village: string;
  postOffice: string;
  policeStation: string;
  via: string;
  districtFull: string;
  pin: string;
  udyamRegistration: string;
  initiative: string;
  initiativeAgency: string;
}

export interface FilterState {
  category: string;
  searchQuery: string;
  material: string;
  sortBy: 'featured' | 'name-asc' | 'name-desc';
}

