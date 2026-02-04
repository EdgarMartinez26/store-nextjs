"use client";

export default function WishlistAndSocial() {
  return (
    <div className="flex items-center justify-between">
      {/* Wishlist */}
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white"
      >
        <span className="text-lg">♡</span>
        <span>Add to wishlist</span>
      </button>

      {/* Social */}
      <div className="flex items-center gap-4 text-neutral-500">
        <button type="button" className="hover:text-white" aria-label="Facebook">
          f
        </button>
        <button type="button" className="hover:text-white" aria-label="Twitter">
          𝕏
        </button>
        <button type="button" className="hover:text-white" aria-label="Instagram">
          ⌁
        </button>
      </div>
    </div>
  );
}
