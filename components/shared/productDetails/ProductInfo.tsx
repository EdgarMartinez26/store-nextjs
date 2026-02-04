import { Product } from "@/types/Products";
import AddToCart from "./AddToCart";

export default function ProductInfo({ product }: { product: Product }) {
  const hasDiscount = typeof product.discount === "number" && product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const stars = Math.round(product.rating);

  return (
    <div className="flex flex-col text-white">
      <h1 className="mb-4 text-3xl font-semibold tracking-wide">
        {product.name}
      </h1>

      {/* Price + Rating */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold text-[rgb(188,172,118)]">
            ${finalPrice.toFixed(2)}
          </span>

          {hasDiscount && product.originalPrice && (
            <span className="text-neutral-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <span className="text-sm text-neutral-400">
          <span className="text-[rgb(188,172,118)]">
            {"★".repeat(stars)}
          </span>
          {"☆".repeat(5 - stars)} ({product.numReviews})
        </span>
      </div>

      {/* Description */}
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-neutral-400">
        {product.description}
      </p>

      {/* Actions */}
      <AddToCart
        productId={product.slug}
        price={product.price}
        sizes={product.sizes}
        colors={product.colors}
      />

      {/* Meta */}
      <div className="mt-8 space-y-1 text-sm text-neutral-400">
        <p>
          <span className="font-semibold text-white">Category:</span>{" "}
          {product.category}
        </p>
        {product.tags && (
          <p>
            <span className="font-semibold text-white">Tags:</span>{" "}
            {product.tags.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
