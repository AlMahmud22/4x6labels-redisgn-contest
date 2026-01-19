import type { 
  Product, 
  Category, 
  FilterOptions, 
  VolumeDiscount, 
  Policies 
} from "./types";

export const PRODUCTS: Product[] = [
  // Direct Thermal Labels
  {
    id: "4x6-direct-thermal",
    name: "4\" x 6\" Direct Thermal Labels",
    description: "Perforated labels for easy, efficient printing. Perfect for small to mid-size businesses. No ribbon required - direct thermal technology.",
    price: 55.95,
    originalPrice: null,
    rating: 4.9,
    reviews: 109,
    image: "/images/products/direct-thermal/4x6-16-rolls_34ff5521-cf40-4a9b-bdd4-fce6f437ce0b.jpg",
    images: [
      "/images/products/direct-thermal/4x6-16-rolls_34ff5521-cf40-4a9b-bdd4-fce6f437ce0b.jpg",
      "/images/products/direct-thermal/4x6-16-rolls_838955ae-7dc0-421a-836b-16e71297030a.jpg",
      "/images/products/direct-thermal/4x6-16-rolls_b734fbe9-eb2c-4767-a6c9-bce5b6576d91.jpg",
      "/images/products/direct-thermal/4x6-250-labels-roll-2.4.jpg"
    ],
    tag: "Best Seller",
    specs: ["Multiple Formats Available", "250-4000 Labels Per Pack", "Perforated"],
    category: "direct-thermal",
    features: [
      "Perforated Labels for Clean Tearing",
      "Permanent All-Temperature Adhesive",
      "No Ribbon Required - Direct Thermal",
      "Bright White Blank Labels",
      "Compatible with Rollo & Zebra Printers",
      "Free Shipping Included"
    ],
    specifications: [
      { label: "Product Code", value: "4X6-DT" },
      { label: "Size", value: "4\" x 6\"" },
      { label: "Formats", value: "Roll & Fanfold" },
      { label: "Labels Range", value: "250 - 4,000" },
      { label: "Material", value: "Direct Thermal Paper Label" },
      { label: "Color", value: "White" },
      { label: "Perforation", value: "Yes" },
      { label: "Printer Type", value: "Direct Thermal" },
      { label: "Compatible/OEM", value: "Yes" }
    ],
    compatiblePrinters: ["Rollo (USB/Wireless)", "Zebra (GC420d/t, GK420d/t, GX420d/t, ZD220/230, ZD420/620, ZP450, ZT210/220/230)", "Arkscan (2054A/K)", "Munbyn (ITPP129/130/941)", "Honeywell (PC42d/t, PC43K)", "TSC (TTP-243/244/247, TE200/210/300/310)", "Citizen (CL-E300/303/321/331/720/730)", "SATO", "Datamax", "Intermec"],
    longDescription: "Ever tried peeling labels one by one, only to end up with torn corners or wasted sheets? These 4x6 thermal labels are made for smooth, high-speed printing with perforated edges between each label. Available in multiple formats from 250 labels per roll to 4,000 labels fanfold. Perfect for Etsy sellers, warehouse teams, Amazon or eBay merchants.",
    customerReviews: [
      {
        id: "1",
        author: "Sarah M.",
        rating: 5,
        date: "January 10, 2026",
        title: "Perfect for my small business!",
        content: "I run an Etsy shop and these labels are exactly what I needed. They print clearly, stick well, and the perforation makes them super easy to tear off. The quality is excellent and they work flawlessly with my Rollo printer. Highly recommend!",
        verified: true
      },
      {
        id: "2",
        author: "Mike T.",
        rating: 5,
        date: "January 8, 2026",
        title: "Best labels I've used",
        content: "After trying several brands, these are by far the best. No smudging, no jamming, and the adhesive is strong without being too sticky. The price point is also great for the quality you get. Will definitely be ordering more.",
        verified: true
      },
      {
        id: "3",
        author: "Jennifer K.",
        rating: 4,
        date: "January 5, 2026",
        title: "Great value for the price",
        content: "These labels work great with my Zebra printer. The only reason I'm giving 4 stars instead of 5 is that I wish they came in larger quantities, but overall very satisfied with the purchase.",
        verified: true
      },
      {
        id: "4",
        author: "David R.",
        rating: 5,
        date: "December 28, 2025",
        title: "Excellent for shipping",
        content: "I ship about 50 packages a day and these labels have been perfect. They feed smoothly, print clearly, and I've never had a package come back because the label fell off or became unreadable. Top notch product!",
        verified: true
      },
      {
        id: "5",
        author: "Lisa P.",
        rating: 5,
        date: "December 20, 2025",
        title: "Professional quality at a great price",
        content: "As a warehouse manager, I've used many different label brands. These are professional quality at a fraction of the cost of name brands. The perforations are clean, and they work with all our printers. Very impressed!",
        verified: true
      }
    ]
  },
  
  // Thermal Transfer Labels
  {
    id: "4x6-thermal-transfer",
    name: "4\" x 6\" Thermal Transfer Labels",
    description: "Premium thermal transfer labels for long-lasting, fade-resistant printing. Using ribbon technology for durability in harsh conditions.",
    price: 59.95,
    originalPrice: null,
    rating: 4.8,
    reviews: 118,
    image: "/images/submenus/direct-thermal/Fanfold.jpg",
    images: [
      "/images/submenus/direct-thermal/Fanfold.jpg",
      "/images/products/thermal-transfer/4-x-6-Thermal-Transfer-Labels--Fanfold_c26ff34a-c76e-4f3e-94d2-978445195abb.jpg",
      "/images/products/thermal-transfer/4x6-TT-Fanfold-Labels_3c788485-9b3d-4af4-88ce-0f02cd510c7b.jpg",
      "/images/products/thermal-transfer/Thermal-Transfer-Labels-Drop-Down-Fanfold.jpg"
    ],
    video: "/images/products/thermal-transfer/video 3270a7636b39414f95baae94d2d57d03.HD-1080p-7.2Mbps-66915513.mp4",
    tag: "Best Seller",
    specs: ["Multiple Formats Available", "1000-4000 Labels Per Pack", "Requires Ribbon"],
    category: "thermal-transfer",
    features: [
      "Durable Thermal Transfer Technology",
      "Fade-Resistant Printing",
      "Fanfold & Roll Designs Available",
      "Compatible with Major Brands",
      "Perfect for Harsh Environments",
      "Free Shipping Included"
    ],
    specifications: [
      { label: "Product Code", value: "4X6-TT" },
      { label: "Size", value: "4\" x 6\"" },
      { label: "Formats", value: "Roll & Fanfold" },
      { label: "Labels Range", value: "1,000 - 4,000" },
      { label: "Material", value: "Thermal Transfer Paper" },
      { label: "Perforation", value: "Yes" },
      { label: "Printer Type", value: "Thermal Transfer" },
      { label: "Compatible/OEM", value: "Yes" }
    ],
    compatiblePrinters: ["Zebra", "TSC", "Citizen", "Honeywell", "Datamax", "SATO", "Intermec"],
    longDescription: "Premium thermal transfer labels designed for durability and longevity. Using ribbon technology, these labels produce sharp, fade-resistant prints that withstand harsh conditions including moisture, chemicals, and extreme temperatures. Available in multiple formats from 1,000 to 4,000 labels per case.",
    customerReviews: [
      {
        id: "1",
        author: "Robert H.",
        rating: 5,
        date: "January 12, 2026",
        title: "Outstanding durability!",
        content: "We use these labels in a warehouse environment with extreme temperature fluctuations and they hold up perfectly. The print quality is crisp and doesn't fade even after months of storage. Worth every penny!",
        verified: true
      },
      {
        id: "2",
        author: "Amanda S.",
        rating: 5,
        date: "January 9, 2026",
        title: "Perfect for industrial use",
        content: "These thermal transfer labels are exactly what we needed for our manufacturing facility. They withstand chemicals, moisture, and rough handling. The fanfold design is convenient and reduces downtime. Highly recommend for industrial applications!",
        verified: true
      },
      {
        id: "3",
        author: "Tom B.",
        rating: 4,
        date: "January 4, 2026",
        title: "Great quality, long lasting",
        content: "Excellent labels that last much longer than direct thermal. The only downside is you need to buy ribbons separately, but that's expected with thermal transfer. Quality is top-notch and worth the extra step.",
        verified: true
      },
      {
        id: "4",
        author: "Michelle W.",
        rating: 5,
        date: "December 30, 2025",
        title: "Best for long-term labeling",
        content: "If you need labels that will last for years, these are the ones to get. We've tested them in various conditions and they always perform. The print stays clear and readable even after extended exposure to sunlight and moisture.",
        verified: true
      },
      {
        id: "5",
        author: "Chris D.",
        rating: 5,
        date: "December 22, 2025",
        title: "Superior fade resistance",
        content: "Switched from direct thermal to these and the difference is night and day. Labels from 2 years ago still look brand new. Perfect for inventory management where labels need to remain readable for extended periods.",
        verified: true
      }
    ]
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "direct-thermal",
    name: "4x6 Direct Thermal Labels - Rolls & Fanfold",
    description: "Direct thermal labels are designed for seamless printing with heat-sensitive technology, eliminating the need for ribbons or ink. Whether you need them for shipping, inventory management, or retail labeling, 4x6 Labels offer reliability, durability, and sharp print quality.",
    image: null
  },
  {
    id: "thermal-transfer",
    name: "4x6 Thermal Transfer Labels - Rolls & Fanfold",
    description: "Thermal transfer labels are the ideal choice for durable, long-lasting printing. Using a thermal transfer printer, these labels require a ribbon to ensure sharp, fade-resistant prints that withstand tough environments. Thermal transfer technology guarantees precision and reliability across industries, whether it's for product labeling, inventory management, or shipping labels.",
    image: null
  }
];

