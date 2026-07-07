import { use, useState } from "react";

function ProductCard({ product, onDeleteProduct, onAddToCart }) {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="card_content">
      <i
        className="x-close fa fa-times-circle"
        onClick={() => setShowConfirm(true)}
      ></i>
      { showConfirm  && (
 <div>
  <label>
    Yes
    <input 
      type="radio" 
      name="product-choice" 
      value="Yes" 
      onClick={() => onDeleteProduct(product.id)} 
    />
  </label>  
  <label>
    No
    <input 
      type="radio" 
      name="product-choice" 
      value="NO" 
      onClick={()=> setShowConfirm(false)}
    />
  </label>
</div>
      )}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.type} </p>
      <p>{product.price.toFixed(2)} MAD</p>
      <button className="btn_cart" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;