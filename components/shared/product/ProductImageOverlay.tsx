'use client';

import { Heart, Expand } from 'lucide-react';

type Props = {
  onExpand?: () => void;
};

const ProductImageOverlay = ({ onExpand }: Props) => {
  return (
    <div
      suppressHydrationWarning
      className="
        absolute bottom-0 left-0 right-0
        bg-white/40
        flex items-center justify-between
        px-4 py-3
        translate-y-full
        group-hover:translate-y-0
        transition-transform duration-300
      "
    >
      {/* Left: Add to Cart */}
      <button
        className="text-black text-sm font-medium hover:text-red-400 transition-colors"
        aria-label="Add to cart"
      >
        Add to Cart
      </button>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button
          className="text-black hover:text-red-400 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={20} />
        </button>

        <button
          className="text-black hover:text-red-400 transition-colors"
          aria-label="Expand product"
          onClick={onExpand}
        >
          <Expand size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductImageOverlay;
