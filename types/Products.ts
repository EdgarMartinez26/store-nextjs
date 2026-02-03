// Define a type for a single product
export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  originalPrice: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
  tags: string[];
  sizes: string[];
  colors: string[];
  discount: number; // percentage
}

// Define the type for the full data object
export interface SampleDataWomen {
  products: Product[];
}
