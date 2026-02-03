'use client';
import { Product } from '@/types/Products';
import Image from 'next/image';
import Link from 'next/link';
import ProductImageOverlay from './ProductImageOverlay';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Image container */}
      <div className="relative w-full h-96 sm:h-96 md:h-96 lg:h-96 overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Hover footer overlay */}
        <ProductImageOverlay
          onExpand={() => {
            console.log('Expand clicked'); // replace later with modal/card
          }}
        />
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="font-sans font-bold text-md text-gray-700">
          {product.name}
        </h3>
        <p className="text-sm mt-1 font-bold text-gray-400">
          ${product.price}.00
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
