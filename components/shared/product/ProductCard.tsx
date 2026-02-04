'use client';

import { Product } from '@/types/Products';
import Image from 'next/image';
import Link from 'next/link';
import ProductImageOverlay from './ProductImageOverlay';

const ProductCard = ({ product }: { product: Product }) => {
  const hasSecondImage = product.images.length > 1;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-500 ease-out hover:shadow-xl">
      
      {/* Image container */}
      <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80 lg:h-96">
        <Link href={`/product/${product.slug}`} className="relative block h-full w-full">
          
          {/* Base image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority
            className={`
              object-cover
              transition-all
              duration-700
              ease-in-out
              will-change-transform
              ${hasSecondImage ? 'group-hover:opacity-0' : 'opacity-100'}
            `}
          />

          {/* Hover image */}
          {hasSecondImage && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate`}
              fill
              className="
                object-cover
                opacity-0
                scale-105
                transition-all
                duration-700
                ease-in-out
                will-change-transform
                group-hover:opacity-100
                group-hover:scale-100
              "
            />
          )}
        </Link>

        {/* Overlay */}
        <ProductImageOverlay
          onExpand={() => {
            console.log('Expand clicked');
          }}
        />
      </div>

      {/* Text */}
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-700">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-bold text-gray-400">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
