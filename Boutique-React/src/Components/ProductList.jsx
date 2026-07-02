import { useState } from "react"

import ProductCard from "./ProductCard"

function ProductList({products ,onDeleteProduct,onAddToCart  }){
    const [selectedCategory, setSelectedCategory] = useState("all")
    function handleFilterClick(category) {
    setSelectedCategory(category)
  }
    let filteredProducts = products
if(selectedCategory  !== "all")
{
filteredProducts = filteredProducts.filter((p) => p.type === selectedCategory)
}
    return(
    <div className="filter-container">
      <select onChange={(e) => handleFilterClick(e.target.value)}>
        <option value="all">All</option>
        <option value="Vetements">Vetements</option>
        <option value="Chaussures" >Chaussures</option>
        <option value="Accessoires" >Accessoires</option>
        <option value="Maison" >Maison</option>
      </select>
        <div className="cards">
          
        {
          filteredProducts.map((p)=> (
            <ProductCard 
            key={p.id}
            product={p}
            onDeleteProduct={onDeleteProduct}
            onAddToCart={onAddToCart}
            />
          ))
        }
      </div>
    </div>
    )
}
export default ProductList