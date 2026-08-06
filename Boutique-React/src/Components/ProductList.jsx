import { useState } from "react";

import ProductCard from "./ProductCard";

function ProductList({ products, onDeleteProduct, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  function handleFilterClick(category) {
    setSelectedCategory(category);
  }
  let filteredProducts = products;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.type === selectedCategory,
    );
  }
  return (
    <div className="filter-container">
      <select onChange={(e) => handleFilterClick(e.target.value)}>
        <option value="">Select By Type...</option>
        <option value="all">All</option>
        <option value="Vetements">Vetements</option>
        <option value="Chaussures">Chaussures</option>
        <option value="Accessoires">Accessoires</option>
        <option value="Maison">Maison</option>
      </select>
      <div className="cards">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p} 
              onDeleteProduct={onDeleteProduct}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <div className="notFound">
            <h3>No products found</h3>
          </div>
<<<<<<< HEAD
            
        )}
=======
        )}  
>>>>>>> catalog
      </div>
    </div>
  );
}
export default ProductList;