// Filter options for Category page
export const FILTER_OPTIONS: FilterOptions = {
  printerBrands: ["Rollo", "Zebra", "Dymo", "Brother", "Epson", "TSC", "Citizen", "Honeywell"],
  sortOptions: [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "best-selling", label: "Best Selling" }
  ],
  priceRange: {
    min: 0,
    max: 300,
    step: 5
  }
};

// Volume discount tiers (matches actual product page pricing)
export const VOLUME_DISCOUNTS: VolumeDiscount[] = [
  { quantity: 1, discount: 0, label: "1 Case - $67.95" },
  { quantity: 2, discount: 0.01, label: "2-4 Cases - $66.95 (Save 1%)" },
  { quantity: 5, discount: 0.06, label: "5-9 Cases - $63.95 (Save 6%)" },
  { quantity: 10, discount: 0.12, label: "10-24 Cases - $59.95 (Save 12%)" },
  { quantity: 25, discount: 0.15, label: "25-49 Cases - $57.95 (Save 15%)" },
  { quantity: 50, discount: 0.18, label: "50+ Cases - $55.95 (Save 18%)" }
];

// Shipping & guarantee information
export const POLICIES: Policies = {
  freeShippingThreshold: 0,
  guaranteeDays: 30,
  features: [
    {
      icon: "Truck",
      title: "Free Shipping",
      description: "Always free on all orders"
    },
    {
      icon: "ShieldCheck",
      title: "30-Day Money Back Guarantee",
      description: null
    }
  ]
};
