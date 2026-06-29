import ProductCard from "./ProductCard"

function ProductList({products ,onDeleteProduct,onAddToCart  }){
    return(
        <div className="cards">
        {products.map((p) => (
          <ProductCard key={p.id} product={p}
           onDeleteProduct={onDeleteProduct}
             onAddToCart={onAddToCart} />
        ))}
      </div>
    )
}
export default ProductList