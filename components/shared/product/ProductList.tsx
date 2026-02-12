'use client';

import ProductCard from "./ProductCard";
import { Product } from "@/types/Products";

const ProductList = ({data, title}: {data: Product[], title?: string}) => {
    return ( 
        <div className="container mx-auto my-10">
            <h2 className="h2-bold my-15">{title}</h2>
            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">   
                    {data.map((product:Product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>  
            ):(
                <p>No products available.</p>  
            )}
        </div>
     );
}
 
export default ProductList;