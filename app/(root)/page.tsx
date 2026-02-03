import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/ProductList";

const HomePage = () => {
    return (
        <>
            <ProductList data={sampleData.products} title="Featured Products" />
        </>
      );
}
 
export default HomePage;