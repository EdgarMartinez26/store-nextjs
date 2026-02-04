// components/product/ProductActions.tsx
"use client";

import { Product } from "@/types/Products";
import { Heart } from "lucide-react";
import { useState } from "react";



export default function ProductActions({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("SMALL");
  const [type, setType] = useState("HOODIE");

  return (
    <div className="space-y-6">
      {/* Size */}
      <div>
        <label className="block text-sm mb-2">Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border px-4 py-2 w-full"
        >
          {product.sizes?.map((s: string) => (
            <option key={s}>{s}.</option>
          ))}
        </select>
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm mb-2">Color</label>
        <div className="flex gap-3">
          {product.colors?.map((t: string) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 border ${
                type === t ? "bg-black text-white" : ""
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add */}
      <div className="flex gap-4">
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(+e.target.value)}
          className="w-20 border text-center"
        />

        <button className="flex-1 bg-black text-white py-3">
          Add to cart
        </button>
      </div>

      {/* Wishlist */}
      <button className="flex items-center gap-2 text-sm text-gray-500">
        <Heart size={18} /> Add to wishlist
      </button>
    </div>
  );
}
