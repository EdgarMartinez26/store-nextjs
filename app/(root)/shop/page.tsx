import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Shop = async () => {
    const latestProducts = await getLatestProducts();
    return (
        <>
            <ProductList data={latestProducts} title="Featured Products" />
        </>
      );
}
 
export default Shop;