// Product data types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string | null;
  images?: string[];
  video?: string;
  tag: string | null;
  specs: string[];
  category: string;
  features: string[];
  specifications: ProductSpecification[];
  compatiblePrinters: string[] | null;
  longDescription: string;
  customerReviews?: ProductReview[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

// Category data types
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string | null;
}

// Filter & UI configuration types
export interface FilterOptions {
  printerBrands: string[];
  sortOptions: SortOption[];
  priceRange: PriceRange;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface PriceRange {
  min: number;
  max: number;
  step: number;
}

export interface VolumeDiscount {
  quantity: number;
  discount: number;
  label: string;
}

export interface PolicyFeature {
  icon: string;
  title: string;
  description: string | null;
}

export interface Policies {
  freeShippingThreshold: number;
  guaranteeDays: number;
  features: PolicyFeature[];
}
