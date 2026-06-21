import "../styles/ProductCard.css"

function ProductCard({ product }){
    return(
        <div className="product-card-wrapper">

            <img src={product.image} alt={product.name} />

           <div className="product-name-price">
            <p className="product-name">{product.name}</p>
            <p className="product-price">$ {product.price}</p>
           </div>

           {/* <p className="product-description"> {product.description} </p> */}

           <button className="buy-button">
             shop now
           </button>
        </div>
    )
}
export default ProductCard