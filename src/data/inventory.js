// Hornet Outdoors & Tactical - Inventory Data
// This is the single source of truth for all products on the site
// ONLY products listed here should render on the site

import apparelHat1 from '../img/apparel_hat_1.jpg';
import matthewBow1 from '../img/matthew_bow_product_1.jpg';

export const products = [
  {
    id: 'arch-001',
    name: 'Compound Bow',
    category: 'Archery',
    price: 599.99,
    description: 'High-performance compound bow for hunting and target shooting. Adjustable draw weight and length.',
    image: matthewBow1,
    slug: 'compound-bow',
    inStock: true
  },
  {
    id: 'app-001',
    name: 'Tactical Hat',
    category: 'Apparel',
    price: 34.99,
    description: 'Durable tactical hat with adjustable fit. Perfect for outdoor activities.',
    image: apparelHat1,
    slug: 'tactical-hat',
    inStock: true
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper function to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

// Category definitions with inventory status
export const categories = [
  {
    id: 'hunting',
    name: 'Hunting',
    slug: 'hunting',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Premium hunting gear and equipment'
  },
  {
    id: 'fishing',
    name: 'Fishing',
    slug: 'fishing',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Quality fishing tackle and accessories'
  },
  {
    id: 'waterfowl',
    name: 'Waterfowl',
    slug: 'waterfowl',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Waterfowl hunting essentials'
  },
  {
    id: 'big-game',
    name: 'Big Game',
    slug: 'big-game',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Big game hunting equipment'
  },
  {
    id: 'archery',
    name: 'Archery',
    slug: 'archery',
    comingSoon: false,
    itemCount: 1,
    description: 'Bows, arrows, and archery accessories'
  },
  {
    id: 'apparel',
    name: 'Apparel',
    slug: 'apparel',
    comingSoon: false,
    itemCount: 1,
    description: 'Outdoor and tactical apparel'
  }
];

// Get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};
