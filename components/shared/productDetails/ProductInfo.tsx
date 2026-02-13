import { Product } from "@/types/Products";
import AddToCart from "./AddToCart";

export default function ProductInfo({ product }: { product: Product }) {
  const hasDiscount = typeof product.discount === "number" && product.discount > 0;

  const finalPrice = hasDiscount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const stars = Math.round(product.rating);

  return (
    <div className="flex flex-col text-black">
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
            <span className="text-neutral-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <span className="text-sm text-neutral-900">
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

      {/* Add To Cart */}
      <AddToCart
        item={{
          productId: product.id!,
          name: product.name,
          slug: product.slug,
          price: product.price, 
          qty: 1,
          image: product.images?.[0] ?? "/placeholder.png",
        }}
      />

      {/* Meta */}
      <div className="mt-8 space-y-1 text-sm text-neutral-400">
        <p>
          <span className="font-semibold text-black">Category:</span>{" "}
          {product.category}
        </p>
        {product.tags && (
          <p>
            <span className="font-semibold text-black">Tags:</span>{" "}
            {product.tags.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
