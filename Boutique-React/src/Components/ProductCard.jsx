import { Link } from "react-router-dom";

function ProductCard({ product, onDeleteProduct, onAddToCart }) {
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
      <button className="btn_cart" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`}>view details</Link>
    </div>
  );
}
export default ProductCard;