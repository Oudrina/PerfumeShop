import "../styles/ProductGrid.css"
import ProductCard from "./ProductCard"
import products from "../data/products"

function ProductGrid(){
    return(
        <div className="product-grid-wrapper">
           {
            products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
           }



        </div>
    )
}

export default ProductGrid