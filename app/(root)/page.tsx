import HeroCarousel from "@/components/carousel/Carousel";
import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
    const latestProducts = await getLatestProducts();
    return (
        <>
           <HeroCarousel />
            <div className="container mx-auto py-12"> 
                <ProductList data={latestProducts} title="Featured Products" />
            </div>
        </>
      );
}
 
export default HomePage;