"use client";

import { useState } from "react";

type Props = {
  productId: number;
};

export default function AddToCart({ productId }: Props) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex w-full items-center gap-3">
      <input
        type="number"
        min={1}
        value={qty}
        onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
        className="w-20 rounded-md border border-neutral-700 bg-neutral-950 px-3 py-3 text-center text-sm outline-none focus:border-neutral-500"
      />

      <button
        type="button"
        className="flex-1 rounded-md bg-white px-6 py-3 text-sm font-semibold tracking-widest text-black transition hover:opacity-90"
        onClick={() => {
          // TODO: wire to cart action / context
          console.log("ADD TO CART", { productId, qty });
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
