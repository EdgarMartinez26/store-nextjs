// Define a type for a single product
export interface Product {
  name: string;
  slug: string;
  id?: string;
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
  bannerUrl: string | null;
  tags: string[];
  sizes: string[];
  colors: string[];
  discount: number; // percentage
  createdAt?: string;
  updatedAt?: string;
}

// Define the type for the full data object
export interface SampleDataWomen {
  products: Product[];
}
