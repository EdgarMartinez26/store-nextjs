import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/actions/product.actions";
import ProductGallery from "@/components/shared/productDetails/productGallery";
import ProductInfo from "@/components/shared/productDetails/ProductInfo";
import AddToCart from "@/components/AddToCart";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <p className="mb-6 text-sm font-normal text-neutral-400 ">
        <span className="text-[rgb(188,172,118)]">Home</span> — 
        <span className="text-[rgb(188,172,118)]">{product.category}</span> — 
        <span className="text-[rgb(172,95,162)]">{product.name}</span>
      </p>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <ProductGallery images={product.images} tags={product.tags} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}
