// Hornet Outdoors & Tactical - Inventory Data
// This is the single source of truth for all products on the site
// ONLY products listed here should render on the site

import apparelHat1 from '../img/apparel_hat_1.jpg';
import matthewBow1 from '../img/matthew_bow_product_1.jpg';
import archeryMountains1 from '../img/archery_mountains_1.jpeg';
import archeryMountains2 from '../img/archery_mountains_2.jpeg';
import archeryQuiver1 from '../img/archery_quiver_1.png';
import retrieverBg from '../img/retriever_page_background.jpeg';
import waterfowlBg from '../img/waterfowl_page_background.jpeg';
import apparelBg from '../img/apparel_page_background.jpeg';
import fishingBg from '../img/fishing_background.jpeg';

export const products = [
  {
    id: 'arch-001',
    name: 'Compound Bow',
    category: 'Archery',
    subcategory: 'bows',
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
    subcategory: 'hats',
    price: 34.99,
    description: 'Durable tactical hat with adjustable fit. Perfect for outdoor activities.',
    image: apparelHat1,
    slug: 'tactical-hat',
    inStock: true
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

// Helper function to get products by category and subcategory
export const getProductsBySubcategory = (category, subcategory) => {
  return products.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
      && product.subcategory === subcategory
  );
};

// Helper function to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

// Category definitions with subcategories (alphabetical)
export const categories = [
  {
    id: 'apparel',
    name: 'Apparel',
    slug: 'apparel',
    comingSoon: false,
    description: 'Outdoor and tactical apparel',
    landing: {
      heroImage: apparelBg,
      headline: 'Outdoor & Tactical Apparel',
      tagline: 'Gear you can wear from the field to the everyday.',
      blurb: 'Built for comfort and durability, our apparel line is designed for hunters, outdoorsmen, and anyone who demands more from their clothing. From hats and beanies to jackets and gloves — rep the Hornet brand wherever you go.',
    },
    subcategories: [
      { name: 'Hats', slug: 'hats' },
      { name: 'Shirts', slug: 'shirts' },
      { name: 'Beanies', slug: 'beanies' },
      { name: 'Jackets', slug: 'jackets' },
      { name: 'Pants', slug: 'pants' },
      { name: 'Gloves', slug: 'gloves' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  },
  {
    id: 'archery',
    name: 'Archery',
    slug: 'archery',
    comingSoon: false,
    description: 'Bows, arrows, and archery accessories',
    landing: {
      heroImage: archeryMountains1,
      headline: 'Precision Archery Equipment',
      tagline: 'World-class products from the brands that define the sport.',
      blurb: 'We partner with the best names in archery to bring you equipment that performs when it matters most. Whether you\'re building arrows, dialing in your sight, or chasing that perfect shot — we\'ve got you covered.',
      images: [archeryMountains1, archeryQuiver1, archeryMountains2],
      brands: [
        { name: 'Victory Archery', description: 'Carbon arrow shafts and components built for precision and durability. Hunting arrows, target arrows, and cutting-edge arrow technology.', url: 'https://victoryarchery.com/' },
        { name: '365 Archery', description: 'High-performance targets, accessories, and archery gear designed for year-round shooting.', url: 'https://365archery.com/' },
        { name: 'Toulou Broadhead Co.', description: 'Patented broadhead products and gear. Purpose-built broadheads engineered for maximum performance on impact.', url: 'https://touloubroadheads.com/' },
        { name: 'Rinehart Targets', description: 'Lifetime-quality 3D targets and bag targets trusted by hunters and range operators worldwide.', url: 'https://www.rinehart3d.com/' },
      ],
    },
    subcategories: [
      { name: 'Bows', slug: 'bows' },
      { name: 'Arrows', slug: 'arrows' },
      { name: 'Arrow Building', slug: 'arrow-building' },
      { name: 'Releases', slug: 'releases' },
      { name: 'Sights', slug: 'sights' },
      { name: 'Rests', slug: 'rests' },
      { name: 'Stabilizers', slug: 'stabilizers' },
      { name: 'Quivers', slug: 'quivers' },
      { name: 'Targets', slug: 'targets' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  },
  {
    id: 'camping',
    name: 'Camping',
    slug: 'camping',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Camping essentials for the outdoors',
    landing: {
      headline: 'Camping Gear Built for the Wild',
      tagline: 'Tents, cooking gear, and essentials for every adventure.',
      blurb: 'Whether you\'re setting up base camp for a weekend hunt or heading deep into the backcountry, we\'re building a lineup of camping gear that\'s rugged, reliable, and ready for anything.',
    },
    subcategories: [
      { name: 'Tents', slug: 'tents' },
      { name: 'Sleeping Bags', slug: 'sleeping-bags' },
      { name: 'Cooking', slug: 'cooking' },
      { name: 'Lighting', slug: 'lighting' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  },
  {
    id: 'fishing',
    name: 'Fishing',
    slug: 'fishing',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Quality fishing tackle and accessories',
    landing: {
      heroImage: fishingBg,
      heroStyle: { backgroundSize: 'cover', backgroundPosition: 'center 20%', height: '550px' },
      headline: 'Fishing Tackle & Accessories',
      tagline: 'Rods, reels, and everything in between.',
      blurb: 'From inshore saltwater to freshwater bass, we\'re curating a selection of fishing gear that meets the demands of serious anglers. Quality rods, reliable reels, and the tackle you need to land the big one.',
    },
    subcategories: [
      { name: 'Rods', slug: 'rods' },
      { name: 'Reels', slug: 'reels' },
      { name: 'Lures & Baits', slug: 'lures-baits' },
      { name: 'Tackle', slug: 'tackle' },
      { name: 'Line', slug: 'line' },
    ]
  },
  {
    id: 'hunting',
    name: 'Hunting',
    slug: 'hunting',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Premium hunting gear and equipment',
    landing: {
      headline: 'Premium Hunting Gear',
      tagline: 'Rifles, optics, and field-tested equipment.',
      blurb: 'Built for the serious hunter. We\'re assembling a collection of premium hunting gear — from precision optics and reliable firearms accessories to blinds and game calls — everything you need for a successful season.',
    },
    subcategories: [
      { name: 'Rifles', slug: 'rifles' },
      { name: 'Optics', slug: 'optics' },
      { name: 'Blinds & Stands', slug: 'blinds-stands' },
      { name: 'Game Calls', slug: 'game-calls' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  },
  {
    id: 'retrievers',
    name: 'Retrievers',
    slug: 'retrievers',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Retriever training and hunting dog gear',
    landing: {
      heroImage: retrieverBg,
      heroStyle: { backgroundSize: '100% auto', backgroundPosition: 'center 20%' },
      headline: 'Gear for Your Best Hunting Partner',
      tagline: 'Training equipment and field gear built for retrievers.',
      blurb: 'Your dog works as hard as you do. We carry the training tools, field gear, and accessories to keep your retriever performing at their best — from first bumper to final retrieve.',
    },
    subcategories: [
      { name: 'Training Dummies', slug: 'training-dummies' },
      { name: 'Collars & Leads', slug: 'collars-leads' },
      { name: 'Kennels', slug: 'kennels' },
      { name: 'Vests', slug: 'vests' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  },
  {
    id: 'tactical',
    name: 'Tactical',
    slug: 'tactical',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Tactical gear and equipment',
    landing: {
      headline: 'Tactical Gear & Equipment',
      tagline: 'Mission-ready knives, packs, and field essentials.',
      blurb: 'Gear vetted by experience. Our tactical line is built for those who demand reliability under pressure — quality knives, durable packs, dependable flashlights, and field-ready first aid.',
    },
    subcategories: [
      { name: 'Knives', slug: 'knives' },
      { name: 'Flashlights', slug: 'flashlights' },
      { name: 'Packs & Bags', slug: 'packs-bags' },
      { name: 'First Aid', slug: 'first-aid' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  },
  {
    id: 'waterfowl',
    name: 'Waterfowl',
    slug: 'waterfowl',
    comingSoon: true,
    availableDate: 'Summer 2026',
    description: 'Waterfowl hunting essentials',
    landing: {
      heroImage: waterfowlBg,
      headline: 'Waterfowl Hunting Essentials',
      tagline: 'Decoys, calls, and gear for the blind.',
      blurb: 'From pre-dawn setups to the final flight, we carry everything you need to make this season your best yet. Quality decoys, proven calls, and field-tested gear.',
    },
    subcategories: [
      { name: 'Decoys', slug: 'decoys' },
      { name: 'Calls', slug: 'calls' },
      { name: 'Waders', slug: 'waders' },
      { name: 'Blinds', slug: 'blinds' },
      { name: 'Accessories', slug: 'accessories' },
    ]
  }
];

// Get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

// Get subcategory by slugs
export const getSubcategory = (categorySlug, subcategorySlug) => {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return null;
  return cat.subcategories.find(sub => sub.slug === subcategorySlug) || null;
};

// Count products in a category
export const getCategoryProductCount = (categorySlug) => {
  return products.filter(p => p.category.toLowerCase() === categorySlug.toLowerCase()).length;
};
