"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

const GOLD = "rgb(188,172,118)";

const SIZE_LABELS: Record<string, string> = {
  s: "SMALL",
  m: "MEDIUM",
  l: "LARGE",
  xl: "EXTRA LARGE",
};

type Props = {
  productId: string;
  price: number;
  sizes?: string[];
  colors?: string[];
};

export default function AddToCart({
  productId,
  price,
  sizes = [],
  colors = [],
}: Props) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(sizes[0] ?? "s");
  const [color, setColor] = useState(colors[0] ?? "");

  const handleAddToCart = () => {
    const cartItem = {
      productId,
      qty,
      size,   // s | m | l | xl
      color,
      price,
    };

    console.log("ADD TO CART:", cartItem);
  };

  return (
    <div className="space-y-7">
      {/* Size */}
      {sizes.length > 0 && (
        <div>
          <label className="block text-sm mb-2 text-white">Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full rounded-md border border-neutral-700 bg-black px-4 py-3 text-white outline-none focus:border-[rgb(188,172,118)]"
          >
            {sizes.map((s) => (
              <option key={s} value={s}>
                {SIZE_LABELS[s] ?? s.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Color */}
      {colors.length > 0 && (
        <div>
          <label className="block text-sm mb-2 text-white">Color</label>
          <div className="flex flex-wrap gap-3">
            {colors.map((c) => {
              const active = color === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`rounded-md px-4 py-2 text-xs tracking-widest border transition
                    ${
                      active
                        ? "bg-[rgb(188,172,118)] text-black border-[rgb(188,172,118)]"
                        : "border-neutral-700 text-white hover:border-[rgb(188,172,118)]"
                    }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity + Add */}
      <div className="flex gap-4">
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-20 rounded-md border border-neutral-700 bg-black text-center text-white outline-none focus:border-[rgb(188,172,118)]"
        />

        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-md bg-[rgb(188,172,118)] py-3 text-sm font-semibold tracking-widest text-black hover:opacity-90"
        >
          ADD TO CART
        </button>
      </div>

      {/* Wishlist */}
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-[rgb(188,172,118)]"
      >
        <Heart size={18} className="stroke-[rgb(188,172,118)]" />
        Add to wishlist
      </button>
    </div>
  );
}
