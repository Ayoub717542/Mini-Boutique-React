import { useState } from "react";

function ProductCard({ product, onDeleteProduct, onAddToCart }) {
  const [added,setAdded]=useState(false);
  function handleAdd(){
      onAddToCart(product)
      setAdded(true);

      setTimeout(() => {
        setAdded(false)
      }, 1000);
  }
  return (
    <div className="card_content">
      <i
        className="x-close fa fa-times-circle"
        onClick={() => onDeleteProduct(product.id)}
      ></i>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.type} </p>
      <p>{product.price.toFixed(2)} MAD</p>
      <button  className={added ? "btn_cart added" : "btn_cart"}
      onClick={handleAdd} >
     {added ? "added successfully" : "Add to Cart"}
      </button>
    </div>
  );
}
export default ProductCard;